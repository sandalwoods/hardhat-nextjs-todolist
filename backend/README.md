# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.js
```

```
yarn hardhat console --network localhost
const todo = await ethers.getContractFactory("ToDoList")
const todolist = await todo.attach("0x5FbDB2315678afecb367f032d93F642f64180aa3") //attach to deployed contract
await todolist.getAllTasks()
```