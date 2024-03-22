const { ethers } = require('ethers');

async function generateHash(email, salt) {
    // Convertir salt a bytes32
    const additionalSalt = ethers.formatBytes32String(salt);

    // Calcular el hash keccak256 directamente
    const hash = ethers.utils.keccak256(ethers.defaultAbiCoder.encode(['string', 'bytes32'], [email, additionalSalt]));
    return hash;
}

// Ejemplo de uso
const email = 'example@example.com';
const salt = 'someSaltValue';
generateHash(email, salt)
    .then(hash => console.log('Hash:', hash))
    .catch(error => console.error('Error:', error));
