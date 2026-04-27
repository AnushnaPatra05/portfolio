const groups = [
  {
    title: "Angular Core",
    items: [
      "Reactive Forms", "Custom Validators", "Module-based Routing", "BehaviorSubject",
      "Data Binding", "Dependency Injection", "Decorators", "Lifecycle Hooks",
      "Change Detection Strategy", "OnPush",
    ],
  },
  {
    title: "RxJS",
    items: ["valueChanges", "combineLatest", "subscribe", "takeUntil", "debounceTime", "forkJoin", "switchMap", "distinctUntilChanged"],
  },
  {
    title: "State Management",
    items: ["NgRx Store", "Actions", "Reducers", "Effects", "Selectors"],
  },
  {
    title: "Markup & Styling",
    items: ["HTML5", "SCSS", "Bootstrap 5"],
  },
  {
    title: "APIs & Data",
    items: ["RESTful APIs", "JSON", "HTTP Client"],
  },
];

const Skills = ({ id = "skills" }: { id?: string }) => {
  return (
    <section id={id} className="section-padding bg-background">
      <div className="container-narrow">
        <div className="reveal mb-12">
          <div className="label-mint mb-3">Skills</div>
          <h2 className="text-3xl md:text-[36px] font-bold text-foreground">What I work with</h2>
        </div>

        <div className="space-y-10">
          {groups.map((g) => (
            <div key={g.title} className="reveal">
              <div className="label-mint mb-4">{g.title}</div>
              <div className="flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center text-foreground"
                    style={{
                      backgroundColor: "#2A2A2D",
                      border: "0.5px solid rgba(255,255,255,0.1)",
                      fontSize: "13px",
                      borderRadius: "999px",
                      padding: "4px 14px",
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
