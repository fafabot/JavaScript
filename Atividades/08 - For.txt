console.log("1 – Contador;\n")
console.log("Números de 1 a 30:")
for(let i=1; i<=30; i++){
    console.log(i)
}

console.log("\n")

console.log("2 – Contagem Regressiva;\n")
console.log("Números de 1 a 30:")
for(let i=30; i>=1; i--){
    console.log(i)
}

console.log("\n")

console.log("3 – Classificação de Números;\n")
for(let i=1; i<=5; i++){
    let n = Number(prompt("Digite um número:"))
    if (n>=50){
        console.log("Acima da média")
    } else{
        console.log("Abaixo da média")
    }
}

console.log("\n")

console.log("4 – Tabuada;\n")
let numero = Number(prompt("Digite um número:"))
console.log("A tabuada de "+numero+" é:")
for(let i=1; i<=10; i++){
    let multiplicacao=numero*i
    console.log(numero+"x"+i+"="+multiplicacao)
}

console.log("\n")

console.log("5 – Canção dos Patinhos 🐤;\n")
let p = Number(prompt("Digite um número:"))
for (let i=p; i>0; i--) {
  console.log(i + " patinhos foram passear\nAlém das montanhas para brincar\nA mamãe gritou:\nQuá, quá, quá, quá")
   if (i - 1 > 0) {
    console.log("Mas só " + (i - 1) + " patinhos voltaram de lá.");
  } else {
    console.log("Mas nenhum patinho voltou de lá.");
  }
}

console.log("\n")

console.log("6 – Classificação de Idades;\n")
for(let i=1; i<=10; i++){
    let idade = Number(prompt("Qual sua idade:"))
    if (idade >= 18){
        console.log("Maior de idade")
    } else{
        console.log("Menor de idade")
    }
}

console.log("\n")

console.log("7 – Eleição;\n")
for(let i=1; i<=5; i++){
    let voto = Number(prompt("Qual seu voto:"))
    if (voto === 1 || voto === 2 || voto ===  3 || voto === 4){
        console.log("Candidato")
    } else if(voto === 5){
        console.log("Voto nulo")
    } else if(voto === 6){
        console.log("Voto em branco")
    } else{
        console.log("Voto Inválido")
    }
}

console.log("\n")

console.log("8 – Soma dos Números;\n")
let soma = 0
for(let i = 1; i <= 5; i++) {
let num = Number (prompt("Informe um numero") )
soma = soma + num
}
console.log (soma)


console.log("\n")

console.log("9 – Números Pares;\n")
for(let i=1; i<=50; i++){
    if (i % 2 === 0){
        console.log(i)
    } else{
    }
}

console.log("\n")

console.log("10 – Contador Personalizado;\n")
let inicial = Number(prompt("Digite o número inicial:"))
let final = Number(prompt("Digite o número final:"))
for(let i = inicial; i <= final; i++) {
    console.log(i)
}

console.log("\n")

console.log("fim")