import { ethers } from "ethers";
import { contractAddress, contractABI } from "../utils/constants";

const { ethereum } = window;

export const getEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const transactionContract = new ethers.Contract(
    contractAddress,
    contractABI,
    signer
  );
};
export const sendTransaction = async (form, currentAccount, setIsLoading) => {
  try {
    if (!ethereum) {
      return alert("Please add metamask extension to continue");
    }
    //get contract function
    const transactionContract = getEthereumContract();
    const parseAmount = ethers.utils.parseEther(form.amount);
    console.log(ethers.utils.isAddress(form.addressTo));
    console.log(transactionContract);
    // await ethereum.request({
    //   method: "eth_sendTransaction",
    //   params: [
    //     {
    //       from: currentAccount,
    //       to: form.addressTo,
    //       gas: "0x5208", //2100 Gwei
    //       value: parseAmount._hex,
    //     },
    //   ],
    // });
    //store transaction
    const transactionHash = await transactionContract.addToBlockchain(
      form.addressTo,
      parseAmount,
      form.message,
      form.keyWord
    );
    setIsLoading(true);
    console.log(`Loading - ${transactionHash.hash}`);
    await transactionHash.wait();
    setIsLoading(false);
    console.log(`Success - ${transactionHash.hash}`);
  } catch (error) {
    console.log(error);
    throw new Error("No ethereum object.");
  }
};
