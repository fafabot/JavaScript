let nome = "Juliana"
let maiuscula = nome.toUpperCase()
let minuscula = nome.toLocaleLowerCase()
console.log(nome)
console.log(maiuscula)
console.log(minuscula)

no1 = nome.toLowerCase()
// if(nome.toLowerCase() == "juliana"){ 
// }

function mudar(){
    let texto = document.getElementById("texto").value
    let maiusculo = document.getElementById("maiusculo")
    let minusculo = document.getElementById("minusculo")
    let letras = document.getElementById("letras")

    maiusculo.innerText = texto.toUpperCase()
    minusculo.innerText = texto.toLowerCase()
    letras.innerText = texto.length
    console.log(texto[0])
}

function parte(){
    let palavra = document.getElementById("palavra").value
    let resultado = document.getElementById("resultado")
    let parte = palavra.slice(1,5)
    resultado.innerText = parte
    palavra1.value = "" //para apagar o input

    let final = document.getElementById("final")
    final.innerText = palavra[palavra.length-1]
}

function juntarPalavras() {
    let input1 = document.getElementById("palavra1");
    let input2 = document.getElementById("palavra2");
    let juntos = document.getElementById("resultado2");
    juntos.innerText = input1 + " " + input2;
}