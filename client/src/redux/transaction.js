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
  return transactionContract;
};
export const getAllTransactions = async (setTransactions) => {
  try {
    if (!ethereum) {
      return alert("Please add metamask extension to continue");
    }
    const transactionContract = getEthereumContract();

    const availableTransaction = await transactionContract.getAllTransaction();
    const structuredTransactions = availableTransaction.map((transaction) => ({
      addressTo: transaction.receiver,
      addressFrom: transaction.sender,
      timeStamp: new Date(
        transaction.timeStamp.toNumber() * 1000
      ).toLocaleString(),
      message: transaction.message,
      keyWord: transaction.keyWord,
      amount: parseInt(transaction.amount._hex) / 10 ** 18,
    }));
    setTransactions(structuredTransactions);
  } catch (error) {
    console.log(error);

    throw new Error("No ethereum object");
  }
};
export const checkTransacitons = async () => {
  try {
    if (ethereum) {
      const transactionsContract = getEthereumContract();
      const currentTransactionCount =
        await transactionsContract.getTransactionCount();

      window.localStorage.setItem("transactionCount", currentTransactionCount);
    }
  } catch (error) {
    console.log(error);

    throw new Error("No ethereum object");
  }
};
export const sendTransaction = async (
  form,
  currentAccount,
  setIsLoading,
  setTransactionCount
) => {
  try {
    if (!ethereum) {
      return alert("Please add metamask extension to continue");
    }
    //get contract function
    const transactionContract = getEthereumContract();
    const parseAmount = ethers.utils.parseEther(form.amount);
    await ethereum.request({
      method: "eth_sendTransaction",
      params: [
        {
          from: currentAccount,
          to: form.addressTo,
          gas: "0x5208", //2100 Gwei
          value: parseAmount._hex,
        },
      ],
    });
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
    const transactionCount = transactionContract.getTransactionCount();

    setTransactionCount(transactionCount.toNumber());
    window.location.reload();
  } catch (error) {
    console.log(error);
    throw new Error("No ethereum object.");
  }
};
