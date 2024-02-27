import jwt from 'jsonwebtoken'

const chaveSecreta = "chaveSuperSecreta"

const token = jwt.sign(
    {
        campo1: "informação1",
        campo2: "informação2"
    }, chaveSecreta
)

console.log(token)

const tokenDecodificado = jwt.verify(token, chaveSecreta);
console.log(tokenDecodificado);