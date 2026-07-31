import { useEffect, useRef, useState } from "react";

const entries = [
  {
    role: "Software Engineer Intern",
    company: "Cognizant Technology Solutions",
    period: "Jan 2023 – May 2023",
    bullets: [
      "Built a full-stack MEAN Stack e-commerce SPA featuring JWT-based authentication, REST API-driven product listings via Angular HttpClient, and a dynamic shopping cart — independently delivered within a 5-month internship",
      "Implemented mobile-first responsive design and cross-browser compatibility using Angular and Bootstrap throughout the application",
    ],
  },
  {
    role: "Programmer Analyst Trainee",
    company: "Cognizant Technology Solutions",
    period: "Sep 2023 – Sep 2024",
    bullets: [
      "Delivered an enterprise Angular SPA (WCT — Workforce Compliance Tracking) enabling admins to track compliance charter status across a large employee base, with CSV export functionality",
      "Translated Figma designs into pixel-perfect, mobile-first, cross-browser UI components using Angular Material and SCSS",
      "Replaced sequential API calls with RxJS combineLatest to parallelise data fetching, significantly reducing perceived load time in data-heavy screens",
      "Implemented BehaviorSubject-based state sharing across components to manage admin view state without a full state management library",
      "Collaborated with backend and QA teams across 8 Agile/Scrum sprints — sprint planning, code reviews, and UAT sign-off",
    ],
  },
  {
    role: "Programmer Analyst",
    company: "Cognizant Technology Solutions",
    period: "Sep 2024 – May 2026",
    bullets: [
      "Developed the frontend of SASsy, an enterprise Angular SPA connecting prevention experts with clients for occupational safety advisory services across multiple user roles",
      "Architected a shared component library using Dependency Injection across 6+ nested feature modules, standardising UI patterns and eliminating duplicate implementations",
      "Integrated OpenID Connect authentication with Angular Guards and HTTP Interceptors, enforcing role-based route protection and centralising request handling",
      "Implemented multi-level reactive forms using FormArray-driven workflows and shared form services for complex advisory session management",
      "Applied RxJS operators with HttpClient for async data flows; configured route-based lazy loading and service workers for offline caching",
      "Conducted code reviews across 3 sprint cycles, enforcing Angular style guide compliance, clean code standards, and unit testing practices",
    ],
  },
  {
    current: true,
    role: "Associate",
    company: "Cognizant Technology Solutions",
    period: "Jun 2026 – Present",
    bullets: [
      "Extended offline capability on SASsy by implementing Angular Service Workers with a custom caching strategy and IndexedDB for persistent client-side data storage in low-connectivity environments",
      "Adopted Angular Signals for fine-grained reactive state management, modernising legacy BehaviorSubject patterns and improving change detection performance",
      "Integrated Web Workers to offload computation-heavy operations off the main thread, keeping the UI responsive during data-intensive processing",
      "Designed and architected the offline data model — entity schemas, sync strategies, and conflict resolution patterns for IndexedDB — to ensure data integrity across online and offline states",
    ],
  },
];

const Experience = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setActive(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section id="experience" className="section-padding bg-background">
      <div className="container-narrow">
        <div className="reveal mb-12">
          <div className="label-mint mb-3">Experience</div>
          <h2 className="text-3xl md:text-[36px] font-bold gradient-text">My Journey</h2>
        </div>

        <div ref={sectionRef} className={`relative max-w-3xl ${active ? "timeline-active" : ""}`}>
          <div className="timeline-line absolute left-[7px] top-2 bottom-2 w-0.5 bg-mint" />

          <div className="space-y-10">
            {entries.map((e, i) => (
              <div key={i} className="timeline-entry relative pl-10">
                <span className="timeline-dot absolute left-0 top-1.5 w-4 h-4 rounded-full bg-mint ring-4 ring-background" />

                <div className="p-6 glass-panel hover:border-mint/50">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    {e.current && (
                      <span className="px-2.5 py-0.5 rounded bg-mint text-primary-foreground text-xs font-semibold">
                        Current
                      </span>
                    )}
                    <span className="text-sm text-secondary-muted">{e.period}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{e.role}</h3>
                  <p className="text-mint text-sm mb-4">{e.company}</p>
                  <ul className="space-y-2 text-sm text-secondary-muted">
                    {e.bullets.map((b, j) => (
                      <li key={j} className="flex gap-3">
                        <span className="mt-2 w-1 h-1 rounded-full bg-mint flex-shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
