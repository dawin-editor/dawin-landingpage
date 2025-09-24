import TextHero from "@/components/Home/TextHero.tsx";

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-t from-[#f4fafc]">
      <TextHero />
        <div className="relative pb-10 pt-16 md:pt-30  mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <img
            src="main.png"
            alt=""
            className="relative rounded-lg shadow-lg w-full transform scale-105"
          />
      </div>
    </div>
  );
};

export default Hero;
