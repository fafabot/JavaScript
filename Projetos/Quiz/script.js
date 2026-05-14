let perguntas = [
    {
        pergunta: "Qual o nome da nossa Escola?",
        respostas: [
            "Luis Eulalio de Bueno Vidigal Filho",
            "Nami Jafet",
            "Senai Osasco",
            "Senai São Caetano"
        ],
        correta: 0
    },
    {
        pergunta: "Qual o nome do diretor da escola?",
        respostas: [
            "Santos",
            "Moraes",
            "Sanches",
            "Willian"
        ],
        correta: 3
    },
    {
        pergunta: "Em que ano começou o primeiro técnico em Desenvolvimento de Sistemas?",
        respostas: [
            "2020",
            "2021",
            "2022",
            "2023"
        ],
        correta: 3
    }
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

    if(index === pergunta.correta) {
        resultado.innerText = "Resposta correta!";
        pontuacao++;
    } else {
        resultado.innerText = "Resposta incorreta!";
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