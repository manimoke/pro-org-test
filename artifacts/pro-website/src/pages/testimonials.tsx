import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const TESTIMONIAL_DETAILS = [
  { quote: "PRO gave me the foundational research skills I needed for graduate studies. The peer-review process was challenging but deeply rewarding.", name: "Sara Ahmed" },
  { quote: "I walked in without knowing how to write a research question and walked out with a paper I actually presented at a symposium. The mentors made all the difference.", name: "Bilal Hussain" },
  { quote: "The weekly feedback sessions taught me more about academic writing than any single course I've taken at university.", name: "Mariam Fayyaz" },
  { quote: "What I appreciated most was how structured everything was — clear deadlines, clear expectations, and mentors who actually read your drafts.", name: "Hamza Iqbal" },
  { quote: "PRO connected me with a small group of students who kept me accountable every week. That community made finishing the project possible.", name: "Areeba Khan" },
  { quote: "I came in for the research experience but left with a genuinely strong resume line and the confidence to apply for graduate programs.", name: "Faizan Sheikh" },
];

const SAMPLE_TESTIMONIALS = TESTIMONIAL_DETAILS.map((t, i) => ({
  id: i,
  ...t,
  cohort: `Cohort ${2022 + (i % 3)}`,
  initials: t.name.split(" ").map((part) => part[0]).join(""),
}));

export default function Testimonials() {
  return (
    <div className="w-full pb-24">
      {/* Header */}
      <section className="bg-primary text-primary-foreground pt-24 pb-16 px-4">
        <div className="container mx-auto text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Alumni Testimonials</h1>
          <p className="text-lg text-primary-foreground/80 leading-relaxed">
            Hear directly from our past cohorts about their experience and growth through the PRO curriculum.
          </p>
        </div>
      </section>

      {/* Featured Video */}
      <section className="py-16 px-4 border-b">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-serif font-bold mb-6 text-center">Featured Story</h2>
          
          <Dialog>
            <DialogTrigger asChild>
              <div className="relative aspect-video bg-card border rounded-xl overflow-hidden cursor-pointer group shadow-sm hover:shadow-md transition-all">
                <div className="absolute inset-0 bg-muted/50 flex flex-col items-center justify-center">
                  <span className="text-muted-foreground font-medium mb-4">Featured video thumbnail (sample placeholder)</span>
                  <div className="w-20 h-20 rounded-full bg-primary/90 text-primary-foreground flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg backdrop-blur-sm">
                    <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-primary-foreground border-b-[10px] border-b-transparent ml-2" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white">
                  <h3 className="text-xl font-bold">From First-Year Skeptic to Published Researcher</h3>
                  <p className="text-white/80">Sara Ahmed, Cohort 2023</p>
                </div>
              </div>
            </DialogTrigger>
            <DialogContent className="max-w-4xl p-0 overflow-hidden bg-black border-none">
              <div className="aspect-video w-full flex items-center justify-center text-white/50">
                Video player (sample placeholder)
              </div>
            </DialogContent>
          </Dialog>

          {/* Horizontal scroll thumbnails */}
          <div className="mt-8 flex gap-4 overflow-x-auto pb-4 snap-x">
            {[1, 2, 3, 4].map(i => (
              <Dialog key={i}>
                <DialogTrigger asChild>
                  <div className="min-w-[240px] md:min-w-[280px] aspect-video bg-muted rounded-lg relative cursor-pointer group snap-center border">
                    <div className="absolute inset-0 flex items-center justify-center text-xs text-muted-foreground font-medium">
                      Video {i} (sample placeholder)
                    </div>
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors flex items-center justify-center">
                      <div className="w-10 h-10 rounded-full bg-white/90 shadow-sm flex items-center justify-center">
                        <div className="w-0 h-0 border-t-4 border-t-transparent border-l-[8px] border-l-primary border-b-4 border-b-transparent ml-1" />
                      </div>
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-4xl p-0 bg-black border-none">
                  <div className="aspect-video w-full flex items-center justify-center text-white/50">
                    Video {i} player (sample placeholder)
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SAMPLE_TESTIMONIALS.map((testimonial) => (
              <Card key={testimonial.id} className="h-full flex flex-col bg-card/50">
                <CardContent className="p-8 flex-1 flex flex-col">
                  <div className="mb-6 flex-1">
                    <svg className="w-8 h-8 text-accent/50 mb-4" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                    <p className="text-muted-foreground leading-relaxed italic">
                      {testimonial.quote}
                    </p>
                  </div>
                  <div className="flex items-center gap-4 mt-auto">
                    <Avatar>
                      <AvatarFallback className="bg-primary/10 text-primary font-medium">
                        {testimonial.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-bold text-sm">{testimonial.name}</div>
                      <div className="text-xs text-muted-foreground">{testimonial.cohort}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
