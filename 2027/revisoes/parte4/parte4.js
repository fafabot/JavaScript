console.log("------------- FUNÇÕES ANÔNIMAS -------------")
console.log("1- Mensagem")
let mensagem = function(msg) {
    console.log(msg)
}
let msg = prompt("Informe uma mensagem:")
mensagem(msg)
console.log("=======")

console.log("2- Dobro")
let dobro = function(num) {
    console.log("Dobro:",num * 2)
}
let num = Number(prompt("Informe um número e descubra seu dobro:"))
dobro(num)
console.log("=======")

console.log("3 e 4 - Média e Situação")
let calcularMedia = function(nota1, nota2, nota3) {
    return (nota1 + nota2 + nota3) / 3
}

let verificarSituacao = function(media) {
    if(media >= 7) {
        return "Aprovado"
    } else if (media <= 5) {
        return "Recuperação"
    } else {
        return "Reprovado"
    }
}
let nota1 = Number(prompt("Informe a primeira nota:"))
let nota2 = Number(prompt("Informe a segunda nota:"))
let nota3 = Number(prompt("Informe a terceira nota:"))
let media = calcularMedia(nota1, nota2, nota3)
console.log("A média é:", media)
console.log("A sua situação é:", verificarSituacao(media))
console.log("=======")

console.log("5 - Calculadora")
let calculadora = function(num1, num2, num3, num4, num5, num6, num7, num8) {
    console.log("Soma: (Primeiro + Segundo)", num1 + num2)
    console.log("Subtração: (Terceiro - Quarto)", num3 - num4)
    console.log("Multiplicação: (Quinto * Sexto)", num5 * num6)
    console.log("Divisão (Sétimo / Oitavo):", num7 / num8)
}
let num1 = Number(prompt("Informe o primeiro número:"))
let num2 = Number(prompt("Informe o segundo número:"))
let num3 = Number(prompt("Informe o terceiro número:"))
let num4 = Number(prompt("Informe o quarto número:"))
let num5 = Number(prompt("Informe o quinto número:"))
let num6 = Number(prompt("Informe o sexto número:"))
let num7 = Number(prompt("Informe o sétimo número:"))
let num8 = Number(prompt("Informe o oitavo número:"))
calculadora(num1, num2, num3, num4, num5, num6, num7, num8)
console.log("=======")

console.log("------------- ARROW FUNCTION -------------")
console.log("1- Multiplicação")
let multiplicar = (n1, n2) => {
    console.log("Multiplicação dos valores:", n1 * n2)
}
let n11 = Number(prompt("Informe o primeiro valor:"))
let n22 = Number(prompt("Informe o segundo valor:"))
multiplicar(n11,n22)
console.log("=======")

console.log("2- Triplo")
let triplo = (n3) => {
    console.log("Triplo do valor:",n3 * 3)
}
let triplo1 = Number(prompt("Digite um número e descubra seu triplo:"))
triplo(triplo1)
console.log("=======")

console.log("3- Par ou Ímpar")
let parOuImpar = (n4) => {
    if(n4 % 2 == 0) {
        console.log("O número é par")
    } else {
        console.log("O número é ímpar")
    }
}
let n41 = Number(prompt("Informe um número e veja se é par ou ímpar:"))
parOuImpar(n41)
console.log("=======")

console.log("4- Maior Número") 
let maiorNumero = (n5, n6) => {
    if(n5 > n6) {
        console.log("O primeiro número é maior.")
    } else if (n5 < n6) {
        console.log("O segundo número é maior")
    } else {
        console.log("Os números são iguais")
    }
}
let n51 = Number(prompt("Informe o primeiro número para ver qual é o maior:"))
let n61 = Number(prompt("Informe o segundo número para ver qual é o maior:"))
maiorNumero(n51, n61)
console.log("=======")

console.log("5- Positivo, Negativo ou Zero")
let verificarNumero = (n7) => {
    if(n7 > 0) {
        console.log("Positivo")
    } else if (n7 < 0) {
        console.log("Negativo")
    } else {
        console.log("Zero")
    }
}
let n71 = Number(prompt("Informe um número e descubra se ele é Positivo, Negativo ou Zero:"))
verificarNumero(n71)
console.log("=======")

// DOM
let texto = document.getElementById("texto")
function trocando() {
    if (texto.innerText == "Texto alterado com JS!") {
        texto.innerText = "Texto original"
    } else {
        texto.innerText = "Texto alterado com JS!"
    }
}

let divs = document.getElementById("divs")
function corDeFundo() {
    if (divs.style.backgroundColor == "blue") {
        divs.style.backgroundColor = "white"
    } else {
        divs.style.backgroundColor = "blue"
    }
}

let titulo = document.getElementById("titulo")
let texto2 = document.getElementById("texto2")
function alterar() {
    if (titulo.style.color == "green" &&
        titulo.style.fontSize == "35px" &&
        texto2.style.color == "blue" &&
        texto2.style.fontSize == "20px") {
        titulo.style.color = "black"
        titulo.style.fontSize = "24px"
        texto2.style.color = "black"
        texto2.style.fontSize = "16px"
    } else {
        titulo.style.color = "green"
        titulo.style.fontSize = "35px"
        texto2.style.color = "blue"
        texto2.style.fontSize = "20px"
    }
}

let ola = document.getElementById("ola")
function esconder() {
    if (ola.style.display == "none") {
        ola.style.display = "block"
    } else {
        ola.style.display = "none"
    }
}

let alterado = document.getElementById("alterado")
function alterando() {
    if (alterado.innerText == "Esse texto foi alterado") {
        alterado.innerText = "Esse é o texto que será alterado"
    } else {
        alterado.innerText = "Esse texto foi alterado"
    }
}

let imagem = document.getElementById("imagem")
function arredondar() {
    if (imagem.style.borderRadius == "50px") {
        imagem.style.borderRadius = "0px"
    } else {
        imagem.style.borderRadius = "50px"
    }
}

let alteracao = document.getElementById("alteracao")
function persona() {
    if (alteracao.style.backgroundColor == "blue" &&
    alteracao.style.borderRadius == "30px" &&
    alteracao.style.border == "5px solid pink" &&
    alteracao.style.color == "white") {
        alteracao.style.backgroundColor = "lightgrey"
        alteracao.style.borderRadius = "2px"
        alteracao.style.border = "1px solid black"
        alteracao.style.color = "black"
    } else {
        alteracao.style.backgroundColor = "blue"
        alteracao.style.borderRadius = "30px"
        alteracao.style.border = "5px solid pink"
        alteracao.style.color = "white"
    }
}