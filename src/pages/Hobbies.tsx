import PageLayout from "@/components/portfolio/PageLayout";
import { Plane, Music, UtensilsCrossed, Dumbbell, Palette, Layout } from "lucide-react";

const hobbies = [
  { icon: Plane, name: "Travel", desc: "Exploring new cities, cultures, and cuisines around the world." },
  { icon: Music, name: "Music", desc: "From lo-fi playlists while coding to live gigs on weekends." },
  { icon: UtensilsCrossed, name: "Cooking", desc: "Experimenting in the kitchen, one recipe at a time." },
  { icon: Dumbbell, name: "Working Out", desc: "Gym sessions keep me disciplined and energised." },
  { icon: Palette, name: "Painting", desc: "Watercolours and acrylics — where my creative side lives." },
  { icon: Layout, name: "Frontend Design", desc: "Yes, designing for fun counts as a hobby too." },
];

const Hobbies = () => {
  return (
    <PageLayout
      title="Hobbies · Anushna Patra"
      description="Things that keep Anushna inspired beyond code."
    >
      <div className="pt-24 md:pt-28 pb-20">
        <section className="container-narrow pt-10 mb-12">
          <div className="label-mint mb-3">Hobbies</div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Beyond the Code</h1>
          <p className="text-secondary-muted max-w-2xl">Things that keep me inspired outside work.</p>
        </section>

        <section className="container-narrow">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {hobbies.map((h) => (
              <article
                key={h.name}
                className="reveal group p-6 rounded-xl bg-card border border-subtle border-l-[3px] border-l-mint hover:bg-[hsl(240,2%,20%)] transition-smooth"
              >
                <div className="w-11 h-11 rounded-md bg-mint/10 text-mint grid place-items-center mb-4 group-hover:bg-mint/20 transition-smooth">
                  <h.icon className="w-5 h-5" />
                </div>
                <h2 className="text-lg font-semibold text-foreground mb-1">{h.name}</h2>
                <p className="text-sm text-secondary-muted">{h.desc}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default Hobbies;
