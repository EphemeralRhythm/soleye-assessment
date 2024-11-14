import { useState } from "react";
import hamburgerMenuIcon from "../assets/icons/menu.svg";
import shoppingCartIcon from "../assets/icons/shopping-cart.svg";
import goDaddyTextLogo from "../assets/logos/text-logo.svg";
import goDaddyLogo from "../assets/logos/logo.svg";

const Navbar: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  console.log(isSidebarOpen);
  return (
    <nav className="flex justify-between items-center bg-gray-800 text-slate-50 p-5 z-10">
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

      <div className="flex gap-8 items-center">
        <button onClick={toggleSidebar} className="p-2 focus:outline-none">
          <img src={hamburgerMenuIcon} className="w-10 h-10" />
        </button>
        <img
          src={goDaddyTextLogo}
          className="w-30 h-10 text-white hidden md:block"
          alt="GoDaddy Text Logo"
        />

        <img
          src={goDaddyLogo}
          className="w-30 h-10 text-white block md:hidden"
          alt="GoDaddy Logo"
        />
      </div>

      <div className="flex space-evenly items-center gap-10">
        <h3 className="text-sm">Contact Us</h3>
        <h3 className="text-sm">Help</h3>
        <h3 className="text-sm">Sign In</h3>
        <img src={shoppingCartIcon} className="size-4"></img>
      </div>
    </nav>
  );
};

export default Navbar;
