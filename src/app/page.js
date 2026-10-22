
import ScrollAnimation from "../components/ScrollAnimation";
import IntroAnimation from "../components/IntroAnimation";
import Hero from "../components/Hero";
import Services from "../components/Services";
import UsSection from "../components/UsSection";
import Prices from "../components/Prices";
import Offer from "../components/Offer";
import CTA from "../components/CTA";

export default function Home() {
  return (
    <>
      <ScrollAnimation />
      <IntroAnimation />
      <Hero />
      <Services />
      <UsSection />
      <Prices />
      <Offer />
      <CTA />
    </>
  );
}
