const { ethers } = require('hardhat');
const { randomBytes } = require('crypto');


  async function main() {

    //GENERO SALT CON EMAIL Y CAMPO LIBRE

    //to-do revisar bytes funcion generateHash
    /*async function generateHash(email, salt) {
        // Calcular el hash keccak256 directamente
        const hash = ethers.keccak256(ethers.toUtf8Bytes(email + salt));
        return hash;
    }*/

    const salt = "0x414cef7ea4ca0992b0c4600fc9af46de48e4af5aee5153eae1f54e34f90a20ca";
    console.log('Your hash:', salt);        //

    //AF_ADDRESS = "0xBd85995e3120dE5b076746D58c763a2453DC1684";
    AF_ADDRESS = "0x93c2F0278753F0dceeeB9899A41Aa3F68805ddbd";


    const owners = ["0x1D7a11F4559b7bFE52d39D8fd9Ace4fdE089dDC7","0x1D7a11F4559b7bFE52d39D8fd9Ace4fdE089dDC7"]
    const WalletFactoryInstance = await ethers.getContractAt('WalletFactory', AF_ADDRESS);
   
    //const salt = "0x" + randomBytes(32).toString('hex');  
    // Obtiene la instancia del contrato
    const walletInstance = await WalletFactoryInstance.getAddress(owners, salt);
  
    // Llama a la función getAddress desde el contrato WalletFactory con los signers y salt
    // Esto calcula la dirección counterfactual para la billetera sin desplegarla
    console.log("Created SmartWallet ", walletInstance);

  }
  
  // Ejecuta la función main si el script se ejecuta directamente
  if (require.main === module) {
    main()
      .then(() => process.exit(0))
      .catch((error) => {
        console.error(error);
        process.exit(1);
      });
  }

 