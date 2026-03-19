console.log("1 - Classificação de Nota;");
let nota = Number(prompt("Informe sua nota:"));
if (nota >= 9) {
    console.log("Excelente");
} else if (nota >= 7) {
    console.log("Bom");
} else if (nota >= 5) {
    console.log("Regular");
} else {
    console.log("Insuficiente");
}


console.log("\n2 - Sistema de Aprovação Escolar;");
let nota1 = Number(prompt("Informe sua nota:"));
let faltas = Number(prompt("Informe o número de faltas:"));
if (nota1 >= 7 && faltas <= 10) {
    console.log("Aprovado");
} else if (nota1 >= 5 && faltas <= 10) {
    console.log("Recuperação");
} else {
    console.log("Reprovado");
}


console.log("\n3 - Verificação de Idade;");
let idade = Number(prompt("Informe sua idade:"));
if (idade < 12) {
    console.log("Criança");
} else if (idade <= 17) {
    console.log("Adolescente");
} else if (idade <= 59) {
    console.log("Adulto");
} else {
    console.log("Idoso");
}


console.log("\n4 - Classificação de Temperatura;");
let temperatura = Number(prompt("Informe a temperatura:"));
if (temperatura >= 35) {
    console.log("Muito Quente");
} else if (temperatura >= 25) {
    console.log("Quente");
} else if (temperatura >= 15) {
    console.log("Agradável");
} else {
    console.log("Frio");
}


console.log("\n5 - Sistema de Descontos;");
let compra = Number(prompt("Informe o valor da compra:"));
if (compra >= 500) {
    console.log("20% de desconto");
} else if (compra >= 300) {
    console.log("15% de desconto");
} else if (compra >= 100) {
    console.log("10% de desconto");
} else {
    console.log("Sem desconto");
}


console.log("\n6 - Classificação de Velocidade;");
let velocidade = Number(prompt("Informe a velocidade:"));
if (velocidade <= 60) {
    console.log("Dentro do limite");
} else if (velocidade <= 80) {
    console.log("Atenção");
} else if (velocidade <= 100) {
    console.log("Multa leve");
} else {
    console.log("Multa grave");
}


console.log("\n7 - Turno de Estudo;");
let turno = prompt("Informe o turno (M/V/N):");
if (turno == "M") {
    console.log("Matutino");
} else if (turno == "V") {
    console.log("Vespertino");
} else if (turno == "N") {
    console.log("Noturno");
} else {
    console.log("Turno inválido");
}


console.log("\n8 - Avaliação de IMC;");
let imc = Number(prompt("Informe o IMC:"));
if (imc < 18.5) {
    console.log("Abaixo do peso");
} else if (imc < 25) {
    console.log("Peso normal");
} else if (imc < 30) {
    console.log("Sobrepeso");
} else {
    console.log("Categoria Inválida");
}


console.log("\n9 - Classificação de Pontuação;");
let pontos = Number(prompt("Informe a sua pontuação:"));
if (pontos >= 1000) {
    console.log("Nível Mestre");
} else if (pontos >= 700) {
    console.log("Nível Avançado");
} else if (pontos >= 400) {
    console.log("Nível Intermediário");
} else {
    console.log("Iniciante");
}


console.log("\n10 - Verificação de Horário;");
let horas = Number(prompt("Informe a hora (0-23):"));
if (horas >= 6 && horas <= 11) {
    console.log("Bom dia");
} else if (horas >= 12 && horas <= 17) {
    console.log("Boa tarde");
} else if (horas >= 18 && horas <= 23) {
    console.log("Boa noite");
} else {
    console.log("Boa madrugada");
}


console.log("\n11 - Categoria de Produto;");
let codigo = Number(prompt("Informe o código do produto (1-4):"));
if (codigo == 1) {
    console.log("Alimento");
} else if (codigo == 2) {
    console.log("Eletrônico");
} else if (codigo == 3) {
    console.log("Roupas");
} else if (codigo == 4) {
    console.log("Livros");
} else {
    console.log("Categoria inválida");
}


console.log("\n12 - Situação Financeira;");
let saldo = Number(prompt("Informe o saldo:"));
if (saldo >= 2000) {
    console.log("Ótima");
} else if (saldo >= 1000) {
    console.log("Boa");
} else if (saldo >= 0) {
    console.log("Regular");
} else {
    console.log("Endividado");
}


console.log("\n13 - Classificação de Idade para CNH;");
let idadeCNH = Number(prompt("Informe a idade:"));
if (idadeCNH < 18) {
    console.log("Não pode dirigir");
} else if (idadeCNH < 65) {
    console.log("Pode dirigir");
} else {
    console.log("Renovação especial");
}


console.log("\n14 - Avaliação de Atendimento;");
let notaAtend = Number(prompt("Informe a nota de atendimento (0-10):"));
if (notaAtend >= 9) {
    console.log("Excelente");
} else if (notaAtend >= 7) {
    console.log("Bom");
} else if (notaAtend >= 5) {
    console.log("Regular");
} else {
    console.log("Ruim");
}