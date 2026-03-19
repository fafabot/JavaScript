console.log("1 - Primeira Função;\n")
function mensagemInicial(){
    console.log("Aprendendo funções com JS")
}
mensagemInicial()

console.log("\n")

console.log("2 - Mensagem de Boas-Vindas;\n")
function boasVindas(){
    console.log("Desenvolvimento de Sistemas!")    
}
boasVindas()
boasVindas()

console.log("\n")

console.log("3 - Contador Simples;\n")
function contarAteDez(){
    for (let i=1; i<=10; i++){
        console.log(i)
    }
}
contarAteDez()

console.log("\n")

console.log("4 - Contagem Regressiva;\n")
function contagemRegressiva(){
    for (let i=10; i>=1; i--){
        console.log(i)
    }
}
contagemRegressiva()

console.log("\n")

console.log("5 - Repetindo Mensagem;\n")
function mensagemRepetida(){
    for (let i=1; i<=5; i++){
        console.log("Eu gosto de JavaScript")
    }
}
mensagemRepetida()

console.log("\n")

console.log("6 - Números Pares;\n")
function numerosPares(){
    for (let i=0; i<=20; i++){
        if (i % 2 === 0){
            console.log(i)
        }
    }
}
numerosPares()

console.log("\n")

console.log("7 - Tabuada Fixa;\n")
function tabuada(){
    console.log("A tabuada do 18 é:")
    for(let i=1; i<=10; i++){
        console.log("18 x " + i + " = " + (18 * i))
    }
}
tabuada()

console.log("\n")

console.log("8 - Soma de duas variáveis;\n")
function mostrarSoma() {
  let num1 = Number(prompt("Digite o primeiro número:"))
  let num2 = Number(prompt("Digite o segundo número:"))
  let soma = num1 + num2
  console.log("A soma das variáveis é: " + soma)
}
mostrarSoma()

console.log("\n")

console.log("9 - Aviso Repetido;\n")
function alertaSistema(){
    for (let i=1; i<=3; i++){
        console.log("Atenção! Verifique as informações.")
    }
}
alertaSistema()

console.log("\n")

console.log("10 - Organização de Código;\n")
function mensagem1(){
    console.log("Olá")
}

function mensagem2(){
    console.log("Bom dia")
}

function mensagem3(){
    console.log("Tudo bem?")
}

mensagem1()
mensagem2()
mensagem3()

console.log("\n")

console.log("11 - Soma de números;\n")
function somaDeNumeros(){
    let numeros = []

    for(let i = 0; i < 5; i++) {
        let num = Number(prompt("Digite um número:"))
        numeros.push(num)
    }

    let soma = 0

    for(let i = 0; i < numeros.length; i++) {
        soma += numeros[i]
    }

    console.log("A soma dos números é:", soma)
}
somaDeNumeros()

console.log("\n")

console.log("12 - Cálculo de aumento;\n")
function calculoAumento(){
    let salario = Number(prompt("Digite o salário do funcionário:"))

    if (salario <= 3500){
        salario = salario + 500
        console.log("Novo salário com aumento: R$ " + salario)
    } else {
        console.log("Não terá aumento")
    }
}
calculoAumento()

console.log("\n")

console.log("13 - Aprovação Escolar;\n")
function aprovacaoEscolar(){
    let nota1 = Number(prompt("Digite a primeira nota:"))
    let nota2 = Number(prompt("Digite a segunda nota:"))
    let nota3 = Number(prompt("Digite a terceira nota:"))

    let media = (nota1 + nota2 + nota3) / 3

    console.log("Média:", media)

    if (media >= 6){
        console.log("Aprovado")
    } else if (media >= 5){
        console.log("Recuperação")
    } else {
        console.log("Reprovado")
    }
}
aprovacaoEscolar()

console.log("\n")

console.log("14 - Avaliação do atendimento;\n")
function avaliacaoAtendimento(){
    let nota = Number(prompt("Dê uma nota para o atendimento (0 a 10):"))

    if (nota == 9 || nota == 10){
        console.log("Excelente")
    } else if (nota == 8){
        console.log("Ótimo")
    } else if (nota == 7 || nota == 6){
        console.log("Bom")
    } else if (nota == 5){
        console.log("Regular")
    } else {
        console.log("Ruim")
    }
}
avaliacaoAtendimento()

console.log("\n")
console.log("fim")