// 1
function ex1() {
    let n1 = document.getElementById("n1").value
    document.getElementById("ex1").innerText = "Arredondado: " + Math.round(n1)
}

// 2
function ex2() {
    let n2 = document.getElementById("n2").value
    document.getElementById("ex2").innerText = "Arredondado para baixo: " + Math.floor(n2)
}

// 3
function ex3() {
    let n3 = document.getElementById("n3").value
    document.getElementById("ex3").innerText = "Arredondado para cima: " + Math.ceil(n3)
}

// 4
function ex4() {
    let n4 = document.getElementById("n4").value
    document.getElementById("ex4").innerText = "Raiz Quadrada: " + Math.sqrt(n4)
}

// 5
function ex5() {
    let n5 = document.getElementById("n5").value
    let potencia = document.getElementById("potencia").value
    document.getElementById("ex5").innerText = "Resultado: " + Math.pow(n5, potencia)
}

// 6
function ex6() {
    let n6 = document.getElementById("n6").value
    let n61 = document.getElementById("n61").value
    let n62 = document.getElementById("n62").value
    document.getElementById("ex6").innerText = "O maior é: " + Math.max(n6, n61, n62)
}

// 7
function ex7() {
    let n7 = document.getElementById("n7").value
    let n71 = document.getElementById("n71").value
    let n72 = document.getElementById("n72").value
    document.getElementById("ex7").innerText = "O menor é: " + Math.min(n7, n71, n72)
}

// 8
function ex8() {
    let n8 = Math.floor(Math.random() * 10)
    document.getElementById("ex8").innerText = "Número sorteado: " + n8
}

// 9
function ex9() {
    let n9 = Math.floor(Math.random() * 6) + 1
    document.getElementById("ex9").innerText = "O número que caiu é: " + n9
}