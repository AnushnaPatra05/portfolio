import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "@/components/ui/tooltip";
import { ArrowUpRight, Github } from "lucide-react";

type Project = {
  title: string;
  desc: string;
  tags: string[];
  live?: string;
  github?: string;
  privateNote?: string;
};

export const projects: Project[] = [
  {
    title: "VoxNote AI — Voice-to-Notes Assistant",
    desc: "A personal project that turns spoken thoughts into structured, searchable notes. Speech is captured in the browser, transcribed, and then summarised into clean bullet points, action items, and tags by an AI model. Built with a focus on a fast, distraction-free interface, offline-friendly drafts, and instant search across everything you have ever dictated.",
    tags: ["React", "TypeScript", "Web Speech API", "AI", "Tailwind CSS"],
    live: "https://voxnote-ai.lovable.app",
    github: "https://github.com/anushnapatra/voxnote-ai",
  },
  {
    title: "WCT — Workforce Compliance Tracker",
    desc: "An enterprise-grade Angular application built for workforce compliance management at scale. The system fetches employee records from a relational database and applies intelligent filtering logic based on each user's last sign-in date to identify compliance gaps. Once the filtered dataset is prepared, the application triggers personalised automated emails to each user individually — each containing a secure login link to the application. Emails are dispatched in the user's preferred language, ensuring accessibility across a multilingual workforce. Every email event is subsequently logged to a dedicated audit table for full traceability and compliance reporting.",
    tags: ["Angular", "Java", "AWS", "REST API", "SQL", "Multilingual", "Email Automation"],
    privateNote: "Private — Cognizant project",
  },
  {
    title: "SASSY — Safety Advisory Services System",
    desc: "A sophisticated Angular-based pre-sales platform designed to streamline the safety advisory workflow between prevention experts, brokers, and underwriters. SASSY sits at the heart of the customer and broker pre-sales journey, enabling prevention specialists to deliver structured safety recommendations that directly inform underwriting decisions. The system captures expert safety input, digitises the advisory process, and ensures that risk assessments are consistently communicated to support customer safety outcomes and policy accuracy.",
    tags: ["Angular", "TypeScript", "REST API", "SCSS", "Enterprise UI"],
    privateNote: "Private — Cognizant project",
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
            <h2 className="text-3xl md:text-[36px] font-bold gradient-text">Selected work</h2>
          </div>
        )}

        <TooltipProvider delayDuration={150}>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((p, i) => (
              <article
                key={p.title}
                className="reveal group relative flex flex-col overflow-hidden glass-card glass-card-hover"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="h-[3px] w-full bg-mint" />
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-lg font-semibold text-foreground mb-3">{p.title}</h3>
                  <p className="text-sm text-secondary-muted leading-relaxed mb-5 flex-grow">
                    {p.desc}
                  </p>

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
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <span tabIndex={0} className="inline-flex">
                          <Button
                            size="sm"
                            disabled
                            aria-disabled="true"
                            className="glass-btn-secondary opacity-50 cursor-not-allowed pointer-events-none"
                          >
                            View Project
                            <ArrowUpRight className="w-4 h-4" />
                          </Button>
                        </span>
                      </TooltipTrigger>
                      <TooltipContent>Private — Cognizant project</TooltipContent>
                    </Tooltip>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </TooltipProvider>
      </div>
    </section>
  );
};

export default Projects;
