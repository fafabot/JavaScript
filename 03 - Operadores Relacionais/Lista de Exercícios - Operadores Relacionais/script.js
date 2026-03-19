console.log("1 - Comparando Dois Números;\n")
let numero1 = Number(prompt("Informe um número:"))
let numero2 = Number(prompt("Informe um número:"))
console.log("O primeiro é maior que o segundo? R:", numero1>numero2)
console.log("O primeiro é menor ou igual o segundo? R:",numero1<=numero2)
console.log("O primeiro é igual o segundo? R:",numero1==numero2)

console.log("\n")

console.log("2 - Idade para Votar;\n")
let idade = Number(prompt("Informe sua idade:"))
console.log("Você tem idade para votar? R:", idade<=16)

console.log("\n")

console.log("3 - Maioridade;\n")
let idosa = Number(prompt("Informe sua idade:"))
console.log("Você é maior de idade? R:", idosa>=18)
console.log("Você é idoso? R:", idosa>=60)

console.log("\n")

console.log("4 - Verificação de Login;\n")
let login = prompt("Informe o nome de usuário:")
console.log(login=="admin")

console.log("\n")

console.log("5 - Saldo Bancário;\n")
let conta = Number(prompt("Informe o saldo em sua conta:"))
let saque = Number(prompt("Qual o valor que deseja retirar?"))
console.log("É possível efetuar o saque? R:",conta<saque)
let saldo = conta-saque
console.log("O saldo será maior que R$100 após o saque? R:",saldo>100)

console.log("\n")

console.log("6 - Média do Aluno;\n")
let nota1 = Number(prompt("Informe a primeira nota:"))
let nota2 = Number(prompt("Informe a segunda nota:"))
let media = (nota1+nota2)/2
console.log("A média foi maior ou igual a 6? R:",media>=6 )

console.log("\n")

console.log("7 - Preço do Produto;\n")
let valor = Number(prompt("Informe o valor da compra:"))
console.log("A compra custa mais que R$50? R:", valor>50)
console.log("A compra custa menos ou igual a R$20? R:", valor<=20)

console.log("\n")

console.log("8 - Velocidade da Via;\n")
let velocidade = Number(prompt("Informe a velocidade do carro:"))
console.log("O carro ultrapassou os 80km/h?? R:", velocidade>80)
console.log("O carro ultrapassou os 120km/h? R:", velocidade<120)

console.log("\n")

console.log("9 - Altura para Brinquedo;\n")
let altura = Number(prompt("Informe sua altura:"))
console.log("Você pode entrar? R:", altura>=1.40)

console.log("\n")

console.log("10 - Nome Cadastrado;\n")
let nome = prompt("Informe o seu nome:")
console.log("Seu nome é igual a Maria? R:",nome=="Maria")
console.log("Seu nome é diferente de João? R:",nome!="João")

console.log("\n")

console.log("1️1 - Senha Simples;\n")
let senha = Number(prompt("Informe a senha:"))
console.log("A senha está correta? R:",senha==1234)

console.log("\n")

console.log("12 - Parcelamento;\n")
let compra = Number(prompt("Informe o valor da compra:"))
let parcelas = Number(prompt("Informe o número de parcelas"))
let parcela = compra/parcelas
console.log("A parcela é menor ou igual a 200? R:", parcela<=200)

console.log("\n")

console.log("13 - Idade em Meses;\n")
let anos = Number(prompt("Informe sua idade em anos:"))
let meses = anos*12
console.log("Você tem mais de 200 meses de vida? R:",meses>200)

console.log("\nfim")