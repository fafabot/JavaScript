// 1
let btn1 = document.getElementById("btn1")
let div1 = document.getElementById("ex1")
btn1.addEventListener("click", function() {
    div1.classList.add("ativo")
})

// 2
let btn2 = document.getElementById("btn2")
btn2.addEventListener("click", function() {
    div1.classList.remove("ativo")
})

// 3
let btn3 = document.getElementById("btn3")
btn3.addEventListener("click", function() {
    div1.classList.toggle("ativo")
})

// 4
let btn4 = document.getElementById("btn4")
let div4 = document.getElementById("ex4")
btn4.addEventListener("click", function() {
    div4.classList.add("destaque")
})

// 5
let btn5 = document.getElementById("btn5")
let div5 = document.getElementById("ex5")
btn5.addEventListener("click", function() {
    div5.classList.toggle("grande")
})

// 6
let btn6 = document.getElementById("btn6")
let div6 = document.getElementById("ex6")
btn6.addEventListener("click", function() {
    div6.classList.toggle("escondido")
})

// 7
let div7 = document.getElementById("ex7")
div7.addEventListener("mouseover", function() {
    div7.classList.add("hover")
})
div7.addEventListener("mouseout", function() {
    div7.classList.remove("hover")
})

// 8
let btn8 = document.getElementById("btn8")
btn8.addEventListener("click", function() {
    btn8.classList.toggle("botao")
})

// 9
let div9 = document.getElementById("ex9")
let div9a = document.getElementById("ex9a")
let div9b = document.getElementById("ex9b")
div9.addEventListener("click", function() {
    div9.classList.add("selecionado")
})
div9a.addEventListener("click", function() {
    div9a.classList.add("selecionado")
})
div9b.addEventListener("click", function() {
    div9b.classList.add("selecionado")
})

// 10
let btn10 = document.getElementById("btn10")
btn10.addEventListener("click", function() {
    document.body.classList.toggle("dark")
})

// 11
let btn11 = document.getElementById("btn11")
let ex11 = document.getElementById("ex11")
btn11.addEventListener("click", function() {
    ex11.classList.toggle("mostrar")

    if (ex11.classList.contains("mostrar")) {
        btn11.innerText = "Esconder Menu"
    } else {
        btn11.innerText = "Mostrar Menu"
    }
})

// 12
let ex12 = document.getElementById("ex12")
ex12.addEventListener("click", function() {
    ex12.classList.add("cores")
})
ex12.addEventListener("mouseover", function() {
    ex12.classList.add("borda")
})
ex12.addEventListener("mouseout", function() {
    ex12.classList.remove("borda")
})

// 13
let ex13 = document.getElementById("ex13")
let btnVermelho = document.getElementById("btnVermelho")
let btnAzul = document.getElementById("btnAzul")
let btnVerde = document.getElementById("btnVerde")
function limparCores() {
    ex13.classList.remove("vermelho")
    ex13.classList.remove("azul")
    ex13.classList.remove("verde")
}
btnVermelho.addEventListener("click", function() {
    limparCores()
    ex13.classList.add("vermelho")
})
btnAzul.addEventListener("click", function() {
    limparCores()
    ex13.classList.add("azul")
})
btnVerde.addEventListener("click", function() {
    limparCores()
    ex13.classList.add("verde")
})