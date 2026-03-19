console.log("1 - Declare duas variáveis numéricas e faça demais contas;\n")
let num1 = 10, num2 = 5
let soma = num1 + num2
let sub = num1 - num2
let mult = num1 * num2
let div = num1 / num2
let mod = num1 % num2
console.log("A soma deles é: "+soma)
console.log("A subtração deles é: "+sub)
console.log("A multiplicação deles é: "+mult)
console.log("A divisão deles é: "+div)
console.log("O resto da divisão entre eles é: "+mod)

console.log("\n")

console.log("2 - Área de um Retângulo;\n")
let alt = Number(prompt ("Qual a largura do Retângulo?"))
let larg = Number(prompt ("Qual a altura do Retângulo?"))
let area = alt+larg
console.log("A área do retângulo é: "+area)

console.log("\n")

console.log("3 - Dobro e Metade;\n")
let numero = 7
let dobro=numero^2
let metade=numero/2
console.log("O dobro dele é: "+dobro)
console.log("A metade dele é: "+metade)

console.log("\n")

console.log("4 - Média Aritmética;\n")
let nota1=10
let nota2=9
let nota3=8.5
let media=(nota1+nota2+nota3)/3
console.log("A média entre as três notas é: "+media)

console.log("\n")

console.log("5 - Conversão de Temperatura;\n")
let temperatura=26
let farenheit=(temperatura*9/5)+32
console.log("A temperatura "+temperatura+"°C em Fahrenheit é igual a: "+farenheit+"°F")

console.log("\n")

console.log("6 - Valor da Compra;\n")
let valor_produto = Number(prompt("Qual o valor do produto?"))
let quant_produto = Number(prompt("Qual a quantidade de produtos comprados?"))
let total_compra = valor_produto*quant_produto
console.log("O valor da compra foi de: R$"+total_compra)

console.log("\n")

console.log("7 - Divisão da Conta;\n")
let valor_conta = Number(prompt("Qual o valor da conta?"))
let quant_pessoas = Number(prompt("Qual a quantidade de pessoas a dividir a conta?"))
let valor_pessoa = valor_conta/quant_pessoas
console.log("Cada pessoa vai pagar: R$"+valor_pessoa)

console.log("\n")

console.log("8 - Idade em Meses;\n")
let idade_anos = Number(prompt("Qual a sua idade em anos?"))
let idade_meses = idade_anos*12
console.log("Sua idade em meses é: "+idade_meses)

console.log("\n")

console.log("9 - Divisão Exata;\n")
let n1 = Number(prompt("Digite o primeiro número:"))
let n2 = Number(prompt("Digite o segundo número:"))
let dividir=n1/n2
let resto=n1%n2
console.log("O resultado da divisão é: "+dividir)
console.log("O resto da divisão é: "+resto)

console.log("\n")

console.log("10 - Horas em Minutos;\n")
let horas = Number(prompt("Digite um valor em horas:"))
let minutos = horas*60
console.log("A quantidade de horas informadas, em minutos é: "+minutos)

console.log("\nfim")