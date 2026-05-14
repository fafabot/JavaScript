let perguntas = [
    {
        pergunta: "Antes de adotar o nome Roddie, como ele era conhecido?",
        respostas: [
            "Rodrigo",
            "Rod",
            "RodBoi",
            "Rodshawty"
        ],
        correta: 3
    },
    {
        pergunta: "Qual o último albúm lançado por ele?",
        respostas: [
            "INTANGÍVEL",
            "versos que nao sao pra vc",
            "DEIXA UMA MENSAGEM",
            "serenata"
        ],
        correta: 1
    },
    {
        pergunta: "Na música \"risco\", roddie canta o seguinte verso: 'Prazer o meu nome é rodrigo e eu gosto de droga, de carro e _______'. Qual é a palavra que completa o verso?",
        respostas: [
            "mulher",
            "bebida",
            "dinheiro",
            "música"
        ],
        correta: 2
    },
    {
        pergunta: "Qual é a tag do Roddie?",
        respostas: [
            "Roddie acorda",
            "Wake up Roddie",
            "Shawty on the beat",
            "Roddie chegou"
        ],
        correta: 0
    },
    {
        pergunta: "Qual é o lugar preferido para Roddie?",
        respostas: [
            "Bahia",
            "Paris",
            "Curitiba",
            "São Paulo"
        ],
        correta: 2
    },
    {
        pergunta: "Qual é um tema muito presente nas músicas de Roddie?",
        respostas: [
            "Festa e balada",
            "Ostentação exagerada",
            "Vida no crime",
            "Relacionamentos complicados"
        ],
        correta: 3
    },
    {
        pergunta: "Quem roddie considera seu irmão?",
        respostas: [
            "Dfideliz",
            "Virgingod",
            "Lil Zé",
            "Link do zap"
        ],
        correta: 1
    },
    {
        pergunta: "Como chama a coletiva que roddie participa?",
        respostas: [
            "Coven",
            "Mainstreet",
            "Supernova Society",
            "Recayd Mob"
        ],
        correta: 2
    },
    {
        pergunta: "Qual a música mais ouvida do Roddie?",
        respostas: [
            "risco",
            "planos",
            "como antes",
            "tanto mistério"
        ],
        correta: 0
    },
];

let perguntaAtual = 0;
let pontuacao = 0;

function mostrarPergunta() {
    let pergunta = perguntas[perguntaAtual];
    document.getElementById("pergunta").innerText =
        pergunta.pergunta;

    let respostasDiv =
        document.getElementById("respostas");

    respostasDiv.innerHTML = "";
    pergunta.respostas.forEach(function(resposta, index) {
        respostasDiv.innerHTML += `
            <button onclick="verificarResposta(${index})">
                ${resposta}
            </button>
        `;
    });
    document.getElementById("proxima").style.display = "none";
}

function verificarResposta(index) {
    let pergunta = perguntas[perguntaAtual];
    let resultado =
        document.getElementById("resultado");
    let botoes =
        document.querySelectorAll("#respostas button");
    botoes.forEach(function(botao) {
        botao.disabled = true;
    });
    if(index === pergunta.correta) {
        resultado.innerText = "Resposta correta!";
        pontuacao++;
    } else {
        resultado.innerText = `Resposta incorreta!
        A resposta correta é: ${pergunta.respostas[pergunta.correta]}
        `;
    }
    document.getElementById("proxima").style.display = "block";
}

function proximaPergunta() {

    perguntaAtual++;

    if(perguntaAtual < perguntas.length) {
        mostrarPergunta();
        document.getElementById("resultado").innerText = "";
    } else {
        mostrarResultadoFinal();
    }
}

function mostrarResultadoFinal() {

    document.getElementById("container").innerHTML = `
        <h2>Quiz Finalizado!</h2>
        <p>
            Sua pontuação final é:
            ${pontuacao} de ${perguntas.length}
        </p>
        <button onclick="location.reload()">
            Reiniciar Quiz
        </button>
    `;
}

document.getElementById("proxima")
    .addEventListener("click", proximaPergunta);

mostrarPergunta();