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

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          style={{ gap: "20px" }}
        >
          {groups.map((g) => (
            <div
              key={g.title}
              className="reveal"
              style={{
                backgroundColor: "#2A2A2D",
                border: "0.5px solid rgba(255,255,255,0.08)",
                borderRadius: "12px",
                padding: "20px 24px",
              }}
            >
              <div
                className="text-mint uppercase mb-3"
                style={{
                  fontSize: "12px",
                  fontWeight: 500,
                  letterSpacing: "0.1em",
                }}
              >
                {g.title}
              </div>
              <p
                className="text-foreground"
                style={{ fontSize: "14px", lineHeight: 1.8 }}
              >
                {g.items}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
