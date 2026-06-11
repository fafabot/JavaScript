const perguntas = document.querySelectorAll(".pergunta");
perguntas.forEach(pergunta => {
    pergunta.addEventListener("click", () => {
        const resposta = pergunta.nextElementSibling;
        resposta.style.display =
            resposta.style.display === "block"
            ? "none"
            : "block";
    });
});


const cards = document.querySelector(".cards");
const btnProximo =
document.querySelector(".proximo");
const btnAnterior =
document.querySelector(".anterior");
let posicao = 0;
btnProximo.addEventListener("click", () => {
    posicao += 300;
    if(posicao > cards.scrollWidth - cards.clientWidth){
        posicao = 0;
    }
    cards.scrollTo({
        left: posicao,
        behavior: "smooth"
    });
});

btnAnterior.addEventListener("click", () => {
    posicao -= 300;
    if(posicao < 0){
        posicao =
        cards.scrollWidth -
        cards.clientWidth;
    }
    cards.scrollTo({
        left: posicao,
        behavior: "smooth"
    });

});