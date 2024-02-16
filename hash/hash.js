import { createHash } from 'crypto' //native

function criaHash(senha){
    return createHash('sha256').update(senha).digest('hex')
}

class Usuario{
    constructor(nome, senha){
        this.nome = nome;
        this.hash = criaHash(senha)
    }

    autentica(nome, senha){
        if ((nome=== this.nome) && (this.hash === criaHash(senha))){
            console.log("AUTENTICADO")
            return true
        }

        console.log("Usuário ou senha incorretos");
        return false;
    }
}

const usuario =  new Usuario('gustavo andrade', 'minhaSenha')

//caso de sucesso
usuario.autentica('gustavo andrade', 'minhaSenha')

//caso de falha
usuario.autentica('Gustavo Andrade', 'minhaSenha')
usuario.autentica('gustavo andrade', 'minhasenha123')