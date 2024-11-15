import DomainSearchBar from "../components/Home/DomainSearchBar";
import HeroSection from "../components/Home/HeroSectoin";
import Navbar from "../components/Navbar";

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <DomainSearchBar />
      <HeroSection />
    </>
  );
};

export default Home;
