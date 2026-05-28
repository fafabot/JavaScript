let imagens1 = document.querySelectorAll(".carrossel1 img");
let imagens2 = document.querySelectorAll(".carrossel2 img");

let indiceAtual = 0;
let indiceAtual2 = 0;

function mostrarImagem(indice) {

    imagens1.forEach((img) => {
        img.classList.remove("ativa");
    });

    imagens1[indice].classList.add("ativa");
}

function proximaImagem() {
    indiceAtual = (indiceAtual + 1) % imagens1.length;
    mostrarImagem(indiceAtual);
}

function imagemAnterior() {
    indiceAtual = (indiceAtual - 1 + imagens1.length) % imagens1.length;
    mostrarImagem(indiceAtual);
}

function mostrarImagem2(indice) {

    imagens2.forEach((img) => {
        img.classList.remove("ativa");
    });

    imagens2[indice].classList.add("ativa");
}

function iniciarCarrossel() {

    indiceAtual2++;

    if (indiceAtual2 >= imagens2.length) {
        indiceAtual2 = 0;
    }

    mostrarImagem2(indiceAtual2);
}

setInterval(iniciarCarrossel, 3000);