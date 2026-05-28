function abrirLogin() {
    document.getElementById("popupLogin").style.display = "flex";
}
function fecharLogin() {
    document.getElementById("popupLogin").style.display = "none";
}


function abrirImagem() {
    document.getElementById("popupImagem").style.display = "flex";
}
function fecharImagem() {
    document.getElementById("popupImagem").style.display = "none";
}


function popupConfirmacao() {
    let resposta = confirm("Deseja realmente excluir este item?");
    if (resposta) {
        alert("Item excluído com sucesso.");
    } else {
        alert("Operação cancelada.");
    }
}


function mostrarCuriosidade() {
    let curiosidades = [
        "O polvo possui 3 corações.",
        "O mel nunca estraga.",
        "O coração da baleia azul pesa mais de 180kg.",
        "A água quente congela mais rápido que a fria.",
        "Os gatos dormem cerca de 16 horas por dia."
    ];
    let numero = Math.floor(Math.random() * curiosidades.length);
    alert(curiosidades[numero]);
}


function verificarSenha() {
    let senha = prompt("Digite a senha:");
    if (senha === "1234") {
        alert("Parabéns! Senha correta.");
    } else {
        alert("Erro! Senha incorreta.");
    }
}