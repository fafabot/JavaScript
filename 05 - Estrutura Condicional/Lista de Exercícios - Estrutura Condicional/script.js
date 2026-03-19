console.log("1 - Verificação de Maioridade;\n")
let idade = Number(prompt("Informe sua idade:"))
if(idade>=18){
    console.log("Você é maior de idade")
} else{
    console.log("Você é menor de idade")
}

console.log("\n")

console.log("2 - Verificação de Paridade;\n")
let numero = Number(prompt("Informe um número:"))
let resto = numero % 2
if (resto==0){
    console.log("O número é par")
} else {
    console.log("O número é impar")
}

console.log("\n")

console.log("3 - Verificação de Aprovado;\n")
let nota = Number(prompt("Informe sua nota:"))
if(nota>=7){
    console.log("Aprovado")
} else{
    console.log("Reprovado")
}

console.log("\n")

console.log("4 - Comparar Idade para Entrada em Evento;\n")
let idadeEvento = Number(prompt("Informe sua idade:"))
if(idade>=18){
    console.log("Entrada permitida")
} else{
    console.log("Entrada proibida")
}

console.log("\n")

console.log("5 - Verificar Senha;\n")
let senha = prompt("Informe a senha:")
if(senha=="1234"){
    console.log("Senha correta")
} else{
    console.log("Senha incorreta")
}

console.log("\n")

console.log("6 - Verificar Temperatura;\n")
let temperatura = Number(prompt("Informe a temperatura:"))
if(temperatura>30){
    console.log("Está quente")
} else{
    console.log("Está frio")
}

console.log("\n")

console.log("7 - Verificar se Número é Positivo ou Negativo;\n")
let n = Number(prompt("Informe um número:"))
if(n>0){
    console.log("Número positivo")
} else if (n<0){
    console.log("Número Negativo")
} else{
    console.log("Número nulo")
}

console.log("\n")

console.log("8 - Verificar Saldo Bancário;\n")
let saldo = Number(prompt("Informe seu saldo:"))
let resgate = Number(prompt("Informe quanto quer resgatar:"))
if(saldo>=resgate){
    console.log("Saque realizado")
} else{
    console.log("Saldo insuficiente")
}

console.log("\n")

console.log("10 - Verificar Número Maior;\n")
let compra = Number(prompt("Informe o valor da compra:"))
if(compra>=200){
    console.log("Desconto aplicado")
} else{
    console.log("Sem desconto")
}

console.log("\n")

console.log("8 - Verificar Saldo Bancário;\n")
let n1 = Number(prompt("Informe o primeiro número:"))
let n2 = Number(prompt("Informe o segundo número:"))
if(n1>n2){
    console.log("O primeiro é maior que o segundo")
} else if (n2>n1){
    console.log("O segundo é maior que o primeiro")
} else{ 
    console.log("Os números são os mesmos")
}

console.log("\n")

console.log("11 - Verificar Login;\n")
let login = prompt("Informe o nome de usuário:")
if(login="admin"){
    console.log("Acesso permitido")
} else{
    console.log("Acesso negado")
}

console.log("\n")

console.log("12 - Classificação de Nota;\n")
let nota1 = Number(prompt("Informe a sua nota:"))
if(nota1>=9){
    console.log("Excelente")
} else{
    console.log("Pode melhorar")
}

console.log("\n")

console.log("13 - Verificar Horário;\n")
let horas = Number(prompt("Informe o horário (0 a 23):"))
if(horas>=8 && horas<=18){
    console.log("Horário de funcionamento")
} else{
    console.log("Fora do horário")
}

console.log("\n")

console.log("14 - Verificar Cadastro;\n")
let chuva = prompt("Você tem cadastro? (true/false):")
if (chuva=="true") {
    console.log("Usuário cadastrado")
} else{
    console.log("Cadastro necessário")
}

console.log("\nfim")