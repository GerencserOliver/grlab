import ScrollAnimation from "../components/ScrollAnimation";
import IntroAnimation from "../components/IntroAnimation";
import Hero from "../components/Hero";
import Services from "../components/Services";
import UsSection from "../components/UsSection";
import Prices from "../components/Prices";
import TrustBar from "../components/trust/TrustBar";
import PricingTable from "../components/trust/PricingTable";
import Reviews from "../components/trust/Reviews";
import BlogPreview from "../components/blog/BlogPreview";
import Offer from "../components/Offer";
import CTA from "../components/CTA";

export default function Home() {
  return (
    <>
      <ScrollAnimation />
      <IntroAnimation />
      <Hero />
      <TrustBar />
      <Services />
      <UsSection />
      <Prices />
      <PricingTable />
      <Reviews />
      <BlogPreview />
      <Offer />
      <CTA />
    </>
  );
}
