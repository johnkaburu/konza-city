import Landing from "@/components/landing/Landing";
import About from "@/components/about/About";
import Cluster from "@/components/cluster/Cluster";
import Stats from "@/components/stats/Stats";
import Opportunity from "@/components/opportunities/Opportunity";
import Partner from "@/components/partners/Partner";

export default function Home() {
  return (
    <>
      <Landing />
      <About />
      <Cluster />
      <Stats />
      <Opportunity />
      <Partner />
    </>
  );
}
