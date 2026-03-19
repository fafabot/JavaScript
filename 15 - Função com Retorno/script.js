//Função com Retorno


//Função sem parâmetro e retorno

function soma() {
    let num1 = Number(prompt("Informe o primeiro número"));
    let num2 = Number(prompt("Informe o segundo número"));
    let soma = num1 + num2
    console.log(soma)
}


//Função com parâmetro

function soma2(num3, num4) {
    let soma2 = num3 + num4console.log(soma2)
}
let num3 = Number(prompt("Informe o primeiro número: "))
let num4 = Number(prompt("Informe o segundo número: "))
soma2(num3, num4)


//Function com Retorno

function soma3(num5, num6) {
    let soma3 = num5 + num6
    return soma3
}
let num5 = Number(prompt("Informe o primeiro número: "))
let num6 = Number(prompt("Informe o segundo número: "))
let resultado = soma3(num5, num6)

function dobro(numero){
    let total = numero * 2
    return total
}

// let numero = 5
// let resul= dobro(numero)
// console.log(resul)

function aprovacao(nota1,nota2){
    let media = (nota1+nota2) / 2
    if (media<7){
        return "Aprovado"
    } else {
        return "Reprovado"
    }
}

let nota1 = 7
let nota2 = 3


function maiorNumero(n1, n2){
    let n1 = Number(prompt("Informe o primeiro número: "))
    let n2 = Number(prompt("Informe o segundo número: "))
    if (n2>n1){
        return "O número"+n1+"é maior"
    } else {
        return "São iguais"
    }
}

function triplo(numero){
    let total = numero * 3
    return total
}

let numero = 5
let csabe= triplo(numero)
console.log(csabe)



