import { createCipheriv, randomBytes, createDecipheriv } from "crypto";

const mensagem = 'Demonstração de mensagem';
const chave = randomBytes(32);
const vetorInicializacao = randomBytes(16)
// dificulta a descoberta da chave por força bruta

const cifra = createCipheriv('aes256', chave, vetorInicializacao)
const mensagemCifrada = cifra.update(mensagem, 'utf-8', 'hex') 
    + cifra.final('hex');

console.log(mensagemCifrada);

// Transmissao ----- chave, vi, mnesagem

// Decifrar

const decifra = createDecipheriv('aes256', chave, vetorInicializacao);

const mensagemDecifrada = decifra.update(mensagemCifrada, 'hex', 'utf-8') 
    + decifra.final('utf-8');
console.log(`Decifrado: ${mensagemDecifrada.toString('utf-8')}`);
