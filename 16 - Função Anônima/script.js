let dobro2 = function(numero) {
  return numero * 2
}
let auxiliar = dobro2(3)
console.log(auxiliar)



let multiplicar = function(num1, num2) {
  return num1 * num2
}

let num1 = Number(prompt("Escolha um número"))
let num2 = Number(prompt("Escolha outro número"))
let total = multiplicar(num1, num2)
console.log(total)



let situacao = function(nota1, nota2, nota3) {
  let media = (nota1 + nota2 + nota3) / 3
  if (media >= 5) {
    return "Aprovado"
  } else {
    return "Reprovado"
  }
}

let nota1 = Number(prompt("Primeira nota:"))
let nota2 = Number(prompt("Segunda nota:"))
let nota3 = Number(prompt("Terceira nota:"))
let aprovacao = situacao(nota1, nota2, nota3)
console.log(aprovacao)



let desconto = function(valor) {
  if (valor>300) {
    return "O novo valor é E$",valor*0,85 
  } else{
    return "Sem desconto"
  }
}
let valor = Number(prompt("Qual foi o valor pago?"))
console.log(desconto)



let repeticao = function(i) {
    for (let i=0; i<=50; i++) {
        if (i % 2 === 0) {
            return i
        }
    } 
}
console.log(repeticao)

let idade = function(anos) {
    return "Meses: ",anos*12,", Dias: ",anos*365  
}
let anos = Number(prompt("Qual sua idade em anos?"))
console.log(idade)
