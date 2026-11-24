import Image from "next/image";
import { Cpu, Building2, Landmark } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import AboutImage from "../../../public/assets/images/pictures/about.webp";

const pillars = [
  { icon: Cpu, title: "Thriving ICT sector", text: "A hub for technology firms, startups and data centres." },
  { icon: Building2, title: "Superior infrastructure", text: "Reliable utilities, transport and smart services." },
  { icon: Landmark, title: "Business-friendly governance", text: "Streamlined systems for investors and residents." },
];

const About = () => {
  return (
    <section id="about" className="bg-secondary/60 py-20 lg:py-28">
      <div className="container-page grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal className="relative">
          <div className="relative overflow-hidden rounded-3xl shadow-2xl shadow-brand/10">
            <Image
              src={AboutImage}
              alt="Konza Technopolis development"
              placeholder="blur"
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-2 rounded-2xl bg-primary px-6 py-5 text-primary-foreground shadow-xl sm:-right-6">
            <p className="font-display text-3xl font-bold leading-none">2030</p>
            <p className="mt-1 text-xs uppercase tracking-widest text-white/80">Flagship project</p>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <span className="eyebrow">About Konza</span>
          <h2 className="section-title mt-4">
            A world-class city built for the <span className="text-primary">digital economy</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Konza (Konza Technopolis) is a key flagship project of Kenya&apos;s Vision 2030 economic
            development portfolio. Konza will be a world-class city, powered by a thriving
            information, communications and technology (ICT) sector, superior reliable
            infrastructure and business friendly governance systems.
          </p>

          <ul className="mt-10 space-y-5">
            {pillars.map(({ icon: Icon, title, text }) => (
              <li key={title} className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent text-primary">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-semibold">{title}</p>
                  <p className="text-sm text-muted-foreground">{text}</p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
};

export default About;
