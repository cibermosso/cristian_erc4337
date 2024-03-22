const { ethers } = require('hardhat');
const { randomBytes } = require('crypto');


  async function main() {

    //GENERO SALT CON EMAIL Y CAMPO LIBRE

    //to-do revisar bytes funcion generateHash
    async function generateHash(email, salt) {
        // Calcular el hash keccak256 directamente
        const hash = ethers.keccak256(ethers.toUtf8Bytes(email + salt));
        return hash;
    }

    const hash = await generateHash("test077712777", "de444Salt");
    console.log('Your hash:', hash);        //

    AF_ADDRESS = "0x0b8295356eaE6bD9A0F41968ccd74F03097479B0";

    const signers = ["0x39af2e932f3af20f286f85026881a895ff717a61","0xCf2c43019560D5c24D4FffCd8Cf25ED8EeAD1C8c"]

    const WalletFactoryInstance = await ethers.getContractAt('WalletFactory', AF_ADDRESS);
   
    //const salt = "0x" + randomBytes(32).toString('hex');  
    // Obtiene la instancia del contrato
    const walletInstance = await WalletFactoryInstance.createAccount(signers, hash);
  
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

 