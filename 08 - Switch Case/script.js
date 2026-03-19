/*Peça para o usuário o dia da semana, se for igual a quinta ou sexta mostre "Dia de ir para o Senai", para qualquer outro mostre "não é dia de ir para o Senai"*/
let diaDaSemana = prompt("Insira um dia da semana:")
switch (diaDaSemana)
{
    case "Quinta", "Sexta":
        console.log("Dia de ir para o Senai");
        break;
    default:
        console.log("Não é dia de ir para o Senai");
        break;
}

/*Um cardápio organiza os itens por número
1 = Pizza
2 = Salada
3 = Macarrão
4 Bedida */

switch (cardapio)
{
    case 1:
        console.log("Pizza");
        break;
    case 2:
        console.log("Salada");
        break;
    case 3:
        console.log("Macarrão");
        break;
    case 4:
        console.log("Bedida");
        break;    
    default:
        console.log("Opção inválida");
        break;
}