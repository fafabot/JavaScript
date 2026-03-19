let nota = 7
if (nota>=9){
    console.log("Aprovado")
} else if (nota >= 5){
    console.log("Recuperção")
} else{
    console.log("Reprovado")
}

//Classificação de idade
let idade = Number(prompt("Qual sua idade?"))
if (idade >= 12 && idade < 18) {
    console.log("Adolescente")
} else if (idade >= 18 && idade <= 50) {
    console.log("Adulto")
} else if (idade < 12) {
    console.log("Criança")
} else {
  console.log("Idoso")
}

//Decisões com base no clima
let clima = prompt("Como está o clima (calor/frio)")
if (clima == "calor" || clima == "frio") {
  console.log("Está um clima bom para viajar")
} else {
  console.log("Clima inválido")
}   

/* Pergunte a temperatura para o usuário e mostre um destino com 
base nisso. 
Se for maior ou igual a 30, "Praia", 
Se for maior ou igual a 22, "Parque", 
Se for maior ou igual a 15 "Shopping", 
Se for menor que 15, "Ficar em Casa" */

let temperatura = Number(prompt("Qual a temperatura?"))
if (temperatura >= 30){
    console.log("Praia")
} else if (temperatura >= 22){
    console.log("Parque")
} else if (temperatura >= 15){
    console.log("Shopping")
} else{
    console.log("Ficar em Casa")
}

let idadeIngresso = Number(prompt("Qual sua idade?"))
if (idadeIngresso < 10) {
  console.log("Você pode ver filmes da classificação livre")
} else if (idadeIngresso >= 10 && idadeIngresso <= 13) {
  console.log("Você pode ver filmes da classificação 10+")
} else if (idadeIngresso >= 14 && idadeIngresso <= 17) {
  console.log("Você pode ver filmes da classificação 14+")
} else {
  console.log("Você pode ver filmes de qualquer classificação")
}