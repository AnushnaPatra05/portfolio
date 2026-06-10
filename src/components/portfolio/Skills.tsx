tsx
const techStack = [
  { name: "Angular", icon: "/tech/angular.svg" },
  { name: "TypeScript", icon: "/tech/typescript.svg" },
  { name: "JavaScript", icon: "/tech/javascript.svg" },
  { name: "HTML5", icon: "/tech/html5.svg" },
  { name: "CSS3", icon: "/tech/css3.svg" },
  { name: "SCSS", icon: "/tech/scss.svg" },
  { name: "RxJS", icon: "/tech/rxjs.svg" },
  { name: "Angular Material", icon: "/tech/angular-material.svg" },
  { name: "Bootstrap", icon: "/tech/bootstrap.svg" },
  { name: "Node.js", icon: "/tech/nodejs.svg" },
  { name: "Express.js", icon: "/tech/express.svg" },
  { name: "MongoDB", icon: "/tech/mongodb.svg" },
  { name: "Git", icon: "/tech/git.svg" },
  { name: "GitHub", icon: "/tech/github.svg" },
];

const Skills = ({ id = "skills" }: { id?: string }) => {
  return (
    <section id={id} className="section-padding bg-background">
      <div className="container-narrow">
        <div className="reveal mb-12">
          <div className="label-mint mb-3">Tech Stack</div>
          <h2 className="text-3xl md:text-[36px] font-bold gradient-text">
            Technologies I Work With
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="glass-panel p-6">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              {techStack.map((tech) => (
                <div
                  key={tech.name}
                  className="flex flex-col items-center gap-2 transition-transform duration-300 hover:scale-110"
                >
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    title={tech.name}
                    className="w-14 h-14 object-contain"
                  />
                  <span className="text-sm text-muted-foreground">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal flex justify-center">
            <img
              src="/cognizant-tag.png"
              alt="Cognizant"
              className="w-full max-w-md object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;