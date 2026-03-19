console.log("1 - Dobro do Número;\n")
function dobro(numero){
    console.log("O dobro é:", numero * 2)
}
let numero1 = Number(prompt("Digite um número:"))
dobro(numero1)

console.log("\n")

console.log("2 - Área do Retângulo;\n")
function calcularArea(base, altura){
    let area = base * altura
    console.log("A área do retângulo é:", area)
}
let base = Number(prompt("Digite a base do retângulo:"))
let altura = Number(prompt("Digite a altura do retângulo:"))
calcularArea(base, altura)

console.log("\n")

console.log("3 - Conversão de Temperatura;\n")
function converterParaFahrenheit(celsius){
    let fahrenheit = celsius * 1.8 + 32
    console.log("Temperatura em Fahrenheit:", fahrenheit)
}
let celsius = Number(prompt("Digite a temperatura em Celsius:"))
converterParaFahrenheit(celsius)

console.log("\n")

console.log("4 - Verificação de Nota;\n")
function verificarNota(nota){
    if(nota >= 7){
        console.log("Aprovado")
    }else if(nota >= 5){
        console.log("Recuperação")
    }else{
        console.log("Reprovado")
    }
}
let nota = Number(prompt("Digite a nota:"))
verificarNota(nota)

console.log("\n")

console.log("5 - Número Positivo ou Negativo;\n")
function verificarNumero(numero){
    if(numero > 0){
        console.log("Positivo")
    }else if(numero < 0){
        console.log("Negativo")
    }else{
        console.log("Zero")
    }
}
let numero2 = Number(prompt("Digite um número:"))
verificarNumero(numero2)

console.log("\n")

console.log("6 - Contar Pares Até o Número;\n")
function contarPares(numero){
    for(let i = 0; i <= numero; i++){
        if(i % 2 === 0){
            console.log(i)
        }
    }
}
let numero3 = Number(prompt("Digite um número:"))
contarPares(numero3)

console.log("\n")

console.log("7 - Soma de Intervalo;\n")
function somarIntervalo(num1, num2){
    let soma = 0
    for(let i = num1; i <= num2; i++){
        soma += i
    }
    console.log("A soma do intervalo é:", soma)
}
let inicio = Number(prompt("Digite o primeiro número:"))
let fim = Number(prompt("Digite o segundo número:"))
somarIntervalo(inicio, fim)

console.log("\n")

console.log("8 - Repetir Nome;\n")
function repetirNome(nome, quantidade){
    for(let i = 1; i <= quantidade; i++){
        console.log(nome)
    }
}
let nome = prompt("Digite um nome:")
let vezes = Number(prompt("Quantas vezes repetir?"))
repetirNome(nome, vezes)

console.log("\n")

console.log("9 - Tabuada;\n")
function tabuada(numero){
    for(let i = 1; i <= 10; i++){
        console.log(numero + " x " + i + " = " + (numero * i))
    }
}
let numero4 = Number(prompt("Digite um número para ver a tabuada:"))
tabuada(numero4)

console.log("\n")

console.log("10 - Contagem Decrescente Personalizada;\n")
function contagemPersonalizada(numero){
    for(let i = numero; i >= 0; i--){
        if(i % 2 !== 0){
            console.log(i)
        }
    }
}
let numero5 = Number(prompt("Digite um número para iniciar a contagem:"))
contagemPersonalizada(numero5)

console.log("\n")

console.log("11 - Média de Três Notas;\n")
function mediaAluno(n1, n2, n3){
    let media = (n1 + n2 + n3) / 3

    console.log("Média:", media)

    if(media >= 7){
        console.log("Aprovado")
    }else if(media > 5){
        console.log("Recuperação")
    }else{
        console.log("Reprovado")
    }
}
let nota1 = Number(prompt("Digite a primeira nota:"))
let nota2 = Number(prompt("Digite a segunda nota:"))
let nota3 = Number(prompt("Digite a terceira nota:"))
mediaAluno(nota1, nota2, nota3)

console.log("\n")
console.log("fim")