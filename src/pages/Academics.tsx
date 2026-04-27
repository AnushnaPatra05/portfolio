import PageLayout from "@/components/portfolio/PageLayout";

const education = [
  {
    title: "Bachelor of Technology",
    field: "Electrical Engineering",
    institution: "Narula Institute of Technology",
    period: "2019 – 2023",
    score: "CGPA: 8.8 / 10",
    extra: "Key subjects: Electrical Systems, Programming, Data Structures, Engineering Mathematics",
  },
  {
    title: "Class XII (12th Standard)",
    field: "West Bengal Council of Higher Secondary Education (WBCHSE)",
    institution: "Bidhannagar Municipal School",
    period: "2018",
    score: "Percentage: 82%",
  },
  {
    title: "Class X (10th Standard)",
    field: "West Bengal Board of Secondary Education (WBBSE)",
    institution: "Bidhannagar Municipal School",
    period: "2016",
    score: "Percentage: 89.5%",
  },
];

const Academics = () => {
  return (
    <PageLayout
      title="Academics · Anushna Patra"
      description="Educational background and qualifications of Anushna Patra."
    >
      <div className="pt-24 md:pt-28 pb-20">
        <section className="container-narrow pt-10 mb-12">
          <div className="label-mint mb-3">Academics</div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Education</h1>
          <p className="text-secondary-muted max-w-2xl">
            A record of my academic journey and qualifications.
          </p>
        </section>

        <section className="container-narrow space-y-5">
          {education.map((e, i) => (
            <article
              key={i}
              className="reveal p-6 md:p-7 rounded-xl bg-card border border-subtle hover:border-mint/50 transition-smooth"
            >
              <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                <div>
                  <h2 className="text-xl font-semibold text-foreground">{e.title}</h2>
                  <p className="text-mint text-sm mt-1">{e.field}</p>
                </div>
                <span className="text-sm text-secondary-muted">{e.period}</span>
              </div>
              <p className="text-secondary-muted text-sm">{e.institution}</p>
              <p className="text-foreground text-sm mt-2 font-medium">{e.score}</p>
              {e.extra && <p className="text-secondary-muted text-sm mt-2">{e.extra}</p>}
            </article>
          ))}
        </section>

        <section className="container-narrow mt-20">
          <div className="reveal mb-8 text-center">
            <div className="label-mint mb-3">Certifications</div>
            <h2 className="text-3xl md:text-[36px] font-bold text-foreground mb-3">Certifications</h2>
            <p className="text-secondary-muted">Coming soon — uploading shortly.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="reveal aspect-[4/3] rounded-xl border-2 border-dashed border-white/10 grid place-items-center text-secondary-muted text-sm hover:border-mint/50 transition-smooth"
              >
                Certificate slot
              </div>
            ))}
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default Academics;
