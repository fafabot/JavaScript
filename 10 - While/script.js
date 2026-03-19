let i = 0
let soma = 0
while (i<3) {
    let n = Number(prompt("Digite um número"))
    i++
    soma=soma+n
}
    console.log (soma)


let usuario = prompt ("Informe o usuário:")
let senha = prompt ("Informe a senha:")
while (usuario != "TDS2" || senha != "senai") {
    usuario = prompt ("Login incorreto, informe o usuário novamente:")
    senha = prompt ("Informe a senha:")
}
console. log("Acesso liberado")