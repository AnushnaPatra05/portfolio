import { useEffect, useState } from "react";
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Camera,
  ArrowRight,
  Download,
} from "lucide-react";

import { CV_DOWNLOAD_URL } from "@/config/cv";

const roles = ["Frontend Engineer", "Associate"];

const slideLabels = ["", "MY TECH STACK"];


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
  { src: "/NGRX.jpg", label: "NgRx" },
  { src: "/bootstrap.jpg", label: "Bootstrap" },
  { src: "/github.png", label: "GitHub" },
  { src: "/ci-cd.png", label: "CI/CD" },
];

const SLIDE_COUNT = 2;

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % SLIDE_COUNT);
    }, 6500);


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
        width: "100%",
        height: "100vh",
        minHeight: "760px",
        overflow: "hidden",
        background: "#0B1020",
      }}
    >
      {/* ====================================== */}
      {/* ARROWS */}
      {/* ====================================== */}

      <button
        onClick={goPrev}
        aria-label="Previous Slide"
        style={arrowStyle("left")}
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <button
        onClick={goNext}
        aria-label="Next Slide"
        style={arrowStyle("right")}
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* ====================================== */}
      {/* SLIDE 0 — ABOUT */}
      {/* ====================================== */}

      <Slide active={activeIndex === 0}>
        <div className="hero-bg" />

        <div className="hero-about-container">
          <div className="profile-image-wrap">
            <img
              src="/photoANUSHNA.jpg"
              alt="Anushna Patra"
              className="profile-image"
            />
          </div>

          <div className="hero-about-content">
            <div className="hero-small-title">
              ASSOCIATE
            </div>


            <h2 className="hero-heading">
              Building scalable
              <br />
              Angular experiences.
            </h2>

            <p className="hero-description">
              Frontend Engineer with 3+ years of experience building
              enterprise-grade Angular applications at Cognizant.
              Passionate about reactive architecture, scalable UI,
              accessibility, and frontend engineering.
            </p>

            <div className="hero-tags">
              {[
                "3+ Years Experience",
                "Angular Expert",
                "RxJS & NgRx",
                "Kolkata, India",
              ].map((tag) => (
                <span key={tag} className="hero-tag">
                  {tag}
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

      {/* ====================================== */}
      {/* SLIDE 1 — TECH STACK */}
      {/* ====================================== */}

      <Slide active={activeIndex === 1}>

        <div className="tech-background" />

        <div className="tech-stack-container">
          <h3 className="tech-title">My Tech Stack</h3>

          <div className="tech-grid">
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

      {/* ====================================== */}
      {/* SCROLL DOWN */}
      {/* ====================================== */}

      <a href="#skills" className="scroll-down">
        <ChevronDown className="w-6 h-6" />
      </a>

      {/* ====================================== */}
      {/* STYLES */}
      {/* ====================================== */}

      <style>
        {`
          .hero-bg {
            position: absolute;
            inset: 0;

            background:
              linear-gradient(
                135deg,
                #0b1020 0%,
                #151932 50%,
                #1C1C1E 100%
              );
          }

          /* ====================================== */
          /* ABOUT */
          /* ====================================== */

          .hero-about-container {
            position: absolute;
            inset: 0;

            display: flex;
            align-items: center;
            justify-content: center;

            gap: 72px;

            padding:
              100px
              80px
              240px;

            z-index: 2;
          }

          .profile-image-wrap {
            width: 270px;
            height: 270px;

            border-radius: 50%;
            overflow: hidden;

            flex-shrink: 0;

            border:
              2px solid rgba(62,207,164,0.45);

            background: rgba(255,255,255,0.04);

            box-shadow:
              0 0 40px rgba(62,207,164,0.15),
              0 0 80px rgba(168,85,247,0.15);
          }

          .profile-image {
            width: 100%;
            height: 100%;

            object-fit: cover;

            object-position: center 12%;
          }

          .hero-about-content {
            max-width: 540px;
          }

          .hero-small-title {
            color: #3ECFA4;

            font-size: 14px;
            font-weight: 700;

            letter-spacing: 0.14em;

            margin-bottom: 16px;
          }

          .hero-heading {
            color: white;

            font-size: 58px;
            line-height: 1.08;

            font-weight: 800;

            margin-bottom: 22px;
          }

          .hero-description {
            color: rgba(255,255,255,0.72);

            line-height: 1.9;
            font-size: 15px;
          }

          .hero-tags {
            display: flex;
            flex-wrap: wrap;

            gap: 12px;

            margin-top: 28px;
          }

          .hero-tag {
            padding: 8px 14px;

            border-radius: 999px;

            background: rgba(62,207,164,0.08);

            border:
              1px solid rgba(62,207,164,0.18);

            color: #3ECFA4;

            font-size: 12px;
          }

          /* ====================================== */


          /* ====================================== */
          /* TECH STACK */
          /* ====================================== */

          .tech-background {
            position: absolute;
            inset: 0;

            background:
              radial-gradient(
                circle at top left,
                rgba(62,207,164,0.12),
                transparent 35%
              ),

              radial-gradient(
                circle at top right,
                rgba(168,85,247,0.12),
                transparent 35%
              ),

              linear-gradient(
                135deg,
                #0b1020 0%,
                #141b34 50%,
                #1C1C1E 100%
              );
          }

          .tech-stack-container {
            position: absolute;
            inset: 0;

            z-index: 2;

            display: flex;
            flex-direction: column;
            align-items: center;

            justify-content: flex-start;

            padding:
              100px
              50px
              390px;
          }

          .tech-title {
            color: white;

            font-size: 32px;
            font-weight: 700;

            margin-bottom: 55px;
          }

          .tech-grid {
            width: 100%;
            max-width: 1100px;

            display: grid;

            grid-template-columns:
              repeat(auto-fit, minmax(120px, 1fr));

            gap: 32px 24px;

            justify-items: center;
          }

          /* ====================================== */
          /* SCROLL */
          /* ====================================== */

          .scroll-down {
            position: absolute;

            left: 50%;
            bottom: 18px;

            transform: translateX(-50%);

            z-index: 30;

            color: #3ECFA4;
          }

          /* ====================================== */
          /* TABLET */
          /* ====================================== */

          @media (max-width: 1024px) {

            .hero-about-container {
              flex-direction: column;

              text-align: center;

              gap: 42px;

              padding:
                100px
                40px
                260px;
            }

            .hero-heading {
              font-size: 46px;
            }
          }

          /* ====================================== */
          /* MOBILE */
          /* ====================================== */

          @media (max-width: 768px) {

            #hero {
              min-height: 980px !important;
            }

            .hero-about-container {
              flex-direction: column;

              text-align: center;

              gap: 24px;

              padding:
                40px
                24px
                300px;
            }

            .profile-image-wrap {
              width: 190px;
              height: 190px;

              margin-top: 18px;
            }

            .profile-image {
              object-position: center 10%;
            }

            .hero-heading {
              font-size: 36px;
            }

            .hero-description {
              font-size: 14px;
            }

            .hero-tags {
              justify-content: center;
            }




            .tech-stack-container {
              padding:
                70px
                18px
                300px;
            }

            .tech-title {
              font-size: 26px;

              margin-bottom: 36px;
            }

            .tech-grid {
              grid-template-columns:
                repeat(3, 1fr);

              gap: 22px 10px;
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
        width: "100%",
        maxWidth: 110,

        display: "flex",
        flexDirection: "column",
        alignItems: "center",

        gap: 12,
      }}
    >
      <div
        style={{
          width: 74,
          height: 74,

          borderRadius: 18,

          background: "rgba(255,255,255,0.04)",

          border:
            "1px solid rgba(255,255,255,0.08)",

          display: "flex",
          alignItems: "center",
          justifyContent: "center",

          backdropFilter: "blur(10px)",

          boxShadow:
            "0 6px 24px rgba(0,0,0,0.25)",
        }}
      >
        {!errored && src ? (
          <img
            src={src}
            alt={label}
            onError={() => setErrored(true)}
            style={{
              width: 42,
              height: 42,
              objectFit: "contain",
            }}
          />
        ) : (
          <Camera className="w-5 h-5 text-[#3ECFA4]" />
        )}
      </div>

      <span
        style={{
          color: "rgba(255,255,255,0.72)",
          fontSize: 12,
          textAlign: "center",
          lineHeight: 1.4,
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
}: any) => {

  const showHeroText = activeIndex === 0;

  return (
    <div
      style={{
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,

        zIndex: 10,

        padding: showHeroText
          ? "16px 20px 26px"
          : "14px 20px 24px",

        display: "flex",
        flexDirection: "column",
        alignItems: "center",

        gap: showHeroText ? 8 : 8,

        textAlign: "center",

        background:
          activeIndex === 0
            ? "linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.55) 60%, transparent 100%)"
            : "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.25) 100%)",
      }}
    >
      {slideLabels[activeIndex] ? (
        <div
          style={{
            color: "#3ECFA4",
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: "0.16em",
          }}
        >
          {slideLabels[activeIndex]}
        </div>
      ) : null}

      {showHeroText && (
        <>
          <h1
            style={{
              margin: 0,

              fontSize: "clamp(32px, 6vw, 62px)",

              fontWeight: 800,

              lineHeight: 1,

              background:
                "linear-gradient(90deg, #3ECFA4 0%, #a855f7 100%)",

              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Anushna Patra
          </h1>

          <div
            style={{
              color: "#3ECFA4",

              fontSize: "clamp(15px, 2vw, 24px)",

              minHeight: 24,
            }}
          >
            {roles[activeIndex]}
          </div>
        </>
      )}

      <div
        className="hero-btn-row"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",

          gap: 12,
          marginTop: 2,
        }}
      >
        <button
          onClick={scrollToProjects}
          style={{
            border: "1.5px solid #3ECFA4",
            background: "transparent",
            color: "#3ECFA4",

            borderRadius: 999,

            padding: "12px 24px",
            minHeight: 44,

            fontSize: 14,
            fontWeight: 600,

            display: "inline-flex",
            alignItems: "center",
            gap: 8,

            cursor: "pointer",
          }}
        >
          View My Work
          <ArrowRight className="w-4 h-4" />
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

            padding: "12px 24px",
            minHeight: 44,

            fontSize: 14,
            textDecoration: "none",
            fontWeight: 500,

            display: "inline-flex",
            alignItems: "center",
            gap: 8,
          }}
        >
          Download CV
          <Download className="w-4 h-4" />
        </a>
      </div>

      <div
        style={{
          display: "flex",
          gap: 8,
          marginTop: 2,
        }}
      >
        {[0, 1].map((index) => {
          const active = index === activeIndex;

          return (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
              style={{
                width: active ? 28 : 10,
                height: 10,

                borderRadius: 999,

                border: "none",

                background: active
                  ? "linear-gradient(90deg, #3ECFA4, #a855f7)"
                  : "rgba(255,255,255,0.32)",

                cursor: "pointer",
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

  width: 46,
  height: 46,

  borderRadius: "50%",

  border:
    "1px solid rgba(255,255,255,0.12)",

  background: "rgba(255,255,255,0.06)",

  color: "#ffffff",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  cursor: "pointer",

  backdropFilter: "blur(10px)",

  [side]: 24,
});

export default Hero;