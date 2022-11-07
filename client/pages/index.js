import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useState, useEffect } from "react";
import ConnectWalletButton  from "../components/ConnectWalletButton";
import WrongNetWorkMessage from "../components/WrongNetworkMessage";

export default function Home() {
  const [correctNetwork, setCorrectNetwork] = useState(false);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [currentAccount, setCurrentAccount] = useState("");

  // Calls Metamask to connect wallet on clicking Connect Wallet button
  const connectWallet = async () => {
    try {
      const { ethereum } = window;
      if (!ethereum) {
        console.log("Mestamask not detected...Pls install it.");
        alert("Mestamask not detected...Pls install it.");
        return;
      }
      // setCorrectNetwork(true);
      let accounts = await ethereum.request({ method: "eth_requestAccounts" });
      console.log("Found account", accounts[0]);
      setIsUserLoggedIn(true);
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    
    <div className="bg-[#97b5fe] h-screen w-screen flex justify-center py-6">
      {!isUserLoggedIn ? (
        <ConnectWalletButton connectWallet={connectWallet} />
      ) : correctNetwork ? (
        // <TodoList {...{ input, setInput, addTask, tasks, deleteTask }} />
        <div>To do</div>
      ) : (
        <WrongNetWorkMessage />
      )}
    </div> 
    // <div>hello</div>
  );
}
