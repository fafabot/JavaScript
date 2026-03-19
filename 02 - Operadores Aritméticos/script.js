// let numero1 = 5
// let numero2 = 7

// let soma = numero1 + numero2
// let subtracao = numero1 - numero2
// let divisao = numero1 / numero2
// let multiplicacao = numero1 * numero2
// let modulo = numero1 % numero2

// console.log (soma)
// console.log (subtracao)
// console.log (multiplicacao)
// console.log (divisao)
// console.log (modulo)

// let preco = prompt("Qual o valor do produto?")
// let quantidade = Number(prompt ("Qual a quantidade do produto?"))
// let total = preco * quantidade
// console.log("O total a pagar é: R$" + total)
//Sempre que a entrada for um número, coloque o Number antes do prompt

/* Um grupo de amigos foi a um restaurante, e no final decidiram dividir a conta,
faça um programa que pergunte a quantidade de amigos e o total da conta e mostre quanto cada um deve pagar */

let quant_amg = Number(prompt ("Qual a quantidade de amigos"))
let conta_amg = Number(prompt("Qual o total da conta?"))
let conta_amg_div = conta_amg / quant_amg
console.log("O total a cada um pagar é:" + conta_amg_div)

/* Três amigos decidiram juntos comprar uma pizza, cada amigo irá contribuir com uma quantidade de valor.
Faça um programa que receba o valor que cada amigo contribuiu e mostre quantos eles tem juntos */

let amg1 = Number(prompt ("Quanto o amigo número um irá pagar?"))
let amg2 = Number(prompt ("Quanto o amigo número dois irá pagar?"))
let amg3 = Number(prompt ("Quanto o amigo número três irá pagar?"))
let total_amgs = amg1+amg2+amg3
console.log("O total de dinheiro contribuido entre os alunos é: R$" + total_amgs)

//Incremento e Decremento
let contador = 0
contador++
console.log (contador)
contador--
console.log(contador)
contador+=5
console.log(contador)
contador-=3
console.log(contador)