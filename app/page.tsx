import Highlights from "./components/Highlight";
import Hero from "./components/Hero";
import CallToAction from "./components/Callaction";
import Services from "./components/Services";

export default function Home() {
  return (
    <div>
      <Hero />
      <Highlights />
      <Services />
      <CallToAction />
    </div>
    
  );
}
