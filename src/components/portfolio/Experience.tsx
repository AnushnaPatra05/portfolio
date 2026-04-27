import { Briefcase } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="section-padding bg-secondary/40">
      <div className="container-narrow">
        <div className="reveal max-w-2xl mb-14">
          <span className="text-sm font-semibold text-electric uppercase tracking-widest">
            Experience
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-navy mt-3 mb-4">
            Career timeline
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            Professional journey and key responsibilities.
          </p>
        </div>

        <div className="relative max-w-3xl">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-6 top-2 bottom-2 w-px bg-border" />

          <div className="reveal relative pl-14 md:pl-20">
            {/* Dot */}
            <div className="absolute left-0 md:left-2 top-1 w-9 h-9 rounded-full bg-gradient-accent grid place-items-center shadow-accent ring-4 ring-background">
              <Briefcase className="w-4 h-4 text-accent-foreground" />
            </div>

            <div className="p-7 rounded-xl bg-card border border-border shadow-soft">
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <span className="px-2.5 py-1 rounded bg-electric text-accent-foreground text-xs font-semibold">
                  Present
                </span>
                <span className="text-sm text-muted-foreground font-medium">
                  2022 – Present
                </span>
              </div>
              <h3 className="text-xl font-semibold text-navy">Programmer Analyst</h3>
              <p className="text-electric font-medium mb-4">
                Cognizant Technology Solutions
              </p>
              <ul className="space-y-2.5 text-sm md:text-base text-muted-foreground">
                <li className="flex gap-3">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-electric flex-shrink-0" />
                  Developing and maintaining enterprise Angular applications with a focus on scalability and performance.
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-electric flex-shrink-0" />
                  Implementing complex reactive forms, custom validators, and state management with NgRx.
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-electric flex-shrink-0" />
                  Collaborating with cross-functional teams to translate business requirements into modular component architectures.
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-electric flex-shrink-0" />
                  Integrating RESTful APIs and handling asynchronous data flows using advanced RxJS operators.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
