/*const mensagem = "z"
console.log(mensagem.charCodeAt(0)) // 65*/

/*console.log(String.fromCharCode(65, 66)); // A/ B*/

//a a b = 97 a 122
//A a Z = 65 a 90

//(codigoletraASC - codPrimeiraLetra + deloc) % tamAlfabeto + codPrimeiraLetra
//(codigoletraASC - codUltimaLetra - deloc) % tamAlfabeto + codUltimaLetra
//FAZ A "VOLTA"


const mensagem = "ZUMBA"

function cifraCesar(mensagem, deslocamento){
    let resultado = ""
    for(let i = 0; i<mensagem.length;i++){
        let codigoLetra = mensagem.charCodeAt(i)
        if(codigoLetra >= 97 || codigoLetra >= 122){
            let letraMovimentada = (codigoLetra - 97 + deslocamento) % 26 + 97
            resultado += String.fromCharCode(letraMovimentada)
        } else if(codigoLetra >=65 || codigoLetra >=90){
            let letraMovimentada = (codigoLetra - 65 + deslocamento) % 26 + 65
            resultado += String.fromCharCode(letraMovimentada)
        } else{
            resultado += String.fromCharCode(codigoLetra)
        }
    }
    return resultado;
}

function descifraCesar(mensagem, deslocamento){
    let resultado = ""
    for(let i = 0; i<mensagem.length;i++){
        let codigoLetra = mensagem.charCodeAt(i)
        if(codigoLetra >= 97 && codigoLetra <= 122){
            let letraMovimentada = (codigoLetra - 122 - deslocamento) % 26 + 122
            resultado += String.fromCharCode(letraMovimentada)
        } else if(codigoLetra >=65 && codigoLetra <=90){
            let letraMovimentada = (codigoLetra - 90 - deslocamento) % 26 + 90
            resultado += String.fromCharCode(letraMovimentada)
        } else{
            resultado += String.fromCharCode(codigoLetra)
        }
    }
    return resultado;
}

console.log(mensagem)
const mensagemCifrada = cifraCesar(mensagem, 6)
console.log(mensagemCifrada)
const mensagemDescifrada = descifraCesar(mensagemCifrada, 6)
console.log(mensagemDescifrada)