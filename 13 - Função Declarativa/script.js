// FUNCOES DECLARATIVAS
let a = 10
let b = 5
console.log(a+b)

let c = 54
let d = 14
console.log(c+d)

function mensagem() {
    console.log("Primeira função")
}
mensagem()
mensagem()
mensagem()
mensagem()

function saudacao() {
    let nome = prompt("Qual seu nome?")
    console.log("olá",nome)
}
saudacao()

console.log("--------------------")
function soma() {
    let n1 = Number(prompt("Digite um número"))
    let n2 = Number(prompt("Digite um número"))
    let soma = n1+n2
    console.log(soma)
}
soma()
soma()

function aprovacao() {
    let nota1 = Number(prompt("Qual a primeira nota?"))
    let nota2 = Number(prompt("Qual a segunda nota?"))
    let media = (nota1 + nota2) / 2
    if (media >= 7) {
        console.log("Aprovado")
    } else {
        console.log("Reprovado")
    }
}
aprovacao()

console.log("--------------------")

function pontuacao() {
    let pontos = Number(prompt("Qual foi sua pontuação?"))
    if (pontos >= 3000) {
        console.log("1° Lugar")
    } else if (pontos >=2200){
        console.log("2° Lugar")
    } 
    else if (pontos>=1800){
        console.log("3° Lugar")
    } else {
        console.log("Não foi desta vez:(")
    }
}
pontuacao()

function troco(){
    let valor = Number(prompt("Qual foi o valor da compra?"))
    let dinheiro = Number(prompt("Quanto foi dado?"))
    if(valor<dinheiro){
        let troco = dinheiro-valor
        console.log("Troco de R$"+troco)
    } else{
        console.log("Não haverá troco")
    }
}
troco()
troco()

function pedido(){
    let menu = Number(prompt("Qual opção você deseja?"))
    switch (cardapio)
{
    case 1:
        console.log("Motrando cardápio");
        break;
    case 2:
        console.log("Chamando graçom");
        break;
    case 3:
        console.log("Fechando a conta");
        break;
    default:
        console.log("Opção inválida");
        break;
}
}
pedido()
pedido()