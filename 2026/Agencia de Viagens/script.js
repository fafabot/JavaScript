let perguntas = document.querySelectorAll(".pergunta");

perguntas.forEach(function(pergunta) {
    pergunta.addEventListener("click", function() {
        let resposta = this.nextElementSibling;
        if (resposta.style.display === "block") {
            resposta.style.display = "none";
        } else {
            resposta.style.display = "block";
        }
    });
});


let cards = document.querySelector(".cards");
let btnProximo = document.querySelector(".proximo");
let btnAnterior = document.querySelector(".anterior");
let paginaAtual = 0;

function mostrarPagina() {
    let larguraPagina = cards.clientWidth;
    cards.scrollTo({
        left: paginaAtual * larguraPagina,
        behavior: "smooth"
    });
}

btnProximo.addEventListener("click", function() {
    paginaAtual++;
    if (paginaAtual > 1) {
        paginaAtual = 0;
    }
    mostrarPagina();
});
btnAnterior.addEventListener("click", function() {
    paginaAtual--;
    if (paginaAtual < 0) {
        paginaAtual = 1;
    }
    mostrarPagina();
});