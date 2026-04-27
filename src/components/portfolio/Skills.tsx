const groups = [
  {
    title: "Core Angular",
    items: [
      "Reactive Forms",
      "Custom Validators",
      "Module-based Routing",
      "BehaviorSubject",
      "Data Binding",
      "Dependency Injection",
      "Decorators",
      "Lifecycle Hooks",
      "Change Detection Strategy",
    ],
  },
  {
    title: "RxJS",
    items: [
      "valueChanges",
      "combineLatest",
      "subscribe",
      "takeUntil",
      "debounceTime",
      "forkJoin",
      "switchMap",
      "distinctUntilChanged",
    ],
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
    items: ["RESTful APIs", "JSON"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-secondary/40">
      <div className="container-narrow">
        <div className="reveal max-w-2xl mb-14">
          <span className="text-sm font-semibold text-electric uppercase tracking-widest">
            Skills
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-navy mt-3 mb-4">
            Technical toolkit
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            A structured overview of the technologies and patterns I work with daily.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {groups.map((g, i) => (
            <div
              key={g.title}
              className={`reveal p-7 rounded-xl bg-card border border-border shadow-soft ${
                i === 0 ? "md:col-span-2" : ""
              }`}
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="w-1.5 h-6 rounded-full bg-gradient-accent" />
                <h3 className="text-lg font-semibold text-navy">{g.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 rounded-md bg-secondary text-secondary-foreground text-sm font-medium border border-border hover:border-electric hover:text-electric transition-smooth"
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
