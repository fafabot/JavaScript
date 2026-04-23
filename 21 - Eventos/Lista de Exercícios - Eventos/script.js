// 1
let ex1 = document.getElementById("ex1")
ex1.addEventListener("click", function() {
    let p1 = document.getElementById("p1")
    p1.innerText = "Você clicou no botão!"
})

// 2
let ex2 = document.getElementById("ex2")
ex2.addEventListener("click", function() {
    if (document.body.style.backgroundColor == "lightgreen") {
        document.body.style.backgroundColor = "white"
    } else {
        document.body.style.backgroundColor = "lightgreen"
    }
})

// 3
let ex3 = document.getElementById("ex3")
let p3 = document.getElementById("p3")
let cliques = 0

ex3.addEventListener("click", function() {
    cliques++
    p3.innerText = cliques
})

// 4
let ex4 = document.getElementById("ex4")
ex4.addEventListener("click", function() {
    let p4 = document.getElementById("p4")
    if (p4.style.display == "none") {
        p4.style.display = "block"
        ex4.innerText = "Esconder"
    } else {
        p4.style.display = "none"
        ex4.innerText = "Mostrar"
    }
})

// 5
let ex5 = document.getElementById("ex5")
let p5 = document.getElementById("p5")

ex5.addEventListener("input", function() {
    p5.innerText = ex5.value
})

// 6
let ex6 = document.getElementById("ex6")
ex6.addEventListener("click", function() {
    p5.innerText = ex5.value.toUpperCase()
})

// 7
let ex7 = document.getElementById("ex7")
let p7 = document.getElementById("p7")

ex7.addEventListener("input", function() {
    let caracteres = ex7.value.length
    p7.innerText = "Você digitou " + caracteres + " caracteres"
})

// 8
let ex8 = document.getElementById("ex8")
let p8 = document.getElementById("p8")

ex8.addEventListener("input", function() {
    if (ex8.value.length < 5) {
        p8.innerText = "Texto muito curto"
    } else {
        p8.innerText = "Texto válido"
    }
})

// 9
let ex9 = document.getElementById("ex9")

ex9.addEventListener("mouseover", function() {
    if (ex9.style.backgroundColor == "purple"){
        ex9.style.backgroundColor = "red"
    } else {
        ex9.style.backgroundColor = "purple"
    }
    
})

// 10
let ex10 = document.getElementById("ex10")
let p10 = document.getElementById("p10")

ex10.addEventListener("mouseover", function() {
    p10.style.display = "block"
})

ex10.addEventListener("mouseout", function() {
    p10.style.display = "none"
})

// 11
let ex11 = document.getElementById("ex11")

ex11.addEventListener("mouseover", function() {
    ex11.innerText = "Surpresa"
})

ex11.addEventListener("mouseout", function() {
    ex11.innerText = "Passe o mouse aqui"
})

// 12
let ex12 = document.getElementById("ex12")
let p12 = document.getElementById("p12")
let btn12 = document.getElementById("btn12")

ex12.addEventListener("input", function() {
    p12.innerText = ex12.value
})

ex12.addEventListener("mouseover", function() {
    p12.style.color = "red"
})

ex12.addEventListener("mouseout", function() {
    p12.style.color = "black"
})

btn12.addEventListener("click", function() {
    ex12.value = ""
    p12.innerText = ""
})


