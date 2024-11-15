const HeroSection: React.FC = () => {
  return (
    <div className="flex flex-col px-10 items-stretch md:flex-row flex-nowrap">
      <div
        className="flex-grow bg-[40%] flex flex-col bg-fit rounded-2xl"
        style={{ backgroundImage: "url(../src/assets/landscape.jpg)" }}
      >
        <h1 className="font-serif text-5xl font-extrabold m-4 max-w-80">
          Buy a domain and get online fast with AI
        </h1>
        <h3 className="font-sans text-sm max-w-96 m-5">
          Buy a new domain and get GoDaddy Airo™, our customizable, AI-powered
          solution that can easily deliver a website, logo, and more.^
        </h3>
      </div>

      <div
        className="bg-black my-5 flex-grow rounded-2xl flex flex-col text-left items-left
      md:my-0 md:mx-3"
      >
        <div className="flex flex-col items-left text-left justify-around h-full p-5">
          <span className="bg-cyan-300 w-fit rounded p-1 fon-sans font-light text-sm tracking-wide">
            NEW
          </span>
          <h3 className="text-white text-sm my-4">AI Suggested Domains</h3>
          <h2 className="text-white font-serif text-xl max-w-[70%] md:max-w-80 tracking-wide font-bold">
            Find the perfect domain and business name with AI.
          </h2>
        </div>

        <span className="bg-white text-black p-2 rounded-lg font-bold m-5 w-fit">
          Try AI Domain Search
        </span>
      </div>
      <div className="grow[1]"></div>
    </div>
  );
};

export default HeroSection;
