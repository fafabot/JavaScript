let nome = "Rafael"
console.log(nome)
console.log(nome.toLowerCase()) //minusculo
console.log(nome.toUpperCase()) //maiusculo
console.log("-------------------------------")
let nome2 = nome[5]
console.log(nome2)

console.log("-------------------------------")
//Cortando uma String
let palavra = "refrigerante"
let parte = palavra.slice(1,3)
console.log(parte)

function mudar(){
    let resposta = document.getElementById("novoTexto")
    novoTexto.innerText = resposta.toUpperCase()
}

function mostrar() {
    let palavra1 = document.getElementById("palavra1").value
    let ultimaLetra = document.getElementById("ultimaLetra")

    let texto = palavra1.length
    let final = texto - 1
    ultimaLetra.innerText = palavra1[final]
    //maçã = 4    juliana = 7    Senai = 5
}
