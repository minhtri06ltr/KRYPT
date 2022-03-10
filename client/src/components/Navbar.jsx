import logo from "../../images/logo.png";
import {
  HiMenuAlt4,
  HiX,
  HiOutlineChevronRight,
  HiAcademicCap,
} from "react-icons/hi";
import { GrBitcoin } from "react-icons/gr";
import { GiCardExchange } from "react-icons/gi";
import { FaWallet } from "react-icons/fa";
import { useState, useRef, useEffect } from "react";

const NavbarItem = ({ title, classNameProps, icon }) => {
  return (
    <>
      <li
        className={`mx-4 transition ease-linear duration-300 hover:opacity-60 text-lg cursor-pointer ${classNameProps}`}
      >
        {icon}
        {title}
        <HiOutlineChevronRight className="md:hidden ml-auto" fontSize={28} />
      </li>
    </>
  );
};

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const wrapperRef = useRef(null);

  const useOutsideAlerter = (ref) => {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setToggleMenu(false);
        }
      }

      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  };
  useOutsideAlerter(wrapperRef);

  return (
    <nav className="w-srceen flex justify-between  sm:py-6 sm:px-20 p-6 items-center">
      <div className="w-full flex-initial justify-center items-center">
        <img src={logo} alt="logo" className="sm:w-48 w-36 cursor-pointer" />
      </div>
      <ul className="font-semibold justify-between items-center flex-initial list-none text-white hidden md:flex">
        {["Market", "Exchange", "Tutorial", "Wallet"].map((item, i) => (
          <NavbarItem title={item} key={i} />
        ))}
        <li className="rainbow font-bold ml-4 py-2 px-6 rounded-full cursor-pointer">
          Login
        </li>
      </ul>

      <div className="flex relative" ref={wrapperRef}>
        <button className="neon-button md:hidden mr-6 font-bold ml-4">
          Login
        </button>
        {toggleMenu ? (
          <HiX
            fontSize={28}
            className="text-white md:hidden cursor-pointer rotate-center"
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <HiMenuAlt4
            fontSize={28}
            className="text-white md:hidden cursor-pointer rotate-center"
            onClick={() => setToggleMenu(true)}
          />
        )}

        {toggleMenu && (
          <>
            <ul className="slide-left px-14 z-10 animate-slide-in rounded-md flex flex-col items-center shadow-2xl -top-0 -right-[6.5rem] text-white font-semibold md:hidden blue-glassmorphism h-screen w-[60vw] fixed">
              <li
                className="self-start my-6 -ml-8 animate-bounce cursor-pointer"
                onClick={() => setToggleMenu(false)}
              >
                <HiX fontSize={28} />
              </li>
              {[
                {
                  title: "Market",
                  icon: (
                    <GrBitcoin fontSize={28} className="mr-14" color="yellow" />
                  ),
                },
                {
                  title: "Exchange",
                  icon: (
                    <GiCardExchange
                      fontSize={28}
                      className="mr-14"
                      color="greenyellow"
                    />
                  ),
                },
                {
                  title: "Tutorials",
                  icon: (
                    <HiAcademicCap
                      fontSize={28}
                      className="mr-14"
                      color="gray"
                    />
                  ),
                },
                {
                  title: "Wallets",
                  icon: (
                    <FaWallet fontSize={28} className="mr-14" color="brown" />
                  ),
                },
              ].map((item, i) => (
                <NavbarItem
                  title={item.title}
                  icon={item.icon}
                  key={i}
                  classNameProps="w-full flex items-center mt-12"
                />
              ))}
            </ul>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
