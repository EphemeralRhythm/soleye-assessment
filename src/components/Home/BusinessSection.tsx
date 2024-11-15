import { useState } from "react";

const BusinessSection: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState("Domains");
  return (
    <div className="py-10 flex flex-col">
      <h2 className="font-sans font-bold text-md sm:text-xl md:text-3xl self-center">
        What's Up First For Your Business?
      </h2>

      <div className="w-full flex justify-center gap-4 my-5 overflow-scroll">
        {["Domains", "Recommended", "WordPress and Security"].map((key) => {
          return (
            <button
              key={key}
              onClick={() => setSelectedTab(key)}
              className={`p-2 font-bold text-sm transition duration-200 border-solid border-[1px] border-gray-400 rounded-xl ${
                selectedTab === key
                  ? "bg-gray-950 text-white"
                  : "text-gray-800 hover:text-blue-500 bg-none"
              }`}
            >
              {key}
            </button>
          );
        })}
      </div>

      <div className="flex flex-col sm:flex-row items-stretch justify-center min-h-[400px] gap-5 p-10">
        {selectedTab === "Domains" && (
          <>
            <div
              className="flex-grow p-5 bg-blue-300 flex flex-col justify-between"
            >
              <h1 className="font-bold text-3xl">Domains</h1>
              <p className="my-5">
                Get started with the perfect domain, which comes with free
                domain privacy protection forever.
              </p>

              <button className="bg-gray-950 text-white p-2 rounded-lg">Search Domains</button>
            </div>

            <div className="flex-grow p-5 bg-gray-200 flex flex-col justify-between">
              <h1 className="font-bold text-3xl">.co for 0.01$/1st year</h1>
              <p className="my-5">
                Ensure your company and website stand out with a .co domain.
                3-year purchase required. Additional year(s) ‪47.99 $‬.
              </p>

              <button className="bg-gray-950 text-white p-2 rounded-lg">Get Started</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default BusinessSection;
