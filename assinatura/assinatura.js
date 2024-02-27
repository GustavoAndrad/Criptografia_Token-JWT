import {generateKeyPairSync, createSign, createVerify} from 'crypto'

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

let dados = "Essa string vai ser assinada!"

//Assinatura

const assinador = createSign('rsa-sha256');
assinador.update(dados);
const assinatura = assinador.sign(privateKey, 'hex');

console.log(`Assinatura: ${assinatura}`);

//Intermediário
dados += 'Mudanças no arquivo';


// Envio -- documento, assinatura e chave publica

const verificador = createVerify('rsa-sha256');
verificador.update(dados)

const ehVerificado = verificador.verify(publicKey, assinatura, 'hex');
console.log(ehVerificado);