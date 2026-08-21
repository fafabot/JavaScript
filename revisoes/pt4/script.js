// FUNÇÕES ANÔNIMAS
let mensagem2 = function () {
    console.log("oi - anônimo")
}
mensagem2()

// Saudação
let nome = function (nome) {
    console.log("oi " + nome)
}
let nome1 = "Marcelo"
nome(nome1)

// Soma de valores
let soma = function (n1, n2) {
    return n1 + n2
}
console.log(soma(2, 3))

// Ganho por hora extra
let horas = function(hora) {
    if(hora < 10) {
        console.log("Você vai ganhar R$", hora * 20)
    } else {
        console.log("Você vai ganhar R$", hora * 15)
    }
}
let hora1 = prompt("Você trabalhou por quantas horas?")
horas(hora1)




// ARROW FUNCTION
let mensagem3 = () => {
    console.log("oi - arrow")
}
mensagem3()

// Multiplicar valores
let multiplicacao = (num1, num2) => {
    console.log(num1 * num2)
}
let multi1 = Number(prompt("Informe o primeiro número: "))
let multi2 = Number(prompt("Informe o segundo número: "))
multiplicacao(multi1, multi2)

// Compra e desconto
let desconto = (cartao, gastou) => {
    if(cartao == "s") {
        console.log("Você ganhou 15% de desconto, valor final:",gastou*0.15)
    } else {
        console.log("Sem desconto")
    }
}
let cartao1 = prompt("Você tem o cartão da loja? (s/n)?")
let gastou1 = Number(prompt("Quanto você gastou?"))
desconto(cartao1, gastou1)




// // DOM 
let texto = document.getElementById("texto")
function troca() {
    if (texto.innerHTML == "<b>Hoje é sexta.</b>") {
        texto.innerHTML = "Bom dia!"
    } else {
        texto.innerHTML = "<b>Hoje é sexta.</b>"
    }
}

function aumentar() {
    texto.style.fontSize = "50px"
}

function diminuir() {
    texto.style.fontSize = "10px"
}

function cor() {
    if (texto.style.backgroundColor == "orange") {
        texto.style.backgroundColor = "white"
        texto.style.color = "black"
    } else {
        texto.style.backgroundColor = "orange"
        texto.style.color = "red"
    }
}

function esconde() {
    if (texto.style.display == "none") {
        texto.style.display = "block"
    } else {
        texto.style.display = "none"
    }
}

// --------------------------------------------------

let zero = document.getElementById("zero")
let num = 0
function mais() {
    num++ 
    zero.innerText = num
}
function menos() {
    num--
    zero.innerText = num
}
function zerar() {
    num = 0
    zero.innerText = num
}