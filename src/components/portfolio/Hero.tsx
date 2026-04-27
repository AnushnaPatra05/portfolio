import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden"
    >
      {/* Decorative grid */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(0 0% 100% / 0.5) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 100% / 0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      {/* Glow */}
      <div className="absolute -top-32 -right-32 w-[520px] h-[520px] rounded-full bg-electric/20 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-[420px] h-[420px] rounded-full bg-electric-light/10 blur-3xl" />

      <div className="container-narrow relative z-10 py-32">
        <div className="max-w-3xl fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-electric-light animate-pulse" />
            <span className="text-sm text-white/80 font-medium">
              Available for opportunities
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.05] mb-6">
            Anushna Patra
          </h1>

          <p className="text-lg md:text-xl text-electric-light font-semibold mb-4">
            Programmer Analyst · Angular Frontend Developer
          </p>

          <p className="text-base md:text-lg text-white/70 max-w-2xl mb-10 leading-relaxed">
            Building scalable, reactive Angular applications at Cognizant Technology Solutions.
            Turning complex requirements into clean, maintainable interfaces.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button asChild variant="accent" size="lg">
              <a href="#projects">
                View My Work
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
            <Button asChild variant="outlineLight" size="lg">
              <a href="#" download>
                <Download className="w-4 h-4" />
                Download CV
              </a>
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-6 max-w-lg">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white">3+</div>
              <div className="text-xs md:text-sm text-white/60 mt-1">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white">Angular</div>
              <div className="text-xs md:text-sm text-white/60 mt-1">Specialist</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white">Cognizant</div>
              <div className="text-xs md:text-sm text-white/60 mt-1">Technology Solutions</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
