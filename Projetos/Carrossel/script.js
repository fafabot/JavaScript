let imagens1 = document.querySelectorAll(".carrossel1 img")
let indiceAtual = 0

function mostrarImagem() {
    imagens1.forEach(function(img) {
        img.classList.remove("ativa")
    })

    imagens1[indiceAtual].classList.add("ativa")
}

function proximaImagem() {
    indiceAtual++

    if (indiceAtual >= imagens1.length) {
        indiceAtual = 0
    }

    mostrarImagem()
}

function imagemAnterior() {
    indiceAtual--

    if (indiceAtual < 0) {
        indiceAtual = imagens1.length - 1
    }

    mostrarImagem()
}




let imagens2 = document.querySelectorAll(".carrossel2 img")
let indiceAtual2 = 0

function mostrarImagem2() {
    imagens2.forEach(function(img) {
        img.classList.remove("ativa")
    })

    imagens2[indiceAtual2].classList.add("ativa")
}

function iniciarCarrossel() {
    indiceAtual2++

    if (indiceAtual2 >= imagens2.length) {
        indiceAtual2 = 0
    }

    mostrarImagem2()
}

setInterval(iniciarCarrossel, 3000)