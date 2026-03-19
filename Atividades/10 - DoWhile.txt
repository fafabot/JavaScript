console.log("1 - Contador simples\n")
let a = 1
do {
    console.log(a)
    a++
} while (a <= 20)

console.log("\n")

console.log("2 - Resposta do usuário\n")
let continuar
do {
    continuar = prompt("Deseja continuar? (s/n)")
} while (continuar === "s")
console.log("Programa encerrado.")

console.log("\n")

console.log("3 - Sequência numérica definida pelo usuário\n")
let final = Number(prompt("Digite o número final da sequência:"))
let b = 1
do {
    console.log(b)
    b++
} while (b <= final)

console.log("\n")

console.log("4 - Contador com salto\n")
let c = 1
do {
    console.log(c)
    c += 2
} while (c <= 31)
console.log("\n")

console.log("5 - Classificação numérica\n")
let d = 1
let numero
do {
    numero = Number(prompt("Digite um número:"))
    if (numero > 0) {
        console.log("NÚMERO POSITIVO")
    } else if (numero < 0) {
        console.log("NÚMERO NEGATIVO")
    } else {
        console.log("O NÚMERO É ZERO")
    }
    d++
} while (d <= 5)

console.log("\n")

console.log("6 - Operações matemáticas\n")
let opcao
do {
    opcao = prompt("Deseja fazer uma conta? (s/n)")
    if (opcao === "s") {
        let n1 = Number(prompt("Digite o primeiro número:"))
        let n2 = Number(prompt("Digite o segundo número:"))
        console.log("Soma:", n1 + n2)
    }
} while (opcao === "s")
console.log("Programa encerrado.")

console.log("\n")

console.log("7 - Repetição de mensagem\n")
let e = 1
do {
    console.log("Estudando JavaScript")
    e++
} while (e <= 10)

console.log("\n")

console.log("8 - Validação de número positivo\n")
let positivo
do {
    positivo = Number(prompt("Digite um número positivo:"))
} while (positivo <= 0)
console.log("Valor válido!")

console.log("\n")

console.log("9 - Controle de tentativas\n")
let senha
do {
    senha = prompt("Digite a senha:")
} while (senha !== "senai2026")
console.log("Acesso liberado.")

console.log("\n")

console.log("10 - Soma de números\n")
let total = 0
let resposta
do {
    let valor = Number(prompt("Digite um número inteiro:"))
    total += valor
    resposta = prompt("Deseja continuar? (s/n)")
} while (resposta === "s")
console.log("Total da soma:", total)

console.log("\n")

console.log("fim")