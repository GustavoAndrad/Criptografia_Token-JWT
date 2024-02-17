import { generateKeyPairSync, publicEncrypt, privateDecrypt } from "crypto"

const { privateKey, publicKey } = generateKeyPairSync('rsa', {
    modulusLength: 2048,

    publicKeyEncoding: {
        type: 'spki',
        format: 'pem',
    },
    privateKeyEncoding: {
        type: 'pkcs8',
        format: 'pem',
    },
});

//console.log(publicKey)
//console.log(privateKey)

// Transmitindo dados
const dadosCriptografados = publicEncrypt(publicKey, Buffer.from("Mensagem super secreta"));
console.log(dadosCriptografados.toString('hex'));

//Recebendo dados
const dadisDecifrados = privateDecrypt(privateKey, dadosCriptografados);
console.log(`Decifrado: ${dadisDecifrados.toString('utf-8')}`)