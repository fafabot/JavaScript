let texto = document.getElementById("texto")
let clique = document.getElementById("clique")

clique.addEventListener("click", function() {
    texto.innerHTML = "Hoje é sexta"
})

let input = document.getElementById("input")
let mensagem= document.getElementById("mensagem")

input.addEventListener("input", function() {
    mensagem.innerHTML = input.value
})


let classes = document.getElementById("classes")
let add = document.getElementById("add")
let remove = document.getElementById("remove")
let troca = document.getElementById("troca")

add.addEventListener("click", function() {
    classes.classList.add("personalizar1")
})

remove.addEventListener("click", function() {
    classes.classList.remove("personalizar1")
    classes.classList.remove("personalizar2")
})

troca.addEventListener("click", function() {
    classes.classList.toggle("personalizar2")
})


let img = document.getElementById("img")
img.addEventListener("click", function() {
    img.style.borderRadius = "50px"
})

let num1 = document.getElementById("num1")
let num2 = document.getElementById("num2")
let soma = document.getElementById("soma")
let resultado = document.getElementById("resultado")
soma.addEventListener("click", function() {
    resultado.innerText = Number(num1.value) + Number(num2.value)
})


let input2 = document.getElementById("input2")
let texto2 = document.getElementById("texto2")

input2.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        texto2.innerText = input2.value
    }
})


let lista = document.getElementById("lista")
let tarefa = document.getElementById("tarefa")
let adicionar = document.getElementById("adicionar")
adicionar.addEventListener("click", function() {
    let item = document.createElement("li")
    item.innerText = tarefa.value
    lista.appendChild(item)
})