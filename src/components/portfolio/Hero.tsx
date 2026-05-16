import { useEffect, useState } from "react";
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Camera,
} from "lucide-react";
import { CV_DOWNLOAD_URL } from "@/config/cv";

const roles = [
  "Frontend Engineer",
  "Programmer Analyst",
  "Angular Specialist",
];

const slideLabels = [
  "ABOUT ME",
  "COGNIZANT TECHNOLOGY SOLUTIONS",
  "MY TECH STACK",
];

type TechLogo = {
  src?: string;
  label: string;
};

const techLogos: TechLogo[] = [
  { src: "/angular.jpg", label: "Angular" },
  { src: "/rxjs.jpg", label: "RxJS" },
  { src: "/ts.jpg", label: "JavaScript & TypeScript" },
  { src: "/css.jpg", label: "SCSS & CSS3" },
  { src: "/html.jpg", label: "HTML5" },
  { src: "/nodejs.jpg", label: "Node.js" },
  { src: "/restapi.jpg", label: "REST API" },
  { src: "/json.jpg", label: "JSON" },
  { src: "/mongodb.jpg", label: "MongoDB" },
  { src: "/karma-jasmine.jpg", label: "Karma & Jasmine" },
  { src: "/ngrx-logo.jpg", label: "NgRx" },
  { src: "/bootstrap.jpg", label: "Bootstrap" },
  { src: "/github.png", label: "GitHub" },
  { src: "/ci-cd.png", label: "CI/CD" },
];

const SLIDE_COUNT = 3;

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % SLIDE_COUNT);
    }, 4500);

    return () => clearInterval(timer);
  }, []);

  const goPrev = () => {
    setActiveIndex((prev) => (prev - 1 + SLIDE_COUNT) % SLIDE_COUNT);
  };

  const goNext = () => {
    setActiveIndex((prev) => (prev + 1) % SLIDE_COUNT);
  };

  const scrollToProjects = () => {
    document
      .querySelector("#projects")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      style={{
        position: "relative",
        height: "100vh",
        width: "100%",
        overflow: "hidden",
        background: "#0B1020",
      }}
    >
      {/* LEFT ARROW */}
      <button
        onClick={goPrev}
        aria-label="Previous Slide"
        style={arrowStyle("left")}
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      {/* RIGHT ARROW */}
      <button
        onClick={goNext}
        aria-label="Next Slide"
        style={arrowStyle("right")}
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* ========================================================= */}
      {/* SLIDE 0 — ABOUT */}
      {/* ========================================================= */}

      <Slide active={activeIndex === 0}>
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(135deg, #0b1020 0%, #151932 50%, #1C1C1E 100%)",
          }}
        />

        <div
          className="profile-content"
          style={{
            position: "absolute",
            inset: 0,
            padding: "120px 80px 240px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 64,
            zIndex: 2,
          }}
        >
          {/* PROFILE IMAGE */}
          <div
            style={{
              width: 260,
              height: 260,
              borderRadius: "50%",
              overflow: "hidden",
              flexShrink: 0,
              border: "2px solid rgba(62,207,164,0.45)",
              background: "rgba(255,255,255,0.04)",
              boxShadow:
                "0 0 40px rgba(62,207,164,0.15), 0 0 80px rgba(168,85,247,0.15)",
            }}
          >
            <img
              src="/photoANUSHNA.jpg"
              alt="Anushna Patra"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center top",
                transform: "scale(1.08)",
              }}
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
          </div>

          {/* TEXT */}
          <div
            style={{
              maxWidth: 480,
              display: "flex",
              flexDirection: "column",
              gap: 18,
            }}
          >
            <div
              style={{
                color: "#3ECFA4",
                fontSize: 15,
                fontWeight: 600,
                letterSpacing: "0.12em",
              }}
            >
              PROGRAMMER ANALYST
            </div>

            <h2
              style={{
                color: "#ffffff",
                fontSize: 48,
                lineHeight: 1.1,
                margin: 0,
                fontWeight: 800,
              }}
            >
              Building modern,
              <br />
              scalable Angular apps.
            </h2>

            <p
              style={{
                color: "rgba(255,255,255,0.72)",
                lineHeight: 1.8,
                fontSize: 15,
                margin: 0,
              }}
            >
              Frontend Engineer with 3+ years of experience building
              enterprise-grade Angular applications at Cognizant.
              Passionate about performance, reactive architecture,
              clean UI systems, and scalable frontend engineering.
            </p>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 10,
                marginTop: 8,
              }}
            >
              {[
                "3+ Years Experience",
                "Angular Expert",
                "RxJS & NgRx",
                "Kolkata, India",
              ].map((item) => (
                <span
                  key={item}
                  style={{
                    padding: "8px 14px",
                    borderRadius: 999,
                    background: "rgba(62,207,164,0.08)",
                    border: "1px solid rgba(62,207,164,0.18)",
                    color: "#3ECFA4",
                    fontSize: 12,
                    fontWeight: 500,
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        <SlideOverlay
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          scrollToProjects={scrollToProjects}
        />
      </Slide>

      {/* ========================================================= */}
      {/* SLIDE 1 — COGNIZANT */}
      {/* ========================================================= */}

      <Slide active={activeIndex === 1}>
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "url(/ctsoffice.jpg)",
            backgroundSize: "110%",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            filter: "brightness(0.82)",
          }}
        />

        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.30) 45%, rgba(0,0,0,0.12) 100%)",
          }}
        />

        <div
          style={{
            position: "absolute",
            top: 42,
            right: 60,
            zIndex: 3,
          }}
        >
          <img
            src="/ctslogo.jpg"
            alt="Cognizant"
            style={{
              height: 34,
              objectFit: "contain",
              opacity: 0.92,
            }}
          />
        </div>

        <SlideOverlay
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          scrollToProjects={scrollToProjects}
        />
      </Slide>

      {/* ========================================================= */}
      {/* SLIDE 2 — TECH STACK */}
      {/* ========================================================= */}

      <Slide active={activeIndex === 2}>
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(135deg, #0b1020 0%, #141b34 50%, #1C1C1E 100%)",
          }}
        />

        <div
          style={{
            position: "absolute",
            inset: 0,
            padding: "120px 60px 240px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 2,
          }}
        >
          <h3
            style={{
              color: "#ffffff",
              fontSize: 30,
              fontWeight: 700,
              marginBottom: 50,
              letterSpacing: "0.04em",
            }}
          >
            My Tech Stack
          </h3>

          <div
            style={{
              width: "100%",
              maxWidth: 980,
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(120px, 1fr))",
              gap: "38px 28px",
              justifyItems: "center",
              alignItems: "start",
            }}
          >
            {techLogos.map((tech) => (
              <TechItem
                key={tech.label}
                src={tech.src}
                label={tech.label}
              />
            ))}
          </div>
        </div>

        <SlideOverlay
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          scrollToProjects={scrollToProjects}
        />
      </Slide>

      {/* DOWN ICON */}

      <a
        href="#skills"
        style={{
          position: "absolute",
          bottom: 20,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 20,
          color: "#3ECFA4",
          animation: "bounce 2s infinite",
        }}
      >
        <ChevronDown className="w-6 h-6" />
      </a>

      {/* RESPONSIVE CSS */}
      <style>
        {`
          @media (max-width: 900px) {
            .profile-content {
              flex-direction: column !important;
              text-align: center;
              padding: 100px 24px 240px !important;
              gap: 32px !important;
            }
          }

          @keyframes bounce {
            0%, 20%, 50%, 80%, 100% {
              transform: translate(-50%, 0);
            }

            40% {
              transform: translate(-50%, -10px);
            }

            60% {
              transform: translate(-50%, -5px);
            }
          }
        `}
      </style>
    </section>
  );
};

const TechItem = ({
  src,
  label,
}: {
  src?: string;
  label: string;
}) => {
  const [errored, setErrored] = useState(false);

  return (
    <div
      style={{
        width: 110,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 14,
      }}
    >
      <div
        style={{
          width: 76,
          height: 76,
          borderRadius: 20,
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,255,255,0.08)",
          backdropFilter: "blur(10px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 6px 24px rgba(0,0,0,0.25)",
          transition: "all 0.25s ease",
        }}
      >
        {!errored && src ? (
          <img
            src={src}
            alt={label}
            onError={() => setErrored(true)}
            style={{
              width: 44,
              height: 44,
              objectFit: "contain",
            }}
          />
        ) : (
          <Camera className="w-5 h-5 text-[#3ECFA4]" />
        )}
      </div>

      <span
        style={{
          color: "rgba(255,255,255,0.75)",
          fontSize: 12,
          fontWeight: 500,
          textAlign: "center",
          lineHeight: 1.5,
        }}
      >
        {label}
      </span>
    </div>
  );
};

const SlideOverlay = ({
  activeIndex,
  setActiveIndex,
  scrollToProjects,
}: {
  activeIndex: number;
  setActiveIndex: (i: number) => void;
  scrollToProjects: () => void;
}) => {
  return (
    <div
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 10,
        padding: "40px 0 60px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 14,
        background:
          "linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.55) 60%, transparent 100%)",
      }}
    >
      <div
        style={{
          color: "#3ECFA4",
          fontSize: 11,
          letterSpacing: "0.16em",
          fontWeight: 600,
        }}
      >
        {slideLabels[activeIndex]}
      </div>

      <h1
        style={{
          margin: 0,
          fontSize: 58,
          fontWeight: 800,
          lineHeight: 1,
          textAlign: "center",
          background: "linear-gradient(90deg, #3ECFA4, #a855f7)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Anushna Patra
      </h1>

      <div
        style={{
          position: "relative",
          height: 36,
          width: "100%",
          overflow: "hidden",
        }}
      >
        {roles.map((role, index) => {
          const active = index === activeIndex;

          return (
            <span
              key={role}
              style={{
                position: "absolute",
                inset: 0,
                textAlign: "center",
                fontSize: 22,
                color: "#3ECFA4",
                opacity: active ? 1 : 0,
                transform: active
                  ? "translateY(0)"
                  : index < activeIndex
                  ? "translateY(-100%)"
                  : "translateY(100%)",
                transition: "all 300ms ease",
              }}
            >
              {role}
            </span>
          );
        })}
      </div>

      <div
        style={{
          width: 52,
          height: 3,
          borderRadius: 999,
          background:
            "linear-gradient(90deg, #3ECFA4 0%, #a855f7 100%)",
        }}
      />

      {/* BUTTONS */}

      <div
        style={{
          display: "flex",
          gap: 14,
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <button
          onClick={scrollToProjects}
          style={{
            border: "1.5px solid #3ECFA4",
            background: "transparent",
            color: "#3ECFA4",
            borderRadius: 999,
            padding: "12px 30px",
            fontSize: 14,
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          View My Work →
        </button>

        <a
          href={CV_DOWNLOAD_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            border: "1px solid rgba(255,255,255,0.16)",
            background: "rgba(255,255,255,0.08)",
            color: "#ffffff",
            borderRadius: 999,
            padding: "12px 30px",
            fontSize: 14,
            textDecoration: "none",
            fontWeight: 500,
          }}
        >
          Download CV ↓
        </a>
      </div>

      {/* INDICATORS */}

      <div
        style={{
          display: "flex",
          gap: 8,
          marginTop: 6,
        }}
      >
        {[0, 1, 2].map((index) => {
          const active = index === activeIndex;

          return (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              style={{
                width: active ? 28 : 8,
                height: 8,
                borderRadius: 999,
                border: "none",
                background: active
                  ? "linear-gradient(90deg, #3ECFA4, #a855f7)"
                  : "rgba(255,255,255,0.30)",
                cursor: "pointer",
                transition: "all 300ms ease",
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

const Slide = ({
  active,
  children,
}: {
  active: boolean;
  children: React.ReactNode;
}) => {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        opacity: active ? 1 : 0,
        transition: "opacity 500ms ease",
        pointerEvents: active ? "auto" : "none",
      }}
    >
      {children}
    </div>
  );
};

const arrowStyle = (
  side: "left" | "right"
): React.CSSProperties => ({
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  zIndex: 20,
  width: 44,
  height: 44,
  borderRadius: "50%",
  border: "1px solid rgba(255,255,255,0.10)",
  background: "rgba(255,255,255,0.06)",
  color: "#ffffff",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  backdropFilter: "blur(8px)",
  [side]: 24,
});

export default Hero;