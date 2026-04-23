let trocar = document.getElementById("trocar")

trocar.addEventListener("click", function() {
    let titulo = document.getElementById("titulo")

    if(titulo.innerText == "Outro texto") {
        titulo.innerText = "Titulo do site"
    } else {
        titulo.innerText = "Outro texto"
    }
})


let contador = document.getElementById("contador")
let numero = document.getElementById("numero")
let cliques = 0

contador.addEventListener("click", function () {
    cliques++
    numero.innerText = cliques
})

let input = document.getElementById("input")
let texto = document.getElementById("texto")

input.addEventListener("input", function() {
    texto.innerText = input.value
})

let mudar = document.getElementById("mudar")
mudar.addEventListener("mouseover", function() {
    if (mudar.innerText == "Você achou um texto secreto"){
        mudar.innerText = "texto inicial"
    } else {
        mudar.innerText = "Você achou um texto secreto"
    }
})


let imagem = document.getElementById("imagem")
imagem.addEventListener("mouseover", function() {
    imagem.src = "amigos.avif"
})
imagem.addEventListener("mouseout", function() {
    imagem.src = "sozinho.avif"
})


let troca = document.getElementById("troca")
// CTRL + ESPAÇO = opções de código
troca.addEventListener("mouseover", function() {
    troca.style.color = "yellow"
    troca.style.backgroundColor = "red"
})
troca.addEventListener("mouseout", function() {
    troca.style.color = "black"
    troca.style.backgroundColor = "white"
})