import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const PROJECT_DETAILS = [
  {
    title: "The Impact of Microfinance on Rural Household Income in Punjab",
    description: "Examining whether small-scale microloans measurably improve household income for rural families.",
    fullDescription: "This project surveyed 140 households across three districts in Punjab to assess whether access to microfinance correlated with improved income stability. The team combined household interviews with secondary data from microfinance institutions, presenting their findings at PRO's annual research symposium.",
    authors: "Hina Malik, Usman Tariq",
  },
  {
    title: "Youth Political Engagement in Urban Pakistan",
    description: "A survey-based study on why university students do or don't participate in local politics.",
    fullDescription: "Using a mixed-methods survey of over 300 university students across Lahore and Karachi, this project explored the barriers to youth political participation and proposed three interventions universities could adopt to increase civic engagement.",
    authors: "Ahmed Zubair, Sana Iqbal",
  },
  {
    title: "Mental Health Stigma Among Pakistani University Students",
    description: "Qualitative interviews exploring how stigma shapes help-seeking behavior on campus.",
    fullDescription: "Through semi-structured interviews with 25 students, this project mapped the social and cultural factors that discourage students from seeking mental health support, and compared findings against existing counseling resources at three partner universities.",
    authors: "Zainab Sheikh, Bilal Ahmed",
  },
  {
    title: "Access to Clean Water in Peri-Urban Sindh",
    description: "Assessing infrastructure gaps and community-led solutions for water access.",
    fullDescription: "This field study documented water access patterns across five peri-urban communities in Sindh, identifying infrastructure gaps and evaluating the effectiveness of two community-led water management initiatives.",
    authors: "Fatima Noor, Hassan Raza",
  },
  {
    title: "Small Business Recovery After Economic Shocks",
    description: "A case study of how local shopkeepers adapted after recent inflation spikes.",
    fullDescription: "Combining structured interviews with 40 small business owners and publicly available economic data, this project analyzed adaptation strategies used by local retailers during periods of high inflation, and modeled which strategies correlated with survival past 12 months.",
    authors: "Omar Farooq, Mahnoor Khan",
  },
  {
    title: "Gender Representation in Pakistani Textbooks",
    description: "A content analysis of gender roles portrayed in secondary school curricula.",
    fullDescription: "This project conducted a systematic content analysis of secondary-school textbooks approved by two provincial curriculum boards, quantifying the frequency and framing of gender roles and comparing results against national education policy goals.",
    authors: "Aleena Yousaf, Danish Kareem",
  },
  {
    title: "Digital Literacy Gaps in Rural Secondary Schools",
    description: "Measuring the digital skills gap between urban and rural secondary students.",
    fullDescription: "Through a skills assessment administered to 200 students across six rural and urban schools, this project quantified disparities in digital literacy and proposed a low-cost intervention model piloted with one partner school.",
    authors: "Rimsha Aslam, Talha Siddiqui",
  },
  {
    title: "Public Trust in Local Government Institutions",
    description: "A survey measuring trust levels in municipal services across two cities.",
    fullDescription: "This project surveyed 250 residents in Multan and Faisalabad to measure trust in municipal service delivery, correlating trust levels with self-reported service quality and prior direct experience with local government offices.",
    authors: "Kiran Abbas, Waleed Anjum",
  },
  {
    title: "The Role of Social Media in Shaping Consumer Choices",
    description: "Analyzing how Gen Z consumers in Pakistan discover and evaluate products online.",
    fullDescription: "Drawing on a survey of 180 Gen Z consumers combined with content analysis of popular local social media accounts, this project examined how platform-driven discovery influences purchasing decisions among young Pakistani consumers.",
    authors: "Noor Fatima, Saad Malik",
  },
];

const SAMPLE_PROJECTS = PROJECT_DETAILS.map((project, i) => ({
  id: i,
  ...project,
  cohort: `Cohort ${2022 + (i % 3)}`,
  track: ["Economics", "Public Policy", "Social Sciences"][i % 3],
}));

export default function Projects() {
  const [filter, setFilter] = useState("All");
  
  const tracks = ["All", "Economics", "Public Policy", "Social Sciences"];
  
  const filteredProjects = filter === "All" 
    ? SAMPLE_PROJECTS 
    : SAMPLE_PROJECTS.filter(p => p.track === filter);

  return (
    <div className="w-full pb-24">
      {/* Header */}
      <section className="bg-card pt-24 pb-16 px-4 border-b">
        <div className="container mx-auto text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Research Projects</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            A sample of the original research produced by PRO cohorts, spanning economics, public policy,
            and the social sciences.
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto">
          {/* Filters */}
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {tracks.map(t => (
              <Badge 
                key={t} 
                variant={filter === t ? "default" : "outline"}
                className="cursor-pointer text-sm py-1 px-4"
                onClick={() => setFilter(t)}
              >
                {t}
              </Badge>
            ))}
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <Dialog key={project.id}>
                <DialogTrigger asChild>
                  <Card className="cursor-pointer hover:shadow-md transition-shadow h-full flex flex-col group">
                    <div className="aspect-video bg-muted w-full overflow-hidden relative">
                      <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/50 font-medium">
                        Thumbnail (sample placeholder)
                      </div>
                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors" />
                    </div>
                    <CardHeader className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <Badge variant="secondary" className="font-normal text-xs">{project.track}</Badge>
                        <span className="text-xs text-muted-foreground font-medium">{project.cohort}</span>
                      </div>
                      <CardTitle className="font-serif leading-snug">{project.title}</CardTitle>
                      <CardDescription className="line-clamp-2 mt-2">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </DialogTrigger>
                <DialogContent className="max-w-2xl">
                  <DialogHeader>
                    <div className="flex items-center gap-3 mb-4">
                      <Badge>{project.track}</Badge>
                      <span className="text-sm text-muted-foreground">{project.cohort}</span>
                    </div>
                    <DialogTitle className="text-2xl font-serif">{project.title}</DialogTitle>
                    <DialogDescription className="text-base mt-2 font-medium">
                      By {project.authors}
                    </DialogDescription>
                  </DialogHeader>
                  <div className="py-4">
                    <h4 className="font-semibold mb-2">Abstract</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.fullDescription}
                    </p>
                  </div>
                  <div className="mt-4 pt-4 border-t text-sm">
                    <a href="#" className="text-accent hover:underline font-medium">
                      Read the full write-up &rarr;
                    </a>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Badge variant="outline" className="py-2 px-6 text-sm text-muted-foreground cursor-pointer">
              Load more projects
            </Badge>
          </div>
        </div>
      </section>
    </div>
  );
}
