import founder1 from "@/assets/team/founder-1.png";
import founder2 from "@/assets/team/founder-2.png";
import vp from "@/assets/team/vp.png";
import mentor from "@/assets/team/mentor.png";

const TEAM_MEMBERS = [
  {
    name: "Hamza Farooq",
    title: "Founder",
    photo: founder1,
  },
  {
    name: "Ayesha Malik",
    title: "President",
    photo: founder2,
  },
  {
    name: "Daniyal Khalid",
    title: "Vice President",
    photo: vp,
  },
];

const MENTOR = {
  name: "Dr. Imran Siddiqui",
  title: "Faculty Mentor",
  photo: mentor,
  bio: "Dr. Siddiqui advises PRO cohorts on research design and methodology, drawing on years of experience supervising undergraduate and graduate research across the social sciences.",
};

export default function Team() {
  return (
    <div className="w-full">
      {/* Header */}
      <section className="bg-primary text-primary-foreground pt-24 pb-16 px-4">
        <div className="container mx-auto text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">The Team</h1>
          <p className="text-lg text-primary-foreground/80 leading-relaxed">
            Meet the students and mentor behind Pakistan Research Organisation, working to make rigorous
            research training accessible to every curious undergraduate.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-16 md:py-24 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="grid sm:grid-cols-3 gap-8">
            {TEAM_MEMBERS.map((member) => (
              <div key={member.name} className="text-center">
                <div className="aspect-square w-full max-w-[220px] mx-auto rounded-2xl overflow-hidden mb-5 border border-card-border shadow-sm">
                  <img
                    src={member.photo}
                    alt={`Portrait of ${member.name}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-serif font-bold text-lg">{member.name}</h3>
                <p className="text-accent text-sm font-medium mt-1">{member.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mentor */}
      <section className="py-16 md:py-24 px-4 bg-secondary text-secondary-foreground">
        <div className="container mx-auto max-w-3xl">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8 text-center sm:text-left">
            <div className="w-full max-w-[220px] aspect-square rounded-2xl overflow-hidden border border-card-border shadow-sm shrink-0">
              <img
                src={MENTOR.photo}
                alt={`Portrait of ${MENTOR.name}`}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="font-serif font-bold text-2xl text-secondary-foreground">{MENTOR.name}</h3>
              <p className="text-accent text-sm font-medium mt-1 mb-4">{MENTOR.title}</p>
              <p className="text-secondary-foreground/70 leading-relaxed">{MENTOR.bio}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6">Our Story</h2>
          <p className="text-muted-foreground leading-relaxed">
            Hamza started Pakistan Research Organisation after struggling to find any structured way to
            get involved in research as an undergraduate — no mentorship, no clear process, and no peers
            doing the same thing. What began as a handful of students meeting to review each other's work
            has grown into a nationwide community of over a hundred researchers. Today, PRO exists so that
            no curious student has to figure it out alone.
          </p>
        </div>
      </section>
    </div>
  );
}
