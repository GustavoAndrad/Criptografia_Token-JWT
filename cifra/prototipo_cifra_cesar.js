//PROTOTIPO PARA COMPREENDER O FUNCIONAMENTO
//NÃO FUNCIONA EM ABSOLUTAMENTE TODOS OS CASOS DE MOVIMENTAÇÃO

function cifraDeCesar(mensagem, movimentos){
    const mensagemCifrada = mensagem.split('').map(caractere =>{
        const codigoCaractere = caractere.charCodeAt(0);
        return String.fromCharCode(codigoCaractere + movimentos)
    });
    
    return mensagemCifrada.join('')
}

function descifraDeCesar(mensagem, movimentos){
    const mensagemCifrada = mensagem.split('').map(caractere =>{
        const codigoCaractere = caractere.charCodeAt(0);
        return String.fromCharCode(codigoCaractere - movimentos)
    });
    
    return mensagemCifrada.join('')
}

const mensagemSecreta = "minhamensagemsecreta";
console.log(mensagemSecreta);

const mensagemCifrada = cifraDeCesar(mensagemSecreta, 3)
console.log(mensagemCifrada)

const mensagemDescifrada = descifraDeCesar(mensagemCifrada, 3)
console.log(mensagemDescifrada)