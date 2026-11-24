import Reveal from "@/components/ui/Reveal";
import ClusterCard from "./ClusterCard";

const Cluster = () => {
  return (
    <section id="clusters" className="py-20 lg:py-28">
      <div className="container-page">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Discover Konza</span>
          <h2 className="section-title mt-4">Anchor clusters driving innovation</h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Konza is organised around three high-growth sectors that attract talent, research and
            investment.
          </p>
        </Reveal>
        <ClusterCard />
      </div>
    </section>
  );
};

export default Cluster;
