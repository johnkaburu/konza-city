import { Monitor, Microscope, Cog } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const clusters = [
  {
    id: 1,
    icon: Monitor,
    title: "ICT",
    description: "Is one of the fastest growing sectors with a high potential for job creation.",
  },
  {
    id: 2,
    icon: Microscope,
    title: "Life Sciences",
    description:
      "Will provide an enabling environment for scientific breakthroughs related to bioscience and new ways of working with health providers and industry.",
  },
  {
    id: 3,
    icon: Cog,
    title: "Engineering",
    description:
      "This is a super cluster that encompasses energy, water, material sciences, electronics and related activities.",
  },
];

const ClusterCard = () => {
  return (
    <div className="mt-14 grid gap-6 md:grid-cols-3">
      {clusters.map(({ id, icon: Icon, title, description }, i) => (
        <Reveal
          as="article"
          key={id}
          delay={i * 120}
          className="group relative overflow-hidden rounded-3xl border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-brand/10"
        >
          <div
            aria-hidden
            className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-accent transition-transform duration-500 group-hover:scale-150"
          />
          <span className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg shadow-brand/30">
            <Icon className="h-7 w-7" />
          </span>
          <span className="absolute right-8 top-8 font-display text-5xl font-bold text-primary/10">
            0{id}
          </span>
          <h3 className="relative mt-8 font-display text-2xl font-bold">{title}</h3>
          <p className="relative mt-3 leading-relaxed text-muted-foreground">{description}</p>
        </Reveal>
      ))}
    </div>
  );
};

export default ClusterCard;
