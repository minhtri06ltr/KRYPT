import Introduce from "./components/Introduce";
import Navbar from "./components/Navbar";
import Transaction from "./components/Transaction";
import Footer from "./components/Footer";
import Services from "./components/Services";
import { useState, useEffect } from "react";
import { getAllTransactions } from "./redux/transaction";

const { ethereum } = window;
const App = () => {
  const [currentAccount, setCurrentAccount] = useState("");
  const [transactions, setTransactions] = useState([]);
  const isWalletConnected = async () => {
    try {
      if (!ethereum) {
        return alert("Please add metamask extension to continue");
      }
      const accounts = await ethereum.request({ method: "eth_accounts" });
      if (accounts.length) {
        setCurrentAccount(accounts[0]); //set everytime render
        getAllTransactions(setTransactions);
      } else {
        console.log("No accounts found");
      }
    } catch (error) {
      console.log(error);
      throw new Error("No ethereum object.");
    }
  };
  const connectWallet = async () => {
    try {
      if (!ethereum) return alert("Please add metamask extension to continue");
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      setCurrentAccount(accounts[0]);
      window.location.reload();
    } catch (error) {
      console.log(error);
      throw new Error("No ethereum object.");
    }
  };
  useEffect(() => {
    isWalletConnected();
  }, []);
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar />
        <Introduce
          connectWallet={connectWallet}
          currentAccount={currentAccount}
        />
      </div>
      <Services />
      <Transaction
        transactions={transactions}
        currentAccount={currentAccount}
      />
      <Footer />
    </div>
  );
};

export default App;
