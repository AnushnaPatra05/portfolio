import PageLayout from "@/components/portfolio/PageLayout";
import About from "@/components/portfolio/About";
import Skills from "@/components/portfolio/Skills";

const AboutPage = () => {
  return (
    <PageLayout
      title="About · Anushna Patra"
      description="About Anushna Patra — Angular Frontend Developer at Cognizant."
    >
      <div className="pt-24 md:pt-28">
        <section className="container-narrow pt-10">
          <div className="label-mint mb-3">About</div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Frontend engineer focused on reactive Angular.
          </h1>
          <p className="text-secondary-muted max-w-2xl">
            Get to know a bit about me and the tools I use every day.
          </p>
        </section>
        <About />
        <Skills />
      </div>
    </PageLayout>
  );
};

export default AboutPage;
