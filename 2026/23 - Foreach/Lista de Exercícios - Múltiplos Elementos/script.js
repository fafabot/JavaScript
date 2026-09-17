// 1
let caixas = document.querySelectorAll(".ex1")
let botao = document.getElementById("btn1")

botao.addEventListener("click", function() {
    caixas.forEach(function(ex1) {
        ex1.classList.toggle("escuro")
    })
})

// 2
let caixas2 = document.querySelectorAll(".ex2")
let btn2 = document.getElementById("btn2")
btn2.addEventListener("click", function() {
    caixas2.forEach(function(ex2) {
        ex2.classList.toggle("ativo")
    })
})

// 3
let caixas3 = document.querySelectorAll(".ex3")
caixas3.forEach(function(caixa) {
    caixa.addEventListener("click", function() {
        console.log("clicou")
    })
})