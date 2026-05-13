import { useEffect, useState } from "react";
import { ChevronDown, ImageIcon } from "lucide-react";
import { CV_DOWNLOAD_URL } from "@/config/cv";

const roles = ["UI Developer", "Frontend Engineer", "Angular Specialist", "Problem Solver"];
const taglines = [
  "Programmer Analyst at Cognizant Technology Solutions",
  "Full-stack Angular expertise across modern web technologies",
  "3+ years delivering enterprise-grade frontend solutions",
  "Passionate about clean UI, reactive architecture & scalable code",
];
const techPills = [
  "Angular", "RxJS", "TypeScript", "NgRx", "HTML5", "SCSS", "Bootstrap",
  "REST API", "JSON", "Git", "GitHub", "CI/CD", "Karma", "Jasmine",
  "Node.js", "Express", "MongoDB", "DSA",
];

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActiveIndex((i) => (i + 1) % 4), 2500);
    return () => clearInterval(t);
  }, []);

  const goTo = (i: number) => setActiveIndex(((i % 4) + 4) % 4);
  const next = () => goTo(activeIndex + 1);
  const prev = () => goTo(activeIndex - 1);

  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative flex items-center overflow-hidden bg-background"
      style={{ minHeight: "100vh" }}
    >
      {/* Aurora background */}
      <div className="aurora-bg">
        <div className="aurora-band a1" />
        <div className="aurora-band a2" />
        <div className="aurora-band a3" />
        <div className="aurora-band a4" />
      </div>

      <div className="hero-grid" style={{ position: "relative", zIndex: 2, width: "100%", minHeight: "100vh" }}>
        {/* LEFT */}
        <div className="hero-left-col">
          <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.12em", color: "#3ECFA4", textTransform: "uppercase" }}>
            Frontend Developer · Cognizant
          </div>

          <h1
            className="gradient-text"
            style={{ fontSize: "clamp(40px, 5vw, 56px)", fontWeight: 800, lineHeight: 1.1, margin: 0 }}
          >
            Anushna Patra
          </h1>

          <div style={{ height: 42, overflow: "hidden", position: "relative" }}>
            {roles.map((r, i) => {
              const isActive = i === activeIndex;
              const isPrev = (activeIndex - 1 + 4) % 4 === i;
              let transform = "translateY(100%)";
              let opacity = 0;
              if (isActive) { transform = "translateY(0)"; opacity = 1; }
              else if (isPrev) { transform = "translateY(-100%)"; opacity = 0; }
              return (
                <span
                  key={r}
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    fontSize: "clamp(20px, 2.2vw, 26px)",
                    fontWeight: 400,
                    color: "#3ECFA4",
                    transform,
                    opacity,
                    transition: isActive
                      ? "transform 300ms ease-out, opacity 300ms ease-out"
                      : "transform 300ms ease-in, opacity 300ms ease-in",
                  }}
                >
                  {r}
                </span>
              );
            })}
          </div>

          <div style={{ width: 48, height: 2, background: "linear-gradient(90deg, #3ECFA4, #a855f7)", borderRadius: 1 }} />

          <div style={{ position: "relative", minHeight: 48, maxWidth: 420 }}>
            {taglines.map((t, i) => (
              <p
                key={i}
                style={{
                  position: "absolute",
                  inset: 0,
                  margin: 0,
                  fontSize: 15,
                  color: "#A0A0A0",
                  lineHeight: 1.6,
                  opacity: i === activeIndex ? 1 : 0,
                  transition: "opacity 300ms ease",
                }}
              >
                {t}
              </p>
            ))}
          </div>

          <div style={{ display: "flex", flexDirection: "row", gap: 14, marginTop: 8, flexWrap: "wrap" }} className="hero-btn-row">
            <button
              onClick={scrollToProjects}
              style={{
                background: "rgba(62,207,164,0.12)",
                border: "0.5px solid rgba(62,207,164,0.35)",
                color: "#3ECFA4",
                borderRadius: 999,
                padding: "12px 28px",
                fontSize: 14,
                fontWeight: 500,
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
                cursor: "pointer",
                transition: "all 200ms ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(62,207,164,0.22)";
                e.currentTarget.style.borderColor = "rgba(62,207,164,0.55)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(62,207,164,0.12)";
                e.currentTarget.style.borderColor = "rgba(62,207,164,0.35)";
              }}
            >
              View My Work →
            </button>
            <a
              href={CV_DOWNLOAD_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "0.5px solid rgba(255,255,255,0.12)",
                color: "#ffffff",
                borderRadius: 999,
                padding: "12px 28px",
                fontSize: 14,
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                transition: "all 200ms ease",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.12)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.06)"; }}
            >
              Download CV ↓
            </a>
          </div>

          <div style={{ display: "flex", gap: 8, marginTop: 16 }}>
            {[0, 1, 2, 3].map((i) => {
              const active = i === activeIndex;
              return (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  style={{
                    width: active ? 24 : 6,
                    height: 6,
                    borderRadius: active ? 3 : "50%",
                    background: active ? "#3ECFA4" : "rgba(255,255,255,0.25)",
                    border: "none",
                    padding: 0,
                    cursor: "pointer",
                    transition: "all 300ms ease",
                  }}
                />
              );
            })}
          </div>
        </div>

        {/* RIGHT */}
        <div className="hero-right-col">
          {/* SLIDE 1 — Cognizant */}
          <div className="hero-slide" style={{ opacity: activeIndex === 0 ? 1 : 0 }}>
            {/* Replace background with: style={{backgroundImage: 'url(/slides/cognizant.jpg)', backgroundSize: 'cover', backgroundPosition: 'center'}} */}
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, #003d2e 0%, #1C1C1E 100%)" }} />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(0,80,60,0.7) 0%, rgba(28,28,30,0.85) 100%)" }} />
            <div style={{ position: "absolute", top: -60, right: -20, fontSize: 300, color: "rgba(255,255,255,0.03)", fontWeight: 900, pointerEvents: "none", lineHeight: 1 }}>
              C
            </div>
            <div style={{ position: "absolute", bottom: 60, left: 40, right: 40, zIndex: 2 }}>
              <div style={{ color: "#fff", fontSize: 13, letterSpacing: "0.15em", opacity: 0.7 }}>COGNIZANT</div>
              <h3 style={{ color: "#fff", fontSize: 28, fontWeight: 700, margin: "8px 0" }}>Where I Build</h3>
              <div style={{ color: "#3ECFA4", fontSize: 14 }}>Programmer Analyst · 3 Years</div>
            </div>
          </div>

          {/* SLIDE 2 — Tech Stack */}
          <div className="hero-slide" style={{ opacity: activeIndex === 1 ? 1 : 0, background: "linear-gradient(135deg, #0d0d1a 0%, #1C1C1E 100%)" }}>
            <div style={{ height: "100%", display: "flex", flexDirection: "column", padding: "48px 40px 40px" }}>
              <h3 style={{ color: "#fff", fontSize: 20, fontWeight: 700, textAlign: "center", marginBottom: 24 }}>My Tech Stack</h3>
              <div style={{ flex: 1, display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center", alignContent: "center" }}>
                {techPills.map((p) => (
                  <span
                    key={p}
                    style={{
                      background: "rgba(255,255,255,0.06)",
                      border: "0.5px solid rgba(255,255,255,0.10)",
                      borderRadius: 999,
                      padding: "8px 16px",
                      color: "#fff",
                      fontSize: 13,
                      backdropFilter: "blur(8px)",
                      WebkitBackdropFilter: "blur(8px)",
                      transition: "all 200ms ease",
                      cursor: "default",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "rgba(62,207,164,0.40)";
                      e.currentTarget.style.color = "#3ECFA4";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "rgba(255,255,255,0.10)";
                      e.currentTarget.style.color = "#fff";
                    }}
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* SLIDE 3 — Experience */}
          <div className="hero-slide" style={{ opacity: activeIndex === 2 ? 1 : 0, background: "linear-gradient(135deg, #0a1628 0%, #1C1C1E 100%)" }}>
            <div style={{ height: "100%", padding: "48px 40px", display: "flex", flexDirection: "column", justifyContent: "center", gap: 24 }}>
              <div>
                <div className="gradient-text" style={{ fontSize: 64, fontWeight: 800, lineHeight: 1 }}>3+ Years</div>
                <div style={{ color: "#fff", fontSize: 20, fontWeight: 600, marginTop: 8 }}>Frontend Development</div>
                <div style={{ color: "#A0A0A0", fontSize: 14 }}>at Cognizant Technology Solutions</div>
              </div>
              {/* Add project screenshot: style={{backgroundImage: 'url(/slides/project-preview.jpg)'}} */}
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <div style={{ borderRadius: 12, padding: 16, background: "rgba(255,255,255,0.05)", border: "0.5px solid rgba(255,255,255,0.08)" }}>
                  <div style={{ color: "#3ECFA4", fontSize: 10, textTransform: "uppercase" }}>WCT</div>
                  <div style={{ color: "#fff", fontSize: 14, fontWeight: 700, marginTop: 4 }}>Workforce Compliance Tracker</div>
                  <div style={{ color: "#A0A0A0", fontSize: 12, marginTop: 2 }}>Angular · Java · AWS</div>
                </div>
                <div style={{ borderRadius: 12, padding: 16, background: "rgba(255,255,255,0.05)", border: "0.5px solid rgba(255,255,255,0.08)" }}>
                  <div style={{ color: "#3ECFA4", fontSize: 10, textTransform: "uppercase" }}>SASSY</div>
                  <div style={{ color: "#fff", fontSize: 14, fontWeight: 700, marginTop: 4 }}>Safety Advisory Services System</div>
                  <div style={{ color: "#A0A0A0", fontSize: 12, marginTop: 2 }}>Angular · TypeScript · REST API</div>
                </div>
              </div>
              <div style={{ color: "#A0A0A0", fontSize: 12, opacity: 0.6 }}>More projects below ↓</div>
            </div>
          </div>

          {/* SLIDE 4 — Profile */}
          <div className="hero-slide" style={{ opacity: activeIndex === 3 ? 1 : 0, background: "linear-gradient(135deg, #1a0a2e 0%, #1C1C1E 100%)" }}>
            <div style={{ height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 24, padding: 40 }}>
              {/* Replace with: <img src="/profile.jpg" /> */}
              <div
                style={{
                  width: 200,
                  height: 200,
                  borderRadius: "50%",
                  border: "2px solid rgba(62,207,164,0.45)",
                  background: "rgba(255,255,255,0.05)",
                  backdropFilter: "blur(10px)",
                  WebkitBackdropFilter: "blur(10px)",
                  boxShadow: "0 0 60px rgba(62,207,164,0.20), 0 0 100px rgba(168,85,247,0.12)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <ImageIcon style={{ width: 24, height: 24, color: "#A0A0A0" }} />
                <span style={{ color: "#A0A0A0", fontSize: 12, marginTop: 8 }}>Upload your photo</span>
              </div>
              <div style={{ textAlign: "center" }}>
                <div style={{ color: "#fff", fontSize: 22, fontWeight: 700 }}>Anushna Patra</div>
                <div style={{ color: "#3ECFA4", fontSize: 14, marginTop: 4 }}>Programmer Analyst</div>
                <div style={{ color: "#A0A0A0", fontSize: 12, marginTop: 2 }}>Cognizant Technology Solutions</div>
              </div>
            </div>
          </div>

          {/* Navigation arrows */}
          <button
            onClick={prev}
            aria-label="Previous slide"
            className="hero-arrow"
            style={{ left: 12 }}
          >
            ‹
          </button>
          <button
            onClick={next}
            aria-label="Next slide"
            className="hero-arrow"
            style={{ right: 12 }}
          >
            ›
          </button>
        </div>
      </div>

      <a
        href="#skills"
        aria-label="Scroll down"
        style={{
          position: "absolute",
          bottom: 24,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 3,
          color: "#3ECFA4",
        }}
        className="animate-bounce-down"
      >
        <ChevronDown className="w-6 h-6" />
      </a>
    </section>
  );
};

export default Hero;
