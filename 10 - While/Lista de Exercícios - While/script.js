console.log("1 - Contador;\n")
let a=1
while (a<=10) {
    console.log(a)
    a++
}

console.log("\n")

console.log("2 - Tabuada;\n")
let n = Number(prompt("Digite um número:"))
let b=0
while (b<10) {
    b++
    console.log(n+"x"+b+"="+n*b)
}

console.log("\n")

console.log("3 - Contagem Regressiva;\n")
let c=10
while (c>=1) {   
    console.log(c)
    c--
}

console.log("\n")

console.log("4 - Verificação de senha;\n")
let senha = prompt ("Informe a senha:")
while (senha != "12345") {
    senha = prompt ("Senha Incorreta! Informe a senha novamente:")
}
console. log("Acesso liberado")

console.log("\n")

console.log("5 - Contador;\n")
let d=50
while (d<=100) {
    console.log(d)
    d++
}

console.log("\n")

console.log("6 - Sequência numérica;\n")
let e=0
while (e<=100) {
    console.log(e)
    e+=5
}

console.log("\n")

console.log("7 - Mostrando mensagem;\n")
let f=1
while (f<=5) {
    console.log("Eu gosto de JavaScript")
    f++
}

console.log("\n")

console.log("8 - Exibindo o nome;\n")
let nome = prompt("Digite seu nome:")
let quantidade = Number(prompt("Digite um número:"))
let g=1
while (g<=quantidade) {
    console.log(nome)
    g++
}

console.log("\n")

console.log("9 - Validação de Nota;\n")
let nota = Number(prompt("Digite sua nota (0/10):"))
while (nota > 10 || nota < 0) {
    nota = Number(prompt("Valor Inválido. Digite sua nota (0/10):"))
}
console.log("Nota registrada com sucesso!")

console.log("\n")

console.log("10 - Soma de Números;\n")
let soma=0
let num = Number(prompt("Digite um número"))
while (num >= 0) {
    soma=soma+num
    num = Number(prompt("Digite outro número"))
}
console.log("A soma total é: "+soma)


console.log("\n")

console.log("11 - Menu Simples;\n")
let decisao = Number(prompt("1 - Cadastrar\n2 - Consultar\n3 - Sair\nO que deseja fazer?"))
while(decisao!=3){
    decisao = Number(prompt("1 - Cadastrar\n2 - Consultar\n3 - Sair\nO que deseja fazer agora?"))
}
console.log("Você saiu.")

console.log("\n")

console.log("12 - Contador de Pares;\n")
let h=1
while (h<=50) {
    if (h % 2 === 0){
        console.log(h)
    } else{
    }
    h++
}

console.log("\n")

console.log("13 - Login;\n")
let usuario = prompt("Informe o usuário:")
let senha1 = prompt("Informe a senha:")
while (usuario != "admin" || senha1 != "123") {
    usuario = prompt("Login incorreto, informe o usuário novamente:")
    senha1 = prompt("Informe a senha:")
}
console.log("Bem-vindo ao sistema!")

console.log("\n")

console.log("14 - Jogo do Número;\n")
let secreto = Number(prompt("Tente descobrir o número secreto:"))
while (secreto != 10) {
    secreto = Number(prompt("Número errado. Tente novamente:"))
}
console.log("Você acertou!")

console.log("\n")

console.log("fim")