//Operador Ternário
let idade = 18
let situação 


if(idade>=18){
    situação = " Maior"
}else{
    situação = "Menor"
}
console.log(situação)
console.log("---------")
let idade2 =18
let situação2 = idade 
console.log(situação2)
console.log("--------------------")

let nota = Number(prompt("Qual a nota?"))
let resultado = nota >= 7 ? "Aprovado" : "Reprovado"

let senha = prompt("Qual a senha?")
let acesso = senha == "1234" ? "Acesso permitido" : "Acesso Negado"
console.log(acesso)

console.log("------------------")

/*Peça um número para o usuário e verifique se esse número é ímpar ou par*/

let num = Number(prompt("Fala um número?"))
let aux = numero % 2
let valor = aux == 0 ? "Par" : "Ímpar"
console.log(valor)

console.log("------------------")

/*Peça uma temperatura para o usuário, se ela for maior ou igual a 30, mostre "está calor", senão, mostre "não está calor"*/

let temp = Number(prompt("diga a temperatura?"))
let sencacao = temp >= 30 ? "está calor" : "não está calor"
console.log(sencacao)

console.log("------------------")

/*Peça um número para o usuário e diga se ele é positivo, negativo ou se é zero*/
let numero = Number(prompt("diga um número:"))
let escolha = numero < 0 ? "Negativo" : numero > 0 ? "Positivo" : "Nulo"
console.log(escolha)

/*Peça uma nota para o aluno e classifique,
- "Execelente" para nota maior ou igual a 9
- "Bom" para nota maior ou igual a 7
- "Regular" para nota maior ou igual a 5
- "Reprovado" caso contrário*/

let nota1 = Number(prompt("Digite sua nota:"))
let escola = nota1 >= 9 ? "Exelente" : nota1 >= 7 ? "Bom" : nota1 >= 5 ? "Regular" : Reprovado
console.log(escola)

