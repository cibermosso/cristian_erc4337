const EP_ADDRESS = "0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789";
const sender ="0x92EDa8f6390521d2d01E220a4fb894221eC48685";  //smart contract wallet

async function main(){

    const entryPoint = await hre.ethers.getContractAt("EntryPoint", EP_ADDRESS);

   // console.log(entryPoint);
    
    const nonce = await entryPoint.getNonce(sender,0)
    console.log(nonce);

}

main();
