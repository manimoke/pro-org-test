import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";

export default function Curriculum() {
  return (
    <div className="w-full pb-24">
      {/* Header */}
      <section className="bg-primary text-primary-foreground pt-24 pb-16 px-4">
        <div className="container mx-auto text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Our Curriculum</h1>
          <p className="text-lg text-primary-foreground/80 leading-relaxed">
            A 12-week, cohort-based program that takes you from research fundamentals to a completed,
            peer-reviewed paper — taught by graduate mentors and grounded in real academic publishing standards.
          </p>
        </div>
      </section>

      {/* Sample Lecture */}
      <section className="py-16 px-4 border-b">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-8">
            <h2 className="text-2xl font-serif font-bold mb-2">Sample Lecture</h2>
            <p className="text-muted-foreground">Introduction to Research Methodologies — Week 1</p>
          </div>
          <Card className="overflow-hidden bg-card/50">
            <div className="aspect-video bg-muted flex items-center justify-center relative">
              <div className="absolute inset-0 flex items-center justify-center flex-col text-muted-foreground">
                <div className="w-16 h-16 rounded-full bg-background flex items-center justify-center mb-4 shadow-sm">
                  <div className="w-0 h-0 border-t-8 border-t-transparent border-l-[14px] border-l-primary border-b-8 border-b-transparent ml-1" />
                </div>
                <span>Lecture recording (sample placeholder)</span>
              </div>
            </div>
            <CardContent className="p-6">
              <h3 className="font-bold text-lg mb-2">What Makes a Research Question Good?</h3>
              <p className="text-sm text-muted-foreground">
                Students learn to narrow a broad topic into a focused, testable research question and identify
                the right methodology — the foundation every later module builds on.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Full Syllabus */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-serif font-bold mb-8 text-center">Program Syllabus</h2>
          
          <Accordion type="single" collapsible className="w-full">
            {[
              {
                title: "Foundations of Research Design",
                description: "Build the conceptual toolkit for framing a research question, choosing a methodology, and scoping a project you can realistically complete in one semester.",
                topics: ["Choosing a research question", "Qualitative vs. quantitative approaches", "Setting a realistic project timeline"],
              },
              {
                title: "Literature Review & Academic Writing",
                description: "Learn how to search, organize, and synthesize existing research, and how to write with the clarity and structure expected in academic journals.",
                topics: ["Using academic databases", "Citation management", "Structuring a literature review"],
              },
              {
                title: "Data Collection Methods",
                description: "Design surveys, interviews, or experiments and understand the ethical considerations of working with human subjects.",
                topics: ["Survey and interview design", "Sampling strategies", "Research ethics & consent"],
              },
              {
                title: "Data Analysis Fundamentals",
                description: "Get hands-on with basic statistical analysis and qualitative coding techniques to turn raw data into findings.",
                topics: ["Descriptive statistics", "Intro to qualitative coding", "Common analysis tools"],
              },
              {
                title: "Academic Writing & Peer Review",
                description: "Draft your findings into a formal paper and practice giving and receiving structured peer feedback, just like a journal review process.",
                topics: ["Structuring a research paper", "Giving constructive peer feedback", "Revising based on feedback"],
              },
              {
                title: "Presenting & Publishing Your Work",
                description: "Prepare your final paper for submission and practice presenting your findings to an audience of peers and mentors at the closing symposium.",
                topics: ["Presentation & poster design", "Submitting to student journals", "The closing symposium"],
              },
            ].map((module, index) => (
              <AccordionItem key={module.title} value={`week-${index + 1}`}>
                <AccordionTrigger className="text-left font-serif text-lg">
                  Module {index + 1}: {module.title}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  <p className="mb-4">{module.description}</p>
                  <ul className="list-disc list-inside space-y-2 ml-4 text-sm">
                    {module.topics.map((topic) => (
                      <li key={topic}>{topic}</li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-muted/30 text-center mt-12">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-2xl font-serif font-bold mb-6">Ready to advance your research skills?</h2>
          <Button size="lg" asChild>
            <Link href="/#register">Apply for the next cohort</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
