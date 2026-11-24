import Image from "next/image";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import landing from "../../../public/assets/images/pictures/landing-hero.jpg";

const highlights = [
  { value: "5,000", label: "Acres of smart city" },
  { value: "60 km", label: "South-east of Nairobi" },
  { value: "2030", label: "Vision flagship" },
];

const Landing = () => {
  return (
    <section id="home" className="relative isolate flex min-h-[100svh] items-end overflow-hidden bg-ink">
      <Image
        src={landing}
        alt="Aerial view of Konza Technopolis"
        fill
        priority
        placeholder="blur"
        sizes="100vw"
        className="animate-hero-zoom -z-20 object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/70 to-ink/30" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink/80 via-ink/20 to-transparent" />

      <div className="container-page pb-16 pt-32 sm:pb-24 lg:pb-28">
        <div className="max-w-3xl">
          <h1 className="font-display text-5xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Konza <span className="text-brand-light">City</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80 sm:text-xl">
            Discover Konza Technopolis — a global technology and innovation hub built for the
            businesses, researchers and communities shaping Africa&apos;s digital future.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <Button asChild size="lg" className="h-12 rounded-full px-7 text-base">
              <a href="#about">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 rounded-full border-white/30 bg-white/5 px-7 text-base text-white backdrop-blur hover:bg-white hover:text-ink"
            >
              <a href="#opportunities">Investment Opportunities</a>
            </Button>
          </div>
        </div>

        <dl className="mt-16 grid max-w-2xl grid-cols-3 gap-6 border-t border-white/15 pt-8">
          {highlights.map((h) => (
            <div key={h.label} className="flex flex-col">
              <dt className="order-2 text-xs text-white/60 sm:text-sm">{h.label}</dt>
              <dd className="font-display text-2xl font-bold text-white sm:text-3xl">{h.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <a
        href="#about"
        aria-label="Scroll to About"
        className="absolute bottom-6 right-6 hidden h-12 w-12 animate-bounce items-center justify-center rounded-full border border-white/20 text-white/80 transition-colors hover:bg-white/10 md:flex"
      >
        <ChevronDown className="h-5 w-5" />
      </a>
    </section>
  );
};

export default Landing;
