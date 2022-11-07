import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useState, useEffect } from "react";
import ConnectWalletButton from "../components/ConnectWalletButton";
import WrongNetWorkMessage from "../components/WrongNetworkMessage";
import TodoList from "../components/TodoList";
import toDoListABI from "../../backend/deployments/localhost/ToDoList.json";
import { ethers } from "ethers";
import { toDoListAddress } from "../constants";

export default function Home() {
  const [correctNetwork, setCorrectNetwork] = useState(false);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [currentAccount, setCurrentAccount] = useState("");
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    connectWallet();
    getMyTasks();
  }, []);

  // Calls Metamask to connect wallet on clicking Connect Wallet button
  const connectWallet = async () => {
    try {
      const { ethereum } = window;
      if (!ethereum) {
        console.log("Mestamask not detected...Pls install it.");
        alert("Mestamask not detected...Pls install it.");
        return;
      }
      setCorrectNetwork(true);
      let accounts = await ethereum.request({ method: "eth_requestAccounts" });
      console.log("Found account", accounts[0]);
      setIsUserLoggedIn(true);
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error);
    }
  };

  // Just gets all the tasks from the contract
  const getMyTasks = async () => {
    try {
      const { ethereum } = window;
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const ToDoListContract = new ethers.Contract(
          toDoListAddress,
          toDoListABI.abi,
          signer
        );
        let allTasks = await ToDoListContract.getMyTasks();
        setTasks(allTasks);
      } else {
        console.log("ethereum object does not exist!");
      }
    } catch (err) {
      console.log(err);
    }
  };

  // Add tasks from front-end onto the blockchain
  const addTask = async (e) => {
    e.preventDefault(); //avoid refresh

    const task = {
      taskText: input,
      isDeleted: false,
    };

    try {
      const { ethereum } = window;
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const ToDoListContract = new ethers.Contract(
          toDoListAddress,
          toDoListABI.abi,
          signer
        );
        ToDoListContract.addTask(task.taskText, task.isDeleted)
          .then((res) => {
            setTasks([...tasks, task]);
            console.log("Added task");
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        console.log("ethereum object does not exist!");
      }
    } catch (err) {
      console.log(err);
    }
  };

  // Remove tasks from front-end by filtering it out on our "back-end" / blockchain smart contract
  const deleteTask = (key) => async () => {
    try {
      const { ethereum } = window;
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const ToDoListContract = new ethers.Contract(
          toDoListAddress,
          toDoListABI.abi,
          signer
        );
        const deleteTaskTx = await ToDoListContract.deleteTask(key, true);
        console.log("successfully deleted: ", deleteTaskTx);

        let allTasks = await ToDoListContract.getMyTasks();
        setTasks(allTasks);
      } else {
        console.log("ethereum object does not exist!");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="bg-[#97b5fe] h-screen w-screen flex justify-center py-6">
      {!isUserLoggedIn ? (
        <ConnectWalletButton connectWallet={connectWallet} />
      ) : correctNetwork ? (
        <TodoList {...{ input, setInput, addTask, tasks, deleteTask }} />
      ) : (
        <WrongNetWorkMessage />
      )}
    </div>
  );
}
