import marketingSectionImage from "../../assets/marketing-section.jpg";

const MarketingSection: React.FC = () => {
  const cards = [
    {
      title: "Get online fast. No design skills needed. ",
      description:
        "Build your site in minutes. Choose from 100s of beautiful, mobile-friendly templates with our Website Builder, many with ecommerce features.",
    },
    {
      title: "Build trust with email that matches your domain.",
      description:
        "Help boost your credibility with customers with free Professional Email that’s identical to your domain name.",
    },
    {
      title: "Engage with marketing tools.",
      description:
        "Help your audience find you with built-in SEO and promote your business with social media and email marketing tools.",
    },
  ];
  return (
    <section className="flex flex-col w-full">
      <h1 className="font-bold text-xl md:text-4xl text-center w-full tracking-tighter">
        Grow your brand with Websites + Marketing.
      </h1>

      <img src={marketingSectionImage} alt="Description" className="max-w-[88%] m-10 self-center"/>
      <div className="flex flex-col md:flex-row flex-grow p-10 items-stretch">
        {cards.map((card) => {
          return (
            <div className="bg-gray-100 m-2 p-5 flex flex-col gap-3 rounded-2xl">
              <h1 className="text-lg font-bold">{card.title}</h1>
              <h2>{card.description}</h2>
            </div>
          );
        })}
      </div>
      <button className="bg-gray-950 text-white text-lg w-fit p-3 self-center rounded-xl">
        Start For Free
      </button>
    </section>
  );
};

export default MarketingSection;
