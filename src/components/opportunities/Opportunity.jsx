import Reveal from "@/components/ui/Reveal";
import OpportunityCard from "./OpportunityCard";

const Opportunity = () => {
  return (
    <section id="opportunities" className="bg-secondary/60 py-20 lg:py-28">
      <div className="container-page">
        <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="eyebrow">Projects</span>
            <h2 className="section-title mt-4">Investment Opportunities</h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            Serviced parcels across technology, education and mixed-use development — ready for
            partners who want to build in Africa&apos;s Silicon Savannah.
          </p>
        </Reveal>
        <OpportunityCard />
      </div>
    </section>
  );
};

export default Opportunity;
