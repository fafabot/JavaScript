let frutas = ["Maçã", "Banana", "Laranja"]
//  0         1          2
console.log(frutas)
console.log("-----------------------")
console.log(frutas[0]) //Maçã
console.log(frutas[1]) //Banana
console.log(frutas[2]) //Laranja
console.log("-----------------------")
console.log(frutas.length) //length = tamanho

frutas.push("Uva") //Adiciona no final
console.log(frutas)

frutas.unshift("Morango") //Adiciona no começo
console.log(frutas)

//Remover
frutas.pop() //Remove o último
console.log(frutas)

frutas.shift() //Remove no começo
console.log(frutas)

//Editar
frutas[1] = "Abacaxi"
console.log(frutas)

//Encontrar uma posição
console.log(frutas.indexOf("Laranja")) //2
console.log(frutas.indexOf("Maçã")) //0
console.log(frutas.indexOf("Banana")) //-1 é quando não existe

//Varrer o vetor com for
let amigos = ["Felipe", "Joana", "Luana", "Washington", "Rebeca"]
for(let i = 0; i < amigos.length; i++) {
  console.log("amigo nº",i,": ",amigos[i])
}

console.log("----------------------------")
let alunos = ["Mariana", "Lucas", "Lana", "Rafael", "Marcelo"]
for(let i = 0; i<alunos.length; i++) {
  if(alunos[i].length > 5) {
    console.log("Tem mais de 5 letras")
  } else {
    console.log("Tem 5 letras ou menos")
  }
}

let nome = "Juliana"
console.log(nome.length)

console.log("----------------------------")
let numeros = []
for(let i = 0; i < 5; i++) {
  let num = Number(prompt("Digite um número"))
  numeros.push(num)
}
console.log(numeros)

console.log("----------------------------")

let paises = ["Brasil", "Argentina", "Venezuela", "Peru"]
for(let i = 0; i < paises.length; i++) {
  console.log("País nº",i,": ",paises[i])
}


console.log("----------------------------")
let cores = ["Branco", "Preto", "Rosa"]
frutas.push("Diamante", "Esmeralda")
frutas.shift()
for(let i = 0; i < cores.length; i++) {
  console.log("Cor nº",i,": ",cores[i])
}



console.log("----------------------------")
let notas = [6]
for(let i = 0; i < 5; i++) {
  let n = Number(prompt("Digite um número"))
  notas.push(n)
}
console.log(notas)

