import { Router } from "express";
import healthRouter from "./health.js";
import registrationsRouter from "./registrations.js";

const router = Router();

router.use(healthRouter);
router.use(registrationsRouter);

export default router;
