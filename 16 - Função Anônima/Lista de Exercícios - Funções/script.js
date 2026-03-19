console.log("1 - Triplo de um Número;\n")
let triplo = function(numero){
    return numero * 3
}
let num1 = Number(prompt("Digite um número:"))
console.log("Triplo:", triplo(num1))

console.log("\n")

console.log("2 - Multiplicação de Dois Números;\n")
let multiplicar = function(a, b){
    return a * b
}
let num2 = Number(prompt("Digite o primeiro número:"))
let num3 = Number(prompt("Digite o segundo número:"))
console.log("Resultado:", multiplicar(num2, num3))

console.log("\n")

console.log("3 - Metade de um Número;\n")
let metade = function(numero){
    return numero / 2
}
let num4 = Number(prompt("Digite um número:"))
console.log("Metade:", metade(num4))

console.log("\n")

console.log("4 - Sucessor;\n")
let sucessor = function(numero){
    return numero + 1
}
let num5 = Number(prompt("Digite um número:"))
console.log("Sucessor:", sucessor(num5))

console.log("\n")

console.log("5 - Maior Número;\n")
let maiorNumero = function(a, b){
    if(a > b){
        return a
    } else {
        return b
    }
}
let num6 = Number(prompt("Digite o primeiro número:"))
let num7 = Number(prompt("Digite o segundo número:"))
console.log("Maior número:", maiorNumero(num6, num7))

console.log("\n")

console.log("6 - Positivo ou Negativo;\n")
let verificarNumero = function(numero){
    if(numero > 0){
        return "Positivo"
    } else if(numero < 0){
        return "Negativo"
    } else {
        return "Zero"
    }
}
let num8 = Number(prompt("Digite um número:"))
console.log(verificarNumero(num8))

console.log("\n")

console.log("7 - Par ou Ímpar;\n")
let parImpar = function(numero){
    if(numero % 2 == 0){
        return "Par"
    } else {
        return "Ímpar"
    }
}
let num9 = Number(prompt("Digite um número:"))
console.log(parImpar(num9))

console.log("\n")

console.log("8 - Média de Três Números;\n")
let media = function(a, b, c){
    return (a + b + c) / 3
}
let n1 = Number(prompt("Digite a primeira nota:"))
let n2 = Number(prompt("Digite a segunda nota:"))
let n3 = Number(prompt("Digite a terceira nota:"))
console.log("Média:", media(n1, n2, n3))

console.log("\n")

console.log("9 - Calcular Desconto;\n")
let calcularDesconto = function(valor){
    return valor * 0.85
}
let valor = Number(prompt("Digite o valor do produto:"))
console.log("Valor com desconto:", calcularDesconto(valor))

console.log("\n")

console.log("10 - Verificar Aprovação;\n")
let verificarAprovacao = function(nota1, nota2){
    let media = (nota1 + nota2) / 2
    
    if(media >= 7){
        return "Aprovado"
    } else if(media >= 5){
        return "Recuperação"
    } else {
        return "Reprovado"
    }
}

let nota1 = Number(prompt("Digite a primeira nota:"))
let nota2 = Number(prompt("Digite a segunda nota:"))
console.log(verificarAprovacao(nota1, nota2))