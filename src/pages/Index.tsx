import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Skills from "@/components/portfolio/Skills";
import Projects from "@/components/portfolio/Projects";
import Experience from "@/components/portfolio/Experience";
import Contact from "@/components/portfolio/Contact";
import CertificationsCarousel from "@/components/CertificationsCarousel";
import PageLayout from "@/components/portfolio/PageLayout";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Index = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 50);
    }
  }, [hash]);

  return (
    <PageLayout
      title="Anushna Patra — Angular Frontend Developer"
      description="Portfolio of Anushna Patra, Programmer Analyst at Cognizant with 3 years of experience in scalable, reactive Angular applications."
    >
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <CertificationsCarousel />
      <Contact />
    </PageLayout>
  );
};

export default Index;
