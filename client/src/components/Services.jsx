import React from "react";
import { BsShieldFillCheck } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { RiHeart2Fill } from "react-icons/ri";

const Card = ({ icon, title, desc, bgColor }) => {
  return (
    <div className="p-4 gap-x-6 flex white-glassmorphism hover:shadow-xl cursor-pointer items-center justify-center p-6">
      <div
        className={`w-[70px] h-[46px] rounded-full flex justify-center items-center ${bgColor}`}
      >
        {icon}
      </div>
      <div>
        <span className="text-white text-2xl">{title}</span>
        <p className="text-white text-base">{desc}</p>
      </div>
    </div>
  );
};
const Services = () => (
  <div className="md:p-20 py-12 px-4  w-full gradient-bg-services flex flex-col lg:flex-row justify-center md:justify-between items-center">
    <div className="flex-1 flex-start">
      <h1 className="text-gradient text-5xl text-center lg:text-left">
        Services that we
        <br />
        continue to improve
      </h1>
      <p className="text-white text-base text-center lg:text-left mt-6">
        The best choice for buying and selling your crypto assets, with the
        various super friendly services we offer
      </p>
    </div>
    <div className="flex-1 gap-y-6 flex flex-col mt-10 lg:mt-0">
      {[
        {
          bgColor: "bg-[#2952E3]",
          icon: <BsShieldFillCheck fontSize={24} className="text-white " />,
          title: "Security gurantee",
          desc: "Security is guranteed. We always maintain privacy and maintain the quality of our products",
        },
        {
          bgColor: "bg-[#8945F8]",
          icon: <BiSearchAlt fontSize={24} className="text-white " />,
          title: "Best exchange rates",
          desc: "Security is guranteed. We always maintain privacy and maintain the quality of our products",
        },
        {
          bgColor: "bg-[#F84550]",
          icon: <RiHeart2Fill fontSize={24} className="text-white " />,
          title: "Fastest transactions",
          desc: "Security is guranteed. We always maintain privacy and maintain the quality of our products",
        },
      ].map((item, i) => (
        <Card
          key={i}
          title={item.title}
          icon={item.icon}
          desc={item.desc}
          bgColor={item.bgColor}
        />
      ))}
    </div>
  </div>
);

export default Services;
