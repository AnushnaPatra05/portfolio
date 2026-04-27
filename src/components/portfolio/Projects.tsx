import { Button } from "@/components/ui/button";
import { ArrowUpRight, Github } from "lucide-react";

export const projects = [
  {
    title: "ReactiveForm Suite",
    desc: "A multi-step form application with custom async validators, cross-field validation logic, and real-time error feedback using Angular Reactive Forms.",
    tags: ["Angular", "Reactive Forms", "Custom Validators", "SCSS"],
  },
  {
    title: "NgRx Dashboard",
    desc: "A data-rich admin dashboard with global state via NgRx, REST API integration, loading/error states, and dynamic data tables.",
    tags: ["Angular", "NgRx", "REST API", "Bootstrap"],
  },
  {
    title: "RxJS Stream Manager",
    desc: "A real-time interface using switchMap, combineLatest, debounceTime and forkJoin to manage concurrent API calls and live UI updates.",
    tags: ["Angular", "RxJS", "TypeScript", "SCSS"],
  },
];

type Props = { showHeader?: boolean; id?: string };

const Projects = ({ showHeader = true, id = "projects" }: Props) => {
  return (
    <section id={id} className="section-padding bg-background">
      <div className="container-narrow">
        {showHeader && (
          <div className="reveal mb-12">
            <div className="label-mint mb-3">Projects</div>
            <h2 className="text-3xl md:text-[36px] font-bold text-foreground">Selected work</h2>
          </div>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <article
              key={p.title}
              className="reveal group relative flex flex-col rounded-xl bg-card border border-subtle hover:border-mint transition-smooth overflow-hidden"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="h-[3px] w-full bg-mint" />
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-semibold text-foreground mb-3">{p.title}</h3>
                <p className="text-sm text-secondary-muted leading-relaxed mb-5 flex-grow">{p.desc}</p>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded text-[11px] font-medium text-mint border border-mint/30"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  <Button asChild variant="outlineMint" size="sm">
                    <a href="#">
                      View Project
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </Button>
                  <Button asChild variant="ghostMint" size="sm">
                    <a href="#" aria-label="GitHub">
                      <Github className="w-4 h-4" />
                      GitHub
                    </a>
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
