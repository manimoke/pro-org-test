import { useState } from "react";
import { Link } from "wouter";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useCreateRegistration } from "@workspace/api-client-react";
import type { YearOfStudy, AreaOfInterest } from "@workspace/api-client-react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";

// Fallback in case enums are tricky to import
const YEAR_OPTIONS = ["1st Year", "2nd Year", "3rd Year", "4th Year", "Graduate / Postgraduate", "Other"];
const AREA_OPTIONS = ["Computer Science & AI", "Social Sciences", "Natural Sciences", "Economics & Business", "Public Policy", "Humanities", "Other"];
const HEARD_OPTIONS = ["Instagram", "WhatsApp", "Friend / Referral", "University / Faculty", "LinkedIn", "Other"];

const formSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(5, "Phone number is required"),
  institution: z.string().min(2, "Institution is required"),
  yearOfStudy: z.string().min(1, "Year of study is required"),
  areasOfInterest: z.array(z.string()).min(1, "Select at least one area of interest"),
  howHeard: z.string().optional(),
  notes: z.string().optional(),
});

export default function Home() {
  const { toast } = useToast();
  const createRegistration = useCreateRegistration();
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      institution: "",
      yearOfStudy: "",
      areasOfInterest: [],
      howHeard: "",
      notes: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    createRegistration.mutate(
      {
        data: {
          fullName: values.fullName,
          email: values.email,
          phone: values.phone,
          institution: values.institution,
          // @ts-ignore - mapping to API enum type
          yearOfStudy: values.yearOfStudy,
          // @ts-ignore
          areasOfInterest: values.areasOfInterest,
          howHeard: values.howHeard || null,
          notes: values.notes || null,
        },
      },
      {
        onSuccess: () => {
          setIsSuccess(true);
          toast({ title: "Registration Successful", description: "Welcome to PRO!" });
        },
        onError: (error) => {
          toast({
            variant: "destructive",
            title: "Registration Failed",
            description: error.data?.error || "An unexpected error occurred. Please try again.",
          });
        },
      }
    );
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-background pt-24 pb-16 md:pt-32 md:pb-24 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-primary mb-6">
            Turning curious students into published researchers
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Pakistan Research Organisation is a student-led community that trains undergraduates across Pakistan
            to design, conduct, and publish original research — no prior experience required.
          </p>
          <div className="max-w-xl mx-auto border-2 border-accent rounded-xl p-3">
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <Button size="lg" className="w-full sm:w-auto" onClick={() => document.getElementById("register")?.scrollIntoView({ behavior: "smooth" })}>
                Register Now
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto" asChild>
                <Link href="/curriculum">See what we do</Link>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-3">
              Applications are reviewed on a rolling basis. Most applicants hear back within two weeks.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-card py-16 md:py-24 px-4 border-y">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-serif font-bold mb-6">What is PRO?</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            PRO is a volunteer-run research incubator built by students, for students. We pair you with a
            faculty-reviewed curriculum, a peer cohort, and a dedicated mentor to help you go from picking a
            research question to submitting a paper for publication — all while balancing university coursework.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl md:text-5xl font-serif font-bold text-accent mb-2">120+</div>
            <div className="text-sm uppercase tracking-wider text-primary-foreground/80">Students trained</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-serif font-bold text-accent mb-2">15+</div>
            <div className="text-sm uppercase tracking-wider text-primary-foreground/80">Partner universities</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-serif font-bold text-accent mb-2">40+</div>
            <div className="text-sm uppercase tracking-wider text-primary-foreground/80">Research projects</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-serif font-bold text-accent mb-2">6</div>
            <div className="text-sm uppercase tracking-wider text-primary-foreground/80">Cohorts run</div>
          </div>
        </div>
      </section>

      {/* Testimonial Strip */}
      <section className="py-16 bg-muted/30 px-4">
        <div className="container mx-auto text-center">
          <blockquote className="text-xl md:text-2xl font-serif italic max-w-3xl mx-auto mb-6 text-foreground/80">
            "PRO gave me the structure and accountability I needed to turn a half-formed idea into an actual paper.
            I learned more about research design in one cohort than in two years of coursework."
          </blockquote>
          <div className="text-sm font-semibold text-primary">— Ayesha Raza, Cohort 2024</div>
          <Button variant="link" className="mt-4" asChild>
            <Link href="/testimonials">Read more testimonials &rarr;</Link>
          </Button>
        </div>
      </section>

      {/* Registration Section */}
      <section id="register" className="py-16 md:py-24 px-4 max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-serif font-bold mb-4">Join PRO</h2>
          <p className="text-muted-foreground">Fill out the form below to register your interest.</p>
        </div>

        {isSuccess ? (
          <div className="bg-card border p-8 text-center rounded-lg shadow-sm">
            <h3 className="text-2xl font-serif font-bold text-secondary mb-4">Application Received</h3>
            <p className="text-muted-foreground">
              Thank you for registering with PRO. We will be in touch with you shortly.
            </p>
          </div>
        ) : (
          <div className="bg-card border p-6 md:p-8 rounded-lg shadow-sm">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name *</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email *</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="john@university.edu" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone / WhatsApp *</FormLabel>
                        <FormControl>
                          <Input placeholder="+92 300 1234567" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="institution"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>University / Institution *</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g. LUMS" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="yearOfStudy"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Year of Study *</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select year" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {YEAR_OPTIONS.map((opt) => (
                              <SelectItem key={opt} value={opt}>{opt}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="howHeard"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>How did you hear about us?</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select source" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {HEARD_OPTIONS.map((opt) => (
                              <SelectItem key={opt} value={opt}>{opt}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="areasOfInterest"
                  render={() => (
                    <FormItem>
                      <div className="mb-4">
                        <FormLabel>Areas of Interest *</FormLabel>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {AREA_OPTIONS.map((area) => (
                          <FormField
                            key={area}
                            control={form.control}
                            name="areasOfInterest"
                            render={({ field }) => {
                              return (
                                <FormItem
                                  key={area}
                                  className="flex flex-row items-start space-x-3 space-y-0"
                                >
                                  <FormControl>
                                    <Checkbox
                                      checked={field.value?.includes(area)}
                                      onCheckedChange={(checked) => {
                                        return checked
                                          ? field.onChange([...field.value, area])
                                          : field.onChange(
                                              field.value?.filter(
                                                (value) => value !== area
                                              )
                                            )
                                      }}
                                    />
                                  </FormControl>
                                  <FormLabel className="font-normal">
                                    {area}
                                  </FormLabel>
                                </FormItem>
                              )
                            }}
                          />
                        ))}
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="notes"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Anything else you'd like us to know?</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us a bit about your research background or goals..."
                          className="resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" size="lg" className="w-full" disabled={createRegistration.isPending}>
                  {createRegistration.isPending ? "Submitting..." : "Submit Registration"}
                </Button>
              </form>
            </Form>
          </div>
        )}
      </section>
    </div>
  );
}
