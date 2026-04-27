import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "ReactiveForm Suite",
    desc: "A complex multi-step form application built with Angular Reactive Forms, featuring custom async validators, cross-field validation, and real-time error feedback.",
    tags: ["Angular", "Reactive Forms", "Custom Validators", "SCSS"],
  },
  {
    title: "NgRx Dashboard",
    desc: "A data-rich admin dashboard leveraging NgRx for global state management, with REST API integration, loading/error states, and dynamic data tables.",
    tags: ["Angular", "NgRx", "REST API", "Bootstrap"],
  },
  {
    title: "RxJS Stream Manager",
    desc: "A real-time data stream interface using advanced RxJS operators like switchMap, combineLatest, and debounceTime to handle concurrent API calls and live UI updates.",
    tags: ["Angular", "RxJS", "forkJoin", "TypeScript"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-background">
      <div className="container-narrow">
        <div className="reveal max-w-2xl mb-14">
          <span className="text-sm font-semibold text-electric uppercase tracking-widest">
            Projects
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-navy mt-3 mb-4">
            Selected work
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            A snapshot of Angular projects showcasing reactive patterns, state management,
            and real-time data handling.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <article
              key={p.title}
              className="reveal group flex flex-col p-7 rounded-xl bg-card border border-border shadow-soft hover:shadow-card hover:-translate-y-1 transition-smooth"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="aspect-[16/10] rounded-lg bg-gradient-hero mb-6 relative overflow-hidden">
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage:
                      "linear-gradient(hsl(0 0% 100% / 0.5) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 100% / 0.5) 1px, transparent 1px)",
                    backgroundSize: "30px 30px",
                  }}
                />
                <div className="absolute inset-0 grid place-items-center">
                  <span className="text-white/90 font-bold text-2xl tracking-tight">
                    {p.title.split(" ")[0]}
                  </span>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-navy mb-3">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-grow">
                {p.desc}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded bg-electric/10 text-electric text-xs font-semibold"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <Button asChild variant="ghostNavy" size="sm" className="self-start">
                <a href="#">
                  View Project
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </Button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
