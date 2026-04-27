import { Code2, Layers, Zap } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Angular Expertise",
    desc: "Deep command of Angular architecture, reactive forms, and modular design.",
  },
  {
    icon: Layers,
    title: "Scalable UI",
    desc: "Passionate about building reactive interfaces that scale with product needs.",
  },
  {
    icon: Zap,
    title: "Performance Focused",
    desc: "Writing optimized, maintainable code using RxJS and modern state patterns.",
  },
];

const About = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-narrow">
        <div className="reveal max-w-3xl mb-14">
          <span className="text-sm font-semibold text-electric uppercase tracking-widest">
            About
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-navy mt-3 mb-6">
            Frontend engineer focused on reactive Angular systems.
          </h2>
          <div className="space-y-4 text-muted-foreground text-base md:text-lg leading-relaxed">
            <p>
              I'm Anushna Patra, a Programmer Analyst at Cognizant Technology Solutions with
              3 years of hands-on experience building enterprise-grade Angular applications.
            </p>
            <p>
              My work centers on crafting scalable, reactive user interfaces — from complex
              multi-step forms to data-heavy dashboards — using Angular, RxJS, and NgRx.
              I care deeply about clean architecture, code quality, and the small details
              that make UIs feel effortless.
            </p>
            <p>
              I thrive in structured engineering environments where I can collaborate with
              cross-functional teams, translate business logic into clear component design,
              and continuously raise the bar for frontend excellence.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map((h, i) => (
            <div
              key={h.title}
              className="reveal p-7 rounded-xl bg-card border border-border shadow-soft hover:shadow-card hover:-translate-y-1 transition-smooth"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="w-12 h-12 rounded-lg bg-electric/10 text-electric grid place-items-center mb-4">
                <h.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-navy mb-2">{h.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{h.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
