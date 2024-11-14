import { useState, useRef, useEffect } from "react";
import { HiChevronDown } from "react-icons/hi";

import goDaddyTextLogo from "../assets/logos/text-logo.svg";
import goDaddyLogo from "../assets/logos/logo.svg";

import hamburgerMenuIcon from "../assets/icons/menu.svg";
import shoppingCartIcon from "../assets/icons/shopping-cart.svg";
import questionMarkIcon from "../assets/icons/circle-help.svg";
import circleProfileIcon from "../assets/icons/circle-user-round.svg";

const Navbar: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <nav className="flex flex-wrap justify-between items-center bg-gray-800 text-slate-50 p-5 z-10">
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 z-50 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      ></div>

      <div className="flex items-center">
        <button onClick={toggleSidebar} className="p-2 focus:outline-none">
          <img src={hamburgerMenuIcon} className="w-8" />
        </button>
        <img
          src={goDaddyTextLogo}
          className="h-7 text-white hidden md:block"
          alt="GoDaddy Text Logo"
        />

        <img
          src={goDaddyLogo}
          className="size-6 md:size-10 text-white block md:hidden"
          alt="GoDaddy Logo"
        />
      </div>

      <div className="flex items-center gap-4 sm:gap-10">
        <div>
          <h3 className="text-sm hidden md:block">Contact Us</h3>
        </div>
        <div>
          <h3 className="text-sm hidden md:block">Help</h3>
          <img src={questionMarkIcon} className="size-6 block md:hidden"></img>
        </div>

        <div>
          <div className="relative" ref={dropdownRef}>
            <h3
              className="text-sm hidden md:block cursor-pointer"
              onClick={toggleDropdown}
            >
              Sign In{" "}
              <HiChevronDown
                className={`inline ml-1
              ${isDropdownOpen ? 'rotate-180' : 'rotate-0' }
              `}
              />
            </h3>

            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-lg w-60 p-4 text-gray-700">
                <h1>Sanity Check</h1>
              </div>
            )}
          </div>
          <img src={circleProfileIcon} className="size-6 block md:hidden"></img>
        </div>
        <img src={shoppingCartIcon} className="size-4"></img>
      </div>
    </nav>
  );
};

export default Navbar;
