import { Award } from "lucide-react";

const Certifications = () => {
  return (
    <section id="certifications" className="section-padding bg-background">
      <div className="container-narrow">
        <div className="reveal max-w-2xl mb-14">
          <span className="text-sm font-semibold text-electric uppercase tracking-widest">
            Certifications
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-navy mt-3 mb-4">
            Credentials & achievements
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            Professional certifications and ongoing learning milestones.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="reveal p-8 rounded-xl border-2 border-dashed border-border bg-secondary/30 flex flex-col items-center text-center min-h-[220px] justify-center hover:border-electric hover:bg-electric/5 transition-smooth"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="w-14 h-14 rounded-full bg-electric/10 text-electric grid place-items-center mb-4">
                <Award className="w-7 h-7" />
              </div>
              <h3 className="font-semibold text-navy mb-1">Certifications coming soon</h3>
              <p className="text-sm text-muted-foreground">
                Check back later for upcoming credentials.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
