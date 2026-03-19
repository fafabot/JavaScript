console.log("1 - Filmes favoritos;\n")
let filmes = []
for(let i = 0; i < 3; i++) {
    let filme = prompt("Digite um filme favorito:")
    filmes.push(filme)
}
console.log("Primeiro filme:", filmes[0])

console.log("\n")

console.log("2 - Criando e acessando um array;\n")
let frutas = []
for(let i = 0; i < 5; i++) {
    let fruta = prompt("Digite uma fruta:")
    frutas.push(fruta)
}
console.log("Terceira fruta:", frutas[2])

console.log("\n")

console.log("3 - Adicionando elementos;\n")
let cores = []
for(let i = 0; i < 3; i++) {
    let cor = prompt("Digite uma cor:")
    cores.push(cor)
}
let cor = prompt("Digite mais uma cor:")
cores.push(cor)
for(let i = 0; i < cores.length; i++) {
    console.log("Cor nº", i, ":", cores[i])
}

console.log("\n")

console.log("4 - Removendo elementos;\n")
let numeros = []
for(let i = 0; i < 4; i++) {
    let numero = Number(prompt("Digite um número:"))
    numeros.push(numero)
}
numeros.pop()
for(let i = 0; i < numeros.length; i++) {
    console.log("Número nº", i, ":", numeros[i])
}

console.log("\n")

console.log("5 - Adicionando no início;\n")
let cidades = []
for(let i = 0; i < 2; i++) {
    let cidade = prompt("Digite uma cidade:")
    cidades.push(cidade)
}
let novaCidade = prompt("Digite uma nova cidade para o início:")
cidades.unshift(novaCidade)
for(let i = 0; i < cidades.length; i++) {
    console.log("Cidade nº", i, ":", cidades[i])
}

console.log("\n")

console.log("6 - Removendo do início\n")
let animais = []
for(let i = 0; i < 3; i++) {
    let animal = prompt("Digite um animal:")
    animais.push(animal)
}
animais.shift()
for(let i = 0; i < animais.length; i++) {
    console.log("Animal nº", i, ":", animais[i])
}

console.log("\n")

console.log("7 - Verificando o tamanho\n")
let carros = []
for(let i = 0; i < 4; i++) {
    let carro = prompt("Digite um carro:")
    carros.push(carro)
}
console.log("Quantidade de carros:", carros.length)

console.log("\n")

console.log("8 - Operações combinadas\n")
let valores = []
for(let i = 0; i < 3; i++) {
    valores.push(Number(prompt("Digite um número:")))
}
let valor = Number(prompt("Digite um número para o início:"))
valores.unshift(valor)
valores.pop()
valores.shift()
console.log("Array final:", valores)
console.log("Tamanho:", valores.length)

console.log("\n")

console.log("9 - Vetor vazio\n")
let vetor = []
for(let i = 0; i < 6; i++) {
    let vet = Number(prompt("Digite um número:"))
    vetor.push(vet)
}
for(let i = 0; i < vetor.length; i++) {
    console.log("Posição", i, ":", vetor[i])
}

console.log("\n")
console.log("fim")