import Loader from "./Loader";
import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";
import { useState } from "react";
import { sendTransaction } from "../redux/transaction";

const Input = ({ type, name, placeHolder, handleForm }) => {
  return (
    <input
      step="0.0001"
      type={type}
      onChange={handleForm}
      name={name}
      required
      placeholder={placeHolder}
      className="mb-4 blue-glassmorphism text-center rounded-sm border-none text-white p-2 outline-none white-glassmorphism"
    />
  );
};
const Introduce = ({ connectWallet, currentAccount }) => {
  const [form, setForm] = useState({
    addressTo: "",
    amount: "",
    keyWord: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const handleForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.addressTo || !form.amount || !form.message || !form.keyWord) {
      return alert("Please check input again");
    }
    sendTransaction(form, currentAccount, setIsLoading);
  };
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
          {!currentAccount && (
            <button
              type="button"
              onClick={connectWallet}
              className="flex px-4 items-center justify-center neon-button my-5 cursor-pointer font-bold text-base p-4 rounded-full"
            >
              <AiFillPlayCircle className="mr-2" fontSize={20} />
              <p className="text-base font-semibold">Connect Wallet</p>
            </button>
          )}

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
                <Input
                  handleForm={handleForm}
                  type="text"
                  name="addressTo"
                  placeHolder="Address To"
                />
                <Input
                  handleForm={handleForm}
                  type="number"
                  name="amount"
                  placeHolder="Amount (ETH)"
                />
                <Input
                  handleForm={handleForm}
                  type="text"
                  name="keyWord"
                  placeHolder="Keyword (GIF)"
                />
                <Input
                  handleForm={handleForm}
                  type="text"
                  name="message"
                  placeHolder="Message"
                />
              </div>
              <button
                onClick={handleSubmit}
                className="rounded-full w-full p-2 mt-6 text-white border border-solid font-semibold border-[#3d4f7c] hover:bg-[#3d4f7c]"
              >
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
