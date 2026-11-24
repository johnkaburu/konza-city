import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import konza1 from "../../../public/assets/images/pictures/konza1.jpg";
import konza2 from "../../../public/assets/images/pictures/konza2.jpg";
import konza3 from "../../../public/assets/images/pictures/konza3.jpg";

const opportunities = [
  {
    id: 1,
    image: konza1,
    title: "Technology",
    description:
      "These are parcels designed for Research and Development Centres, Outsourcing campuses BPO/ITES, Innovation Parks, Technology Business Incubation and Acceleration Parks, Business Continuity Centres and other investor driven Science, Technology and Innovation facilities.",
  },
  {
    id: 2,
    image: konza2,
    title: "Education",
    description:
      "This project entails the universities in Konza Technopolis which are envisioned as a special place where innovative groups develop and apply modern technology; as a place where higher education and industry come together, and a site of life-long learning.",
  },
  {
    id: 3,
    image: konza3,
    title: "Commercial and Residential",
    description:
      "These include general and affordable housing for people working and living in Konza Technopolis and affordable housing for students. Opportunities also exist for mixed use commercial facilities such as office buildings and trading facilities.",
  },
];

const OpportunityCard = () => {
  return (
    <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {opportunities.map((o, i) => (
        <Reveal
          as="article"
          key={o.id}
          delay={i * 120}
          className="group flex flex-col overflow-hidden rounded-3xl border bg-card transition-shadow duration-300 hover:shadow-xl hover:shadow-brand/10"
        >
          <div className="relative aspect-[16/10] overflow-hidden">
            <Image
              src={o.image}
              alt={`${o.title} opportunities at Konza`}
              placeholder="blur"
              sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-primary backdrop-blur">
              {o.title}
            </span>
          </div>
          <div className="flex flex-1 flex-col p-7">
            <h3 className="font-display text-xl font-bold">{o.title}</h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
              {o.description}
            </p>
            <a
              href="#contact"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary"
            >
              Learn more
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
        </Reveal>
      ))}
    </div>
  );
};

export default OpportunityCard;
