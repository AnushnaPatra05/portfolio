import PageLayout from "@/components/portfolio/PageLayout";
import Projects from "@/components/portfolio/Projects";

const ProjectsPage = () => {
  return (
    <PageLayout
      title="Projects · Anushna Patra"
      description="Selected Angular projects by Anushna Patra — reactive forms, NgRx, and RxJS."
    >
      <div className="pt-24 md:pt-28">
        <section className="container-narrow pt-10 mb-4">
          <div className="label-mint mb-3">Projects</div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Things I've built
          </h1>
          <p className="text-secondary-muted max-w-2xl">
            A curated selection of Angular work showcasing reactive patterns, state management,
            and real-time data handling.
          </p>
        </section>
        <Projects showHeader={false} />
      </div>
    </PageLayout>
  );
};

export default ProjectsPage;
