import { useEffect, useState } from "react";
import { ChevronDown, ChevronLeft, ChevronRight, ImageIcon } from "lucide-react";
import { CV_DOWNLOAD_URL } from "@/config/cv";

const roles = ["UI Developer", "Frontend Engineer", "Angular Specialist", "Problem Solver"];

const techLogos = [
  { src: "/logos/angular.png", label: "Angular" },
  { src: "/logos/rxjs.png", label: "RxJS" },
  { src: "/logos/typescript.png", label: "TypeScript" },
  { src: "/logos/javascript.png", label: "JavaScript" },
  { src: "/logos/html5.png", label: "HTML5" },
  { src: "/logos/css3.png", label: "CSS3" },
  { src: "/logos/nodejs.png", label: "Node.js" },
  { src: "/logos/restapi.png", label: "REST API" },
  { src: "/logos/json.png", label: "JSON" },
  { src: "/logos/mongodb.png", label: "MongoDB" },
  { src: "/logos/karma-jasmine.png", label: "Karma · Jasmine" },
];

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActiveIndex((i) => (i + 1) % 4), 2500);
    return () => clearInterval(t);
  }, []);

  const goPrev = () => setActiveIndex((i) => (i - 1 + 4) % 4);
  const goNext = () => setActiveIndex((i) => (i + 1) % 4);

  const scrollToProjects = () => {
    const el = document.querySelector("#projects");
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="hero-section relative min-h-screen flex flex-col bg-background overflow-hidden"
    >
      {/* Aurora */}
      <div className="aurora-bg">
        <div className="aurora-band a1" />
        <div className="aurora-band a2" />
        <div className="aurora-band a3" />
        <div className="aurora-band a4" />
      </div>

      {/* TOP ROW */}
      <div
        className="hero-top relative z-[2] flex flex-col items-center justify-center text-center"
        style={{ padding: "60px 80px 32px", gap: 16 }}
      >
        <div
          style={{
            fontSize: 11,
            fontWeight: 500,
            letterSpacing: "0.14em",
            color: "#3ECFA4",
            textTransform: "uppercase",
            marginBottom: 4,
          }}
        >
          Frontend Developer · Cognizant
        </div>

        <h1
          className="hero-name gradient-text"
          style={{ fontSize: 64, fontWeight: 800, lineHeight: 1.05, margin: 0 }}
        >
          Anushna Patra
        </h1>

        <div
          className="hero-role"
          style={{ height: 44, overflow: "hidden", position: "relative", margin: "4px auto", width: "100%", maxWidth: 480 }}
        >
          {roles.map((r, i) => {
            const isActive = i === activeIndex;
            return (
              <span
                key={r}
                style={{
                  position: "absolute",
                  width: "100%",
                  textAlign: "center",
                  fontSize: 24,
                  fontWeight: 400,
                  color: "#3ECFA4",
                  opacity: isActive ? 1 : 0,
                  transform: isActive ? "translateY(0)" : "translateY(-100%)",
                  transition: "opacity 280ms ease, transform 280ms ease",
                }}
              >
                {r}
              </span>
            );
          })}
        </div>

        <div className="flex flex-row justify-center" style={{ gap: 14, marginTop: 8 }}>
          <button
            onClick={scrollToProjects}
            style={{
              background: "transparent",
              border: "1.5px solid #3ECFA4",
              color: "#3ECFA4",
              borderRadius: 999,
              padding: "11px 28px",
              fontSize: 14,
              fontWeight: 500,
              cursor: "pointer",
              transition: "all 200ms ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(62,207,164,0.10)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
          >
            View My Work →
          </button>
          <a
            href={CV_DOWNLOAD_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.18)",
              color: "#ffffff",
              borderRadius: 999,
              padding: "11px 28px",
              fontSize: 14,
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              transition: "all 200ms ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.14)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.08)")}
          >
            Download CV ↓
          </a>
        </div>

        {/* Slide indicator dots */}
        <div className="flex justify-center" style={{ gap: 8, marginTop: 16 }}>
          {[0, 1, 2, 3].map((i) => {
            const isActive = i === activeIndex;
            return (
              <button
                key={i}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => setActiveIndex(i)}
                style={{
                  width: isActive ? 28 : 6,
                  height: 6,
                  borderRadius: isActive ? 3 : "50%",
                  background: isActive
                    ? "linear-gradient(90deg, #3ECFA4, #a855f7)"
                    : "rgba(255,255,255,0.25)",
                  border: "none",
                  cursor: "pointer",
                  padding: 0,
                  transition: "all 300ms ease",
                }}
              />
            );
          })}
        </div>
      </div>

      {/* BOTTOM ROW — Carousel */}
      <div
        className="hero-carousel relative z-[2]"
        style={{ flex: 1, position: "relative", overflow: "hidden", minHeight: 420 }}
      >
        <button
          onClick={goPrev}
          aria-label="Previous slide"
          className="hero-arrow"
          style={{
            position: "absolute",
            left: 20,
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 10,
            width: 40,
            height: 40,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.08)",
            border: "0.5px solid rgba(255,255,255,0.15)",
            color: "#fff",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={goNext}
          aria-label="Next slide"
          className="hero-arrow"
          style={{
            position: "absolute",
            right: 20,
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 10,
            width: 40,
            height: 40,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.08)",
            border: "0.5px solid rgba(255,255,255,0.15)",
            color: "#fff",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* SLIDE 1 — Cognizant */}
        <Slide active={activeIndex === 0}>
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage: "url(/slides/office.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to right, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.40) 100%)",
            }}
          />
          <div
            className="slide-cog-content"
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "0 80px",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: 12, maxWidth: 520 }}>
              <img
                src="/slides/cognizant-logo.png"
                alt="Cognizant"
                style={{ height: 38, width: "auto", objectFit: "contain", marginBottom: 4 }}
              />
              <div style={{ color: "#fff", fontSize: 36, fontWeight: 700, lineHeight: 1.1 }}>Where I Grow</div>
              <div style={{ color: "#3ECFA4", fontSize: 16 }}>Programmer Analyst · 3 Years</div>
              <div style={{ color: "rgba(255,255,255,0.6)", fontSize: 13 }}>
                Candor TechSpace · New Town, Kolkata
              </div>
            </div>
            <div
              aria-hidden
              style={{
                fontSize: 280,
                color: "rgba(255,255,255,0.04)",
                fontWeight: 900,
                lineHeight: 1,
                position: "relative",
              }}
              className="slide-cog-bigC"
            >
              C
            </div>
          </div>
        </Slide>

        {/* SLIDE 2 — Tech Stack */}
        <Slide active={activeIndex === 1}>
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(135deg, #0d0d1a 0%, #1a1a2e 50%, #1C1C1E 100%)",
            }}
          />
          <div
            className="slide-tech-content"
            style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
              padding: "40px 80px",
              gap: 32,
            }}
          >
            <h3 style={{ color: "#fff", fontSize: 22, fontWeight: 700, textAlign: "center", margin: 0 }}>
              My Tech Stack
            </h3>
            <div className="tech-grid" style={{ width: "100%", maxWidth: 800 }}>
              {techLogos.map((t) => (
                <div
                  key={t.label}
                  style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}
                >
                  <img
                    src={t.src}
                    alt={t.label}
                    style={{
                      width: 56,
                      height: 56,
                      objectFit: "contain",
                      filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.4))",
                    }}
                  />
                  <span style={{ fontSize: 11, color: "rgba(255,255,255,0.65)", textAlign: "center" }}>
                    {t.label}
                  </span>
                </div>
              ))}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span
                  style={{
                    color: "#3ECFA4",
                    fontSize: 12,
                    background: "rgba(62,207,164,0.08)",
                    border: "0.5px solid rgba(62,207,164,0.2)",
                    borderRadius: 999,
                    padding: "6px 16px",
                  }}
                >
                  NgRx | Bootstrap | Git | CI/CD
                </span>
              </div>
            </div>
          </div>
        </Slide>

        {/* SLIDE 3 — Experience */}
        <Slide active={activeIndex === 2}>
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(135deg, #0a1628 0%, #0d1f3c 50%, #1C1C1E 100%)",
            }}
          />
          <div
            className="slide-exp-content"
            style={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              height: "100%",
              padding: "0 80px",
              gap: 48,
            }}
          >
            <div style={{ flex: 1 }}>
              <div className="gradient-text" style={{ fontSize: 96, fontWeight: 800, lineHeight: 1 }}>
                3+
              </div>
              <div style={{ color: "#fff", fontSize: 22, fontWeight: 600, marginTop: 8 }}>
                Years Frontend Development
              </div>
              <div style={{ color: "#A0A0A0", fontSize: 14, marginBottom: 24 }}>
                at Cognizant Technology Solutions
              </div>

              <div
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "0.5px solid rgba(255,255,255,0.08)",
                  borderRadius: 12,
                  padding: "14px 18px",
                  marginBottom: 10,
                  maxWidth: 460,
                }}
              >
                <div style={{ color: "#3ECFA4", fontSize: 10, textTransform: "uppercase", letterSpacing: "0.1em" }}>
                  WCT
                </div>
                <div style={{ color: "#fff", fontSize: 14, fontWeight: 700, marginTop: 2 }}>
                  Workforce Compliance Tracker
                </div>
                <div style={{ color: "#A0A0A0", fontSize: 12 }}>Angular · Java · AWS</div>
              </div>

              <div
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "0.5px solid rgba(255,255,255,0.08)",
                  borderRadius: 12,
                  padding: "14px 18px",
                  maxWidth: 460,
                }}
              >
                <div style={{ color: "#3ECFA4", fontSize: 10, textTransform: "uppercase", letterSpacing: "0.1em" }}>
                  SASSY
                </div>
                <div style={{ color: "#fff", fontSize: 14, fontWeight: 700, marginTop: 2 }}>
                  Safety Advisory Services
                </div>
                <div style={{ color: "#A0A0A0", fontSize: 12 }}>Angular · TypeScript</div>
              </div>
            </div>

            <div
              className="slide-exp-image"
              style={{
                flex: "0 0 280px",
                width: 280,
                height: 200,
                borderRadius: 16,
                background: "rgba(255,255,255,0.04)",
                border: "0.5px solid rgba(255,255,255,0.08)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
              }}
            >
              {/* <img src="/slides/project-screenshot.jpg" alt="Project" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 16 }} /> */}
              <ImageIcon className="w-6 h-6" style={{ color: "#A0A0A0" }} />
              <span style={{ color: "#A0A0A0", fontSize: 12 }}>Add project screenshot</span>
            </div>
          </div>
        </Slide>

        {/* SLIDE 4 — Profile */}
        <Slide active={activeIndex === 3}>
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(135deg, #1a0a2e 0%, #0d0d1a 50%, #1C1C1E 100%)",
            }}
          />
          <div
            className="slide-profile-content"
            style={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 60,
              height: "100%",
              padding: "0 80px",
            }}
          >
            <div
              className="profile-photo-wrap"
              style={{
                width: 260,
                height: 260,
                borderRadius: "50%",
                overflow: "hidden",
                border: "2px solid rgba(62,207,164,0.45)",
                boxShadow:
                  "0 0 60px rgba(62,207,164,0.25), 0 0 120px rgba(168,85,247,0.15)",
                flex: "0 0 auto",
              }}
            >
              <img
                src="/profile.jpg"
                alt="Anushna Patra"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center top",
                  transform: "scale(1.4)",
                }}
              />
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 4, maxWidth: 380 }}>
              <div className="gradient-text" style={{ fontSize: 32, fontWeight: 800 }}>
                Anushna Patra
              </div>
              <div style={{ color: "#3ECFA4", fontSize: 16 }}>Programmer Analyst</div>
              <div style={{ color: "#A0A0A0", fontSize: 13, marginBottom: 20 }}>
                Cognizant Technology Solutions
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {["3+ Years", "Angular Expert", "B.Tech 2023", "Kolkata, India"].map((s) => (
                  <span
                    key={s}
                    style={{
                      background: "rgba(62,207,164,0.08)",
                      border: "0.5px solid rgba(62,207,164,0.20)",
                      color: "#3ECFA4",
                      borderRadius: 999,
                      fontSize: 12,
                      padding: "5px 14px",
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>
              <p
                style={{
                  color: "#A0A0A0",
                  fontSize: 14,
                  lineHeight: 1.7,
                  maxWidth: 320,
                  marginTop: 12,
                }}
              >
                Building scalable, reactive Angular applications at Cognizant — passionate about clean code and smooth user experiences.
              </p>
            </div>
          </div>
        </Slide>
      </div>

      {/* Scroll chevron */}
      <a
        href="#skills"
        aria-label="Scroll down"
        className="text-mint animate-bounce-down"
        style={{
          position: "absolute",
          bottom: 20,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 3,
          pointerEvents: "none",
        }}
      >
        <ChevronDown className="w-6 h-6" />
      </a>
    </section>
  );
};

const Slide = ({ active, children }: { active: boolean; children: React.ReactNode }) => (
  <div
    style={{
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      opacity: active ? 1 : 0,
      transition: "opacity 500ms ease",
      pointerEvents: active ? "auto" : "none",
    }}
  >
    {children}
  </div>
);

export default Hero;
