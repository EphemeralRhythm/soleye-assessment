import { useEffect, useState, useRef } from "react";
import searchIcon from "../../assets/icons/search.svg";

const DomainSearchBar: React.FC = () => {
  const [isFixed, setIsFixed] = useState(false);
  const elementRef = useRef(null);
  const originalOffsetTop = useRef(0);

  useEffect(() => {
    if (elementRef.current) {
      originalOffsetTop.current =
        elementRef.current.getBoundingClientRect().top + window.scrollY;
    }

    const handleScroll = () => {
      if (window.scrollY >= originalOffsetTop.current) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`flex items-center justify-center w-full px-10 z-20 bg-white 
        transform transition-transform duration-300
       ${isFixed ? "fixed top-0" : "relative"}
        `}
      ref={elementRef}
    >
      <div className="flex items-center border border-gray-300 rounded-md overflow-hidden w-full my-5">
        <input
          type="text"
          placeholder="Type the domain you want"
          className="flex-grow px-4 py-2 text-lg text-gray-700 outline-none"
        />
        <button className="bg-blue-500 p-4 flex items-center justify-center text-white h-full">
          <img src={searchIcon} className="w-6" />
        </button>
      </div>
    </div>
  );
};

export default DomainSearchBar;
