import NavBar from "../components/hero/NavBar";
import TextHero from "../components/hero/TextHero";

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-t from-[#f4fafc]">
      <div className="relative pt-6 pb-16 sm:pb-24 ">
        <NavBar isHome={true} />
        <TextHero />
      </div>

      <div className="relative mx-3 mb-8 sm:my-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <img src="main.png" alt="" className="relative rounded-lg shadow-lg w-full" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
