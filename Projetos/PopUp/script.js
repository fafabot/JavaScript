function abrirLogin() {
    document.getElementById("popupLogin").style.display = "flex";
}

function fecharLogin() {
    document.getElementById("popupLogin").style.display = "none";
}


// Popup Imagem

function abrirImagem() {
    document.getElementById("popupImagem").style.display = "flex";
}

function fecharImagem() {
    document.getElementById("popupImagem").style.display = "none";
}


// Popup Confirmação

function popupConfirmacao() {
    document.getElementById("popupConfirmacao").style.display = "flex";
}

function fecharConfirmacao() {
    document.getElementById("popupConfirmacao").style.display = "none";
}

function confirmarExclusao() {
    alert("Item excluído com sucesso!");
    fecharConfirmacao();
}


// Popup Curiosidade

function mostrarCuriosidade() {
    let curiosidades = [
        "O polvo possui 3 corações.",
        "O mel nunca estraga.",
        "O coração da baleia azul pesa mais de 180 kg.",
        "A água quente pode congelar mais rápido que a fria.",
        "Os gatos dormem cerca de 16 horas por dia."
    ];

    let numero = Math.floor(Math.random() * curiosidades.length);

    document.getElementById("textoCuriosidade").innerText =
        curiosidades[numero];

    document.getElementById("popupCuriosidade").style.display = "flex";
}

function fecharCuriosidade() {
    document.getElementById("popupCuriosidade").style.display = "none";
}


// Popup Aviso

function verificarSenha() {
    document.getElementById("popupAviso").style.display = "flex";
}

function validarSenha() {
    let senha =
        document.getElementById("senhaDigitada").value;

    let resultado =
        document.getElementById("resultadoSenha");

    if (senha === "1234") {
        resultado.innerText = "Parabéns! Senha correta.";
    } else {
        resultado.innerText = "Erro! Senha incorreta.";
    }
}

function fecharAviso() {
    document.getElementById("popupAviso").style.display = "none";
}