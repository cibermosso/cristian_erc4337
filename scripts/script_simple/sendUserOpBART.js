const hre = require("hardhat");
const { randomBytes, sign } = require('crypto');
const { ethers } = require('hardhat');
const { Utils } = require("alchemy-sdk");
//const ethers = require('ethers');
//const { utils } = ethers;

//import { walletFactoryContract } from "./getContracts";




async function main(){
const EP_ADDRESS = "0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789";
//const FACTORY_ADDRESS ="0x0b8295356eaE6bD9A0F41968ccd74F03097479B0";
const PAYMASTER = "0x5033ac6A5a6431a2dc0cd84EE5db692801c925d9";


const entryPoint = await hre.ethers.getContractAt("EntryPoint", EP_ADDRESS);
const sender ="0x92EDa8f6390521d2d01E220a4fb894221eC48685";  //smart contract wallet

const signingKey1 = "f967b8292272abf5eb33cc532a42272746741b775d2d1209bd57fe8a963863bd";
const signer1 = new ethers.Wallet(signingKey1);
const signingKey11 = signer1.signingKey;
console.log("Signer1:", signer1)

const signingKey2 = "ef5799f91c478e7718f7e65fcd91566ca0d5eaa0e8ad460c9e63fffbafd4ba34";
const signer2 = new ethers.Wallet(signingKey2);
console.log("Signer2:", signer2)


const SmartWallet = await ethers.getContractFactory('Wallet');
const nonce = await entryPoint.getNonce(sender,0)

const userOp ={
  sender,//smart account address
  nonce: "0x" + (await entryPoint.getNonce(sender, 0)).toString(16),
  initCode:"0x",
  callData: SmartWallet.interface.encodeFunctionData("execute",["0x4D8eC54395e91D4528F0f9BC11960a8779575c89", hre.ethers.parseEther("1.87"),"0x"]),
  callGasLimit: 400_000,
  verificationGasLimit: 400_000,
  preVerificationGas: 100_000,
  maxFeePerGas: hre.ethers.parseUnits("10", "gwei"),
  maxPriorityFeePerGas:hre.ethers.parseUnits("5", "gwei"),
  paymasterAndData:PAYMASTER,
  signature:"0xfffffffffffffffffffffffffffffff0000000000000000000000000000000007aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa1c", //signer0.signMessage(hre.ethers.getBytes(hre.ethers.id("wee"))),

};


const userOpHash = await entryPoint.getUserOpHash(userOp);
console.log("UserOphash",userOpHash)

const signature1 = await signer1.signMessage(hre.ethers.getBytes(userOpHash));
const signature2 = await signer2.signMessage(hre.ethers.getBytes(userOpHash));

const signaturesArray = [signature1,signature2];
const AbiCoder = new ethers.AbiCoder()
const encodedSignatures = AbiCoder.encode(["bytes[]"], [signaturesArray]);

userOp.signature = encodedSignatures;


const tx = await entryPoint.handleOps([userOp],signer1);
const recepeit = await tx.wait();
console.log(recepeit);
console.log("Transaction Hash",recepeit.hash);

}

  // Ejecuta la función main si el script se ejecuta directamente
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
  