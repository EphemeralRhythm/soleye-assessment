import BusinessSection from "../components/Home/BusinessSection";
import DomainSearchBar from "../components/Home/DomainSearchBar";
import HeroSection from "../components/Home/HeroSectoin";
import MarketingSection from "../components/Home/MarketingSection";
import Navbar from "../components/Navbar";

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <DomainSearchBar />
      <HeroSection />
      <BusinessSection/>
      <MarketingSection/>
      <div className="w-full h-[500px]"></div>
    </>
  );
};

export default Home;
