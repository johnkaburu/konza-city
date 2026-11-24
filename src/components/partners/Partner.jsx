import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import partner from "../../../public/assets/images/partners/partner1.png";

const Partner = () => {
  return (
    <section id="partners" className="overflow-hidden py-20 lg:py-24">
      <Reveal className="container-page text-center">
        <span className="eyebrow">Our Partners</span>
        <h2 className="section-title mt-4">Building Konza together</h2>
      </Reveal>

      {/*
        Infinite logo strip. The track holds two identical groups and the animation
        shifts it by exactly -50%, so group B lands where group A started. Each group
        repeats the logo strip several times so it's wider than any viewport —
        otherwise the track runs out before the loop resets and leaves a gap.
      */}
      <div className="relative mt-12 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="animate-marquee flex w-max hover:[animation-play-state:paused]">
          {[0, 1].map((group) => (
            <div key={group} className="flex shrink-0" aria-hidden={group === 1}>
              {Array.from({ length: 4 }, (_, i) => (
                <Image
                  key={i}
                  src={partner}
                  alt={group === 0 && i === 0 ? "Konza Technopolis partner organisations" : ""}
                  className="h-16 w-auto max-w-none shrink-0 px-6 grayscale transition duration-300 hover:grayscale-0 sm:h-20"
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partner;
