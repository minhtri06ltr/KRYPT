import React from "react";

const Footer = () => {
  return (
    <div className="gradient-bg-footer w-full md:p-20 py-12 px-4">
      <div className="border-[#434246] border-b-[1px] py-6 border-solid">
        <div className="flex items-center lg:flex-row flex-col justify-between">
          <div>
            <img
              className="w-32 flex-initial"
              src="../../images/logo.png"
              alt="logo"
            />
          </div>
          <ul className="flex mt-10 lg:mt-0 flex-wrap justify-center items-center">
            {["Market", "Exchange", "Tutorial", "Wallet"].map((item, i) => (
              <li
                className="text-white py-4 mx-12 cursor-pointer transition ease-linear duration-300 hover:opacity-60 text-lg"
                key={i}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        <span className="text-white text-center block text-base mt-10">
          Come join us and hear for the unexpected miracle
        </span>
        <span className="text-white text-center block text-base">
          laptopdienthoai1@gmail.com
        </span>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-white py-6 text-sm">@kryptomastery2022</span>
        <span className="text-white py-6 text-sm">© All rights reserved</span>
      </div>
    </div>
  );
};

export default Footer;
