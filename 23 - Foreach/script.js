let botao = document.getElementById("botao")

let texto2 = document.querySelector("#texto2")

botao.addEventListener("click", function() {
    document.getElementById("texto").innerText = "outro texto"
    texto2.innerText = "outro texto 2"
})

// =================================================

let caixa = document.querySelectorAll(".caixa")
let tema = document.getElementById("tema")

caixa.forEach(function(c) {
    c.style.color = "red"
})

tema.addEventListener("click", function() {
    caixa.forEach(function(c) {
        c.classList.toggle("escuro")
    })
})