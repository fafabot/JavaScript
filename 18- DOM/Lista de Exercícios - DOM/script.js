// 1
function ex1() {
    let titulo = document.getElementById("titulo1")
    titulo.innerText = "Aprendendo DOM com JavaScript"
}


// 2
function ex2() {
    let nome = document.getElementById("nome2").value
    let msg = document.getElementById("msg2")
    msg.innerText = "Bem-vindo ao sistema, " + nome
}

// 3
function ex3() {
    let p3 = document.getElementById("p3")
    p3.innerText = "Manipulando HTML com JavaScript"
}

// 4
function ex4() {
    let nome = document.getElementById("nome4").value
    let msg = document.getElementById("msg4")

    if (nome == "") {
        msg.innerText = "Digite um nome primeiro!"
    } else {
        msg.innerText = "Olá, " + nome
    }
}

// 5
function ex5() {
    if (document.body.style.backgroundColor == "white") {
        document.body.style.backgroundColor = "black"
    } else {
        document.body.style.backgroundColor = "white"
    }
    
}


// 6
function ex6() {
    let nota = Number(document.getElementById("nota6").value)
    let msg = document.getElementById("msg6")

    if (nota >= 7) {
        msg.innerText = "Aluno aprovado"
    } else {
        msg.innerText = "Aluno reprovado"
    }
}

// 7
function ex7() {
    let msg = document.getElementById("msg7")
    msg.innerText = "Você encontrou a mensagem secreta!"
}

// 8
function ex8() {
    let texto = document.getElementById("texto8")
    texto.style.color = "red"
    texto.style.fontWeight = "bold"
}

// 9
function ex9() {
    let texto = document.getElementById("texto9").value
    let msg = document.getElementById("msg9")

    msg.innerText = "Você digitou " + texto.length + " caracteres"
}

// 10
function ex10() {
    let texto = document.getElementById("texto10")
    texto.style.color = "blue"
}

// 12
function ex12() {
    let texto = document.getElementById("texto12")
    texto.style.display = "none"
}

// 13
function ex13() {
    let idade = Number(document.getElementById("idade13").value)
    let msg = document.getElementById("msg13")

    msg.innerText = "Você já viveu " + (idade * 12) + " meses"
}

// 14
function ex14() {
    let idade = Number(document.getElementById("idade14").value)
    let msg = document.getElementById("msg14")

    if (idade >= 18) {
        msg.innerText = "Você é maior de idade"
    } else {
        msg.innerText = "Você é menor de idade"
    }
}