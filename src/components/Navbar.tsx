import hamburgerMenuIcon from "../assets/icons/menu.svg";
import shoppingCartIcon from "../assets/icons/shopping-cart.svg";
import goDaddyLogo from "../assets/logos/text-logo.svg";

const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-between items-center bg-gray-800 text-slate-50 p-5">
      <div className="flex gap-8 items-center">
        <img src={hamburgerMenuIcon} className="size-10"></img>
        <img src={goDaddyLogo} className="w-30 h-10 text-white"></img>
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
