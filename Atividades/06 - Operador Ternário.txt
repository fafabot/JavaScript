
console.log("1 - Verificação de Maioridade;\n")
let idade = Number(prompt("Informe sua idade:"))
let idade2 = idade >= 18 ? "Maior de idade" : "Menor de idade"
console.log(idade2)

console.log("\n")

console.log("2 - Par ou Ímpar;\n")
let n = Number(prompt("Informe um numero:"))
let aux = n % 2
let sobra = aux == 0 ? "Par" : "Ímpar"
console.log(sobra)

console.log("\n")

console.log("3 - Resultado Escolar;\n")
let nota = Number(prompt("Informe sua nota:"))
let resultado = nota >= 6 ? "Aprovado" : "Reprovado"
console.log(resultado)

console.log("\n")

console.log("4 - Saldo Bancário;\n")
let dinheiro = Number(prompt("Informe seu saldo:"))
let saldo = dinheiro > 0 ? "Saldo positivo" : "Saldo negativo"
console.log(saldo)

console.log("\n")

console.log("5 - Desconto na Compra;\n")
let valor = Number(prompt("Informe o valor da compra:"))
let desconto = valor >= 100 ? "Você vai receber 10% de desconto. O valor final ficou: R$"+ valor*0.9 : "O valor não se alterou: R$" + valor
console.log(desconto)

console.log("\n")

console.log("6 - Entrada em Evento;\n")
let idadeEntrada = Number(prompt("Informe sua idade:"))
let permissao = idadeEntrada >= 18 ? "Entrada permitida" : "Entrada proibida"
console.log(permissao)

console.log("\n")

console.log("7 - Login Simples;\n")
let usuario = prompt("Informe o nome de usuário:")
let login = usuario == "admin" ? "Acesso liberado" : "Acesso negado"
console.log(login)

console.log("\n")

console.log("8 - Temperatura;\n")
let temperatura = Number(prompt("Informe a temperatura atual:"))
let clima = temperatura > 30 ? "Está quente" : "Temperatura normal"
console.log(clima)

console.log("\n")

console.log("9 - Número Positivo ou Negativo;\n")
let num = Number(prompt("Informe um número:"))
let positividade = num > 0 ? "Número positivo" : "Número negativo ou zero"
console.log(positividade)

console.log("\n")

console.log("10 - Faixa Etária;\n")
let faixa = Number(prompt("Informe sua idade:"))
let etaria = faixa < 12 ? "Criança" : faixa < 18 ? "Adolescente" : faixa < 60 ? "Adulto" : "Idoso"
console.log(etaria)

console.log("\n")

console.log("11 - Velocidade do Veículo;\n")
let velo = Number(prompt("Informe a velocidade:"))
let multa = velo > 80 ? "Multado" : "Dentro do limite"
console.log(multa)

console.log("\n")

console.log("12 - Compra Aprovada;\n")
let compra = Number(prompt("Informe o valor da compra:"))
let limite = Number(prompt("Informe o limite do cartão:"))
let aprovacao = compra <= limite ? "Compra aprovada" : "Compra recusada"
console.log(aprovacao)

console.log("\n")

console.log("13  - Sistema de Pontuação de Jogo;\n")
let pontos = Number(prompt("Informe a sua pontuação:"))
let pontuacao = pontos < 100 ? "Iniciante" : pontos < 500 ? "Intermediário" : pontos < 1000 ? "Avançado" : "Mestre"
console.log(pontuacao)

console.log("\n")

console.log("fim")