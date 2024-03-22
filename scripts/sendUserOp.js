const hre = require("hardhat");
const { randomBytes } = require('crypto');
//import { walletFactoryContract } from "./getContracts";




async function main(){
const EP_ADDRESS = "0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789";
const FACTORY_ADDRESS ="0x0b8295356eaE6bD9A0F41968ccd74F03097479B0";
const PAYMASTER = "0x5033ac6A5a6431a2dc0cd84EE5db692801c925d9";
//const simpleAccountFactoryABI =  "[{\"type\":\"constructor\",\"payable\":false,\"inputs\":[{\"type\":\"address\",\"name\":\"_entryPoint\"}]},{\"type\":\"function\",\"name\":\"accountImplementation\",\"constant\":true,\"stateMutability\":\"view\",\"payable\":false,\"inputs\":[],\"outputs\":[{\"type\":\"address\"}]},{\"type\":\"function\",\"name\":\"createAccount\",\"constant\":false,\"payable\":false,\"inputs\":[{\"type\":\"address\",\"name\":\"owner\"},{\"type\":\"uint256\",\"name\":\"salt\"}],\"outputs\":[{\"type\":\"address\",\"name\":\"ret\"}]},{\"type\":\"function\",\"name\":\"getAddress\",\"constant\":true,\"stateMutability\":\"view\",\"payable\":false,\"inputs\":[{\"type\":\"address\",\"name\":\"owner\"},{\"type\":\"uint256\",\"name\":\"salt\"}],\"outputs\":[{\"type\":\"address\"}]}]"// ABI del contrato


const entryPoint = await hre.ethers.getContractAt("EntryPoint", EP_ADDRESS);
const sender ="0x92EDa8f6390521d2d01E220a4fb894221eC48685";  //smart contract wallet


const signingKey1 = "ef5799f91c478e7718f7e65fcd91566ca0d5eaa0e8ad460c9e63fffbafd4ba34";
const signer1 = new ethers.Wallet(signingKey1);
console.log("Signer1:", signer1)

const signingKey2 = "f967b8292272abf5eb33cc532a42272746741b775d2d1209bd57fe8a963863bd";
const signer2 = new ethers.Wallet(signingKey2);
console.log("Signer2:", signer2)


const SmartWallet = await ethers.getContractFactory('Wallet');
const nonce = await entryPoint.getNonce(sender,0)

const userOp ={
    sender,//smart account address
    nonce: "0x" + (await entryPoint.getNonce(sender, 0)).toString(16),
    initCode:"0x",
    callData: SmartWallet.interface.encodeFunctionData("execute",["0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC", hre.ethers.parseEther("0.111"),"0x"]),
    paymasterAndData:PAYMASTER,
    signature:"0x", //signer0.signMessage(hre.ethers.getBytes(hre.ethers.id("wee"))),

 };

 const { preVerificationGas, verificationGasLimit, callGasLimit } =
 await ethers.provider.send("eth_estimateUserOperationGas", [
   userOp,
   EP_ADDRESS,
 ]);

userOp.preVerificationGas = preVerificationGas;
userOp.verificationGasLimit = verificationGasLimit;
userOp.callGasLimit = callGasLimit;


const { maxFeePerGas } = await ethers.provider.getFeeData();
userOp.maxFeePerGas = "0x" + maxFeePerGas.toString(16);

const maxPriorityFeePerGas = await ethers.provider.send(
 "rundler_maxPriorityFeePerGas"
);
userOp.maxPriorityFeePerGas = maxPriorityFeePerGas;

console.log("User Operation: ",userOp);


//const userOpHash = await entryPoint.getUserOpHash(userOp);
//console.log("UserOphash",userOpHash)


//userOp.signature =  SmartWallet.interface.encodeFunctionData("encodeSignatures", [signingKey1.signMessage(hre.ethers.getBytes(userOpHash)),signingKey2.signMessage(hre.ethers.getBytes(userOpHash)) ]);

/*const opHash = await ethers.provider.send("eth_sendUserOperation", [
    userOp,
    EP_ADDRESS,
  ]);

  setTimeout(async () => {
    const { transactionHash } = await ethers.provider.send(
      "eth_getUserOperationByHash",
      [opHash]
    );

    console.log(transactionHash);
  }, 5000);
  */
}


  // Ejecuta la función main si el script se ejecuta directamente
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
  