import Loader from "./Loader";
import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";

const Input = ({ type, name, placeHolder }) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeHolder}
      className="mb-4 bg-[#1f2541] text-center rounded-sm border-none text-white p-2 outline-none white-glassmorphism bg-transparent"
    />
  );
};
const Introduce = () => {
  const connectWallet = () => {};
  return (
    <div className="flex justify-center items-center w-full">
      <div className="flex lg:flex-row flex-col  justify-between md:p-20 py-12 px-4">
        <div className="flex flex-1 items-center flex-col lg:mr-40">
          <h1 className="text-white  text-7xl text-center text-gradient py-1">
            Send Crypto <br />
            across world
          </h1>
          <p className="font-light text-center text-white mt-5  text-base">
            Explore the crypto world. Buy and sell cryptocurrencies easily on
            KRYPT
          </p>
          <button
            type="button"
            onClick={connectWallet}
            className="flex px-4 items-center justify-center neon-button my-5 cursor-pointer font-bold text-base p-4 rounded-full"
          >
            <AiFillPlayCircle className="mr-2" fontSize={20} />
            <p className="text-base font-semibold">Connect Wallet</p>
          </button>

          <div className="grid sm:grid-cols-3 grid-cols-2 border border-solid border-zinc-500 rounded-2xl overflow-hidden text-white mt-40 w-full">
            {[
              "Reliability",
              "Security",
              "Ethereum",
              "Web 3.0",
              "Lowfees",
              "Blockchain",
            ].map((item, i) => (
              <span
                key={i}
                className="p-6 opacity-70  block text-center border-solid border m-[-1px] border-[#4d4c53]"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
        <div>
          <div className="flex flex-col flex-1  items-center justify-start w-full mt-10 lg:mt-0 ">
            <div className="w-full eth-card sm:w-80 h-[200px] text-white mb-5 mt-1 p-4 rounded-xl flex white-glassmorpsim  justify-between">
              <div className="flex flex-col justify-between">
                <div className="rounded-full h-[60px] w-[60px] flex items-center justify-center border-white border-solid border">
                  <SiEthereum fontSize={32} />
                </div>
                <span className="font-semibold text-4xl font-cardFont ">
                  Ethereum
                </span>
              </div>
              <BsInfoCircle className="cursor-pointer" fontSize={20} />
            </div>
            <div className=" p-6 sm:w-96 w-full rounded-xl blue-glassmorphism">
              <div className="border-b flex flex-col mt-2 border-white border-solid">
                <Input type="text" name="address" placeHolder="Address To" />
                <Input type="number" name="amount" placeHolder="Amount (ETH)" />
                <Input type="text" name="keyWord" placeHolder="Keyword (GIF)" />
                <Input type="text" name="twitter" placeHolder="Twitter (@)" />
                <Input type="text" name="message" placeHolder="Message" />
              </div>
              <button className="rounded-full w-full p-2 mt-6 text-white border border-solid font-semibold border-[#3d4f7c] hover:bg-[#3d4f7c]">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduce;
