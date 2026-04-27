const Certifications = () => {
  return (
    <section id="certifications" className="section-padding bg-background">
      <div className="container-narrow">
        <div className="reveal mb-10 text-center">
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
      </div>
    </section>
  );
};

export default Certifications;
