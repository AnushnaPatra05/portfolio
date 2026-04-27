const groups = [
  {
    title: "Core Angular",
    items: "Reactive Forms, Custom Validators, Module-based Routing, BehaviorSubject, Data Binding, Dependency Injection, Decorators, Lifecycle Hooks, Change Detection Strategy",
  },
  {
    title: "RxJS",
    items: "valueChanges, combineLatest, subscribe, takeUntil, debounceTime, forkJoin, switchMap, distinctUntilChanged",
  },
  {
    title: "State Management",
    items: "NgRx (Store, Actions, Reducers, Effects, Selectors)",
  },
  {
    title: "Markup & Styling",
    items: "HTML5, SCSS, Bootstrap 5",
  },
  {
    title: "APIs & Data",
    items: "RESTful APIs, JSON",
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

        <ul className="reveal space-y-3 list-none">
          {groups.map((g) => (
            <li
              key={g.title}
              className="flex gap-3"
              style={{ fontSize: "15px", lineHeight: 1.9 }}
            >
              <span className="text-mint shrink-0" aria-hidden="true">•</span>
              <span className="text-foreground">
                <span className="text-mint" style={{ fontWeight: 500 }}>
                  {g.title}:
                </span>{" "}
                {g.items}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
