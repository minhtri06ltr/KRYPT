import logo from "../../images/logo.png";
import { HiMenuAlt4, HiX, HiArrowSmRight } from "react-icons/hi";
import { useState } from "react";

const NavbarItem = ({ title, classNameProps }) => {
  return <li className={`mx-4 cursor-pointer ${classNameProps}`}>{title}</li>;
};
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className="w-full flex md:justify-center justify-between p-4 items-center">
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <img src={logo} alt="logo" className="w-32 cursor-pointer" />
      </div>
      <ul className="font-semibold justify-between items-center flex-initial list-none text-white hidden md:flex">
        {["Market", "Exchange", "Tutorial", "Wallet"].map((item, i) => (
          <NavbarItem
            title={item}
            classNameProps="transition ease-linear duration-300 hover:opacity-60"
            key={i}
          />
        ))}
        <li className="neon-button font-bold ml-4">Login</li>
      </ul>
      <div className="flex relative">
        {toggleMenu ? (
          <HiX
            fontSize={28}
            className="text-white md:hidden cursor-pointer"
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <HiMenuAlt4
            fontSize={28}
            className="text-white md:hidden cursor-pointer"
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <ul className="animate-slide-in rounded-md flex flex-col items-center shadow-2xl -top-0 -right-2 text-white font-semibold md:hidden blue-glassmorphism h-screen w-[60vw] fixed">
            <li
              className="w-full my-6 ml-6 animate-bounce cursor-pointer"
              onClick={() => setToggleMenu(false)}
            >
              <HiArrowSmRight fontSize={28} />
            </li>
            {["Market", "Exchange", "Tutorial", "Wallet"].map((item, i) => (
              <NavbarItem
                title={item}
                key={i}
                classNameProps="mb-4 transition ease-linear duration-300 hover:opacity-60 text-lg"
              />
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
