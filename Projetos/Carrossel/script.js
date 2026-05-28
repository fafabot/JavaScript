let imagens = document.querySelectorAll(".carrossel img");
let indiceAtual = 0;

function mostrarImagem(indice) {

    imagens.forEach((img) => {
        img.classList.remove("ativa");
    });

    imagens[indice].classList.add("ativa");
}

function proximaImagem() {
    indiceAtual = (indiceAtual + 1) % imagens.length;
    mostrarImagem(indiceAtual);
}

function imagemAnterior() {
    indiceAtual = (indiceAtual - 1 + imagens.length) % imagens.length;
    mostrarImagem(indiceAtual);
}

function iniciarCarrossel() {
    indiceAtual++
    if (indiceAtual >= imagens.length) {
        indiceAtual = 0;
    }
    mostrarImagem(indiceAtual);
}
setInterval(iniciarCarrossel, 3000);