
let imagens = [
    "https://c.files.bbci.co.uk/2BBA/production/_128049111_4a9c8cf8-7091-4ee7-a3eb-8120628a494c.jpg",
    "https://img.olympics.com/images/image/private/t_s_pog_staticContent_hero_xl_2x/f_auto/primary/dp1iqxszlj04t0d3ipcq",
    "https://www.365scores.com/pt-br/news/magazine/wp-content/uploads/2025/09/romario-brasil-copa-do-mundo-scaled-e1757377423198.jpg"
]

let indice = 0

function proxima() {
    indice = indice + 1

    if (indice == 3) {
        indice = 0
    }

    document.getElementById("imagem").src = imagens[indice]
}

function anterior() {
    indice = indice - 1

    if (indice == -1) {
        indice = 2
    }

    document.getElementById("imagem").src = imagens[indice]
}


function contarDias() {
    let hoje = new Date()
    console.log(hoje)

    let copa = new Date(2030, 5, 8)

    // Calcular a diferença
    let diferenca = copa - hoje
    console.log(diferenca)

    // Converter os valores
    let anos = Math.floor(diferenca / 1000 / 60 / 60 / 24 / 365)
    console.log(anos)

    let meses = Math.floor(diferenca / 1000 / 60 / 60 / 24 / 30) % 12
    console.log(meses)

    let dias = Math.floor(diferenca / 1000 / 60 / 60 / 24)
    console.log(dias)

    let horas = Math.floor(diferenca / 1000 / 60 / 60) % 24
    console.log(horas)

    let minutos = Math.floor(diferenca / 1000 / 60) % 60
    console.log(minutos)

    let segundos = Math.floor(diferenca / 1000) % 60
    console.log(segundos)

    let copaMundo = document.getElementById("copaMundo")
    copaMundo.innerText = anos + " anos "+ meses + " meses " +dias +" dias " + horas + " horas " + minutos + " minutos e " + segundos + " segundos"
}
setInterval (contarDias, 1000)