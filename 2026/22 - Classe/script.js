let botao = document.getElementById("botao");
let texto = document.getElementById("texto");
let remover = document.getElementById("remover")
let alternar = document.getElementById("alternar")

botao.addEventListener("click", function() {
    // texto.style.backgroundColor = "red"
    // texto.style.color = "blue"
    texto.classList.add("mudar")
})
remover.addEventListener("click", function(){
    texto.classList.remove("mudar")
})

alternar.addEventListener("click", function(){
    texto.classList.toggle("mudar")
})