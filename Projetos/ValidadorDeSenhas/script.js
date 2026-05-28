let senha = document.getElementById("senha");
let confirmar = document.getElementById("confirmar");
let resultado = document.getElementById("resultado");

confirmar.addEventListener("input", function() {

    let numeros = /[0-9]/.test(senha.value);
    let letrasMaiusculas = /[A-Z]/.test(senha.value);
    let letrasMinusculas = /[a-z]/.test(senha.value);
    let caracteresEspeciais = /[!@#$%^&*(),.?":{}|<>]/.test(senha.value);
    let tamanho = senha.value.length >= 8;

    if (
        senha.value === confirmar.value &&
        numeros &&
        letrasMaiusculas &&
        letrasMinusculas &&
        caracteresEspeciais &&
        tamanho
    ) {
        resultado.textContent = "As senhas coincidem.";
        resultado.style.color = "green";
    } else {
        resultado.textContent =
            "As senhas precisam coincidir e conter pelo menos um número, uma letra maiúscula, uma letra minúscula, um caractere especial e ter pelo menos 8 caracteres.";
        resultado.style.color = "red";
    }
});

function mostrarSenha() {
    if (senha.type === "password") {
        senha.type = "text";
        confirmar.type = "text";
    } else {        senha.type = "password";
        confirmar.type = "password";
    }
}