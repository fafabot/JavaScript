console.log("1 - Dobro do Número;\n")
function dobro(numero){
    let total = numero * 2
    return total
}
let numero1 = Number(prompt("Digite um número:"))
let resul = dobro(numero1)
console.log(resul)

console.log("\n")

console.log("2 - Somar dois números;\n")
function somar(num1, num2) {
    let soma = num1 + num2
    return soma
}
let num1 = Number(prompt("Informe o primeiro número: "))
let num2 = Number(prompt("Informe o segundo número: "))
let resultado = somar(num1, num2)
console.log(resultado)

console.log("\n")

console.log("3 - Área de um Quadrado;\n")
function areaQuadrado(num1) {
    let area = num1 * num1
    return area
}
let lado1 = Number(prompt("Informe o lado do quadrado: "))
let area = areaQuadrado(lado1)
console.log(area)

console.log("\n")

console.log("4 - Antecessor de um Número;\n")
function antecessor(num1) {
    let ant = num1 - 1
    return ant
}
let num3 = Number(prompt("Informe um número:"))
let resultadoAntecessor = antecessor(num3)
console.log(resultadoAntecessor)

console.log("\n")

console.log("5 - Tamanho do Texto;\n")
function tamanhoTexto(texto){
    return texto.length
}
let texto = prompt("Digite um texto:")
let tamanho = tamanhoTexto(texto)
console.log(tamanho)

console.log("\n")

console.log("6 - Verificar Maior Número;\n")
function maiorNumero(a, b){
    if(a > b){
        return a
    } else {
        return b
    }
}
let n1 = Number(prompt("Digite o primeiro número:"))
let n2 = Number(prompt("Digite o segundo número:"))
let maior = maiorNumero(n1, n2)
console.log(maior)

console.log("\n")

console.log("7 - Verificar Idade;\n")
function verificarIdade(idade){
    if(idade >= 18){
        return "Maior de idade"
    } else {
        return "Menor de idade"
    }
}
let idade = Number(prompt("Digite sua idade:"))
let verIdade = verificarIdade(idade)
console.log(verIdade)

console.log("\n")

console.log("8 - Número Par ou Ímpar;\n")
function parOuImpar(numero){
    if(numero % 2 == 0){
        return "Par"
    } else {
        return "Ímpar"
    }
}
let numero = Number(prompt("Digite um número:"))
let tipo = parOuImpar(numero)
console.log(tipo)

console.log("\n")

console.log("9 - Calcular Média;\n")
function media(a, b, c){
    let media = (a + b + c) / 3
    return media
}
let m1 = Number(prompt("Digite o primeiro número:"))
let m2 = Number(prompt("Digite o segundo número:"))
let m3 = Number(prompt("Digite o terceiro número:"))
let resultadoMedia = media(m1, m2, m3)
console.log(resultadoMedia)

console.log("\n")

console.log("10 - Desconto em Produto;\n")
function calcularDesconto(preco){
    let desconto = preco * 0.10
    let total = preco - desconto
    return total
}
let preco = Number(prompt("Digite o preço do produto:"))
let precoFinal = calcularDesconto(preco)
console.log(precoFinal)