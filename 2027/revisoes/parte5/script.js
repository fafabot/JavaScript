// ==========================================
// 1 - DIGITAÇÃO

let input = document.getElementById("input")
let mensagem = document.getElementById("mensagem")

input.addEventListener("input", function() {
    mensagem.innerText = input.value
})


// ==========================================
// 2 - TROCA DE TEXTO

let mouse = document.getElementById("mouse")

mouse.addEventListener("mouseover", function() {
    mouse.innerText = "Você passou o mouse!"
})


// ==========================================
// 3 - ESCONDENDO ELEMENTOS

let esconder = document.getElementById("esconder")
let duplo = document.getElementById("duplo")

duplo.addEventListener("dblclick", function() {
    esconder.style.display = "none"
})


// ==========================================
// 4 - ALTERANDO A FONTE

let fonte = document.getElementById("fonte")
let tamanho = document.getElementById("tamanho")

tamanho.addEventListener("click", function() {
    let valor = Math.random() * 30 + 10
    fonte.style.fontSize = valor + "px"
})


// ==========================================
// 5 - MOSTRAR E ESCONDER

let texto5 = document.getElementById("texto5")
let mostrar = document.getElementById("mostrar")
let esconder5 = document.getElementById("esconder5")

mostrar.addEventListener("click", function() {
    texto5.style.display = "block"
})

esconder5.addEventListener("click", function() {
    texto5.style.display = "none"
})


// ==========================================
// 6 - TROCA DE COR

let divCor = document.getElementById("divCor")
let cor = document.getElementById("cor")

cor.addEventListener("click", function() {

    let vermelho = Math.random() * 256
    let verde = Math.random() * 256
    let azul = Math.random() * 256

    divCor.style.backgroundColor = "rgb(" + vermelho + "," + verde + "," + azul + ")"

})


// ==========================================
// 7 - ALTERNANDO DESTAQUE

let destaque = document.getElementById("destaque")
let toggle = document.getElementById("toggle")

toggle.addEventListener("click", function() {
    destaque.classList.toggle("destaque")
})


// ==========================================
// 8 - TROCA DE IMAGEM

let imagem = document.getElementById("imagem")
let imagem1 = document.getElementById("imagem1")
let imagem2 = document.getElementById("imagem2")

imagem1.addEventListener("click", function() {
    imagem.src = "https://tenisbrasil.uol.com.br/wp-content/uploads/2026/09/gauff_uso_vibra_yellow-1200x800.jpg"
})

imagem2.addEventListener("click", function() {
    imagem.src = "https://tenisbrasil.uol.com.br/wp-content/uploads/2024/10/sabalenka_vibra_wuhan-1.jpg"
})


// ==========================================
// 9 - CONTADOR DE CARACTERES

let inputCaracteres = document.getElementById("inputCaracteres")
let contador = document.getElementById("contador")

inputCaracteres.addEventListener("input", function() {
    contador.innerText = "Quantidade de caracteres: " + inputCaracteres.value.length
})


// ==========================================
// 10 - VERIFICAÇÃO DE IDADE

let idade = document.getElementById("idade")
let verificar = document.getElementById("verificar")
let resultadoIdade = document.getElementById("resultadoIdade")

verificar.addEventListener("click", function() {

    if (Number(idade.value) >= 18) {
        resultadoIdade.innerText = "Você é maior de idade."
    } else {
        resultadoIdade.innerText = "Você é menor de idade."
    }

})


// ==========================================
// 11 - PAR OU ÍMPAR

let numero = document.getElementById("numero")
let verificarNumero = document.getElementById("verificarNumero")
let resultadoNumero = document.getElementById("resultadoNumero")

verificarNumero.addEventListener("click", function() {

    if (Number(numero.value) % 2 == 0) {
        resultadoNumero.innerText = "O número é par."
    } else {
        resultadoNumero.innerText = "O número é ímpar."
    }

})


// ==========================================
// 12 - MÉDIA DO ALUNO

let nota1 = document.getElementById("nota1")
let nota2 = document.getElementById("nota2")
let nota3 = document.getElementById("nota3")

let calcular = document.getElementById("calcular")
let resultadoMedia = document.getElementById("resultadoMedia")

calcular.addEventListener("click", function() {

    let media = (Number(nota1.value) + Number(nota2.value) + Number(nota3.value)) / 3

    if (media >= 7) {
        resultadoMedia.innerText = "Média: " + media + " - Aprovado"
    } else if (media >= 5) {
        resultadoMedia.innerText = "Média: " + media + " - Recuperação"
    } else {
        resultadoMedia.innerText = "Média: " + media + " - Reprovado"
    }

})