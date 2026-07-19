import { Router } from "express";
import { db, registrationsTable } from "@workspace/db";
import {
  CreateRegistrationBody,
  CreateRegistrationResponse,
} from "@workspace/api-zod";

const router = Router();

router.post("/registrations", async (req, res): Promise<void> => {
  const parsed = CreateRegistrationBody.safeParse(req.body);
  if (!parsed.success) {
    req.log.warn({ errors: parsed.error.message }, "Invalid registration body");
    res.status(400).json({ error: parsed.error.message });
    return;
  }

  const { fullName, email, phone, institution, yearOfStudy, areasOfInterest, howHeard, notes } =
    parsed.data;

  const [registration] = await db
    .insert(registrationsTable)
    .values({
      fullName,
      email,
      phone,
      institution,
      yearOfStudy,
      areasOfInterest,
      howHeard: howHeard ?? null,
      notes: notes ?? null,
    })
    .returning();

  res.status(201).json(CreateRegistrationResponse.parse(registration));

  void forwardToGoogleSheet(registration, req.log);
});

function forwardToGoogleSheet(
  registration: typeof registrationsTable.$inferSelect,
  log: { warn: (obj: unknown, msg: string) => void },
): Promise<void> {
  const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
  if (!webhookUrl) {
    return Promise.resolve();
  }

  return fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      id: registration.id,
      fullName: registration.fullName,
      email: registration.email,
      phone: registration.phone,
      institution: registration.institution,
      yearOfStudy: registration.yearOfStudy,
      areasOfInterest: registration.areasOfInterest,
      howHeard: registration.howHeard,
      notes: registration.notes,
      createdAt: registration.createdAt,
    }),
  })
    .then((response) => {
      if (!response.ok) {
        log.warn(
          { status: response.status, registrationId: registration.id },
          "Google Sheets webhook responded with a non-OK status",
        );
      }
    })
    .catch((error: unknown) => {
      log.warn(
        { error, registrationId: registration.id },
        "Failed to forward registration to Google Sheets webhook",
      );
    });
}

export default router;
