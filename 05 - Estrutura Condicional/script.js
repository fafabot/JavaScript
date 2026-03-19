let idade = 14
console.log(idade >= 14)
console.log("O aluno tem idade maior ou igual a 14?", idade >= 14)
if(idade>=14){
    console.log("O aluno pode fazer os cursos do Senai")
}
console.log("------------------------------------")
let salario = Number(prompt("Qual seu salário?"))
if (salario<=1500){
    console.log("Você terá um aumento")
} else{
    console.log("Você não terá um aumento")
}

console.log("--------------------------------")
let numero = Number(prompt("Informe um número:"))
let resto = numero % 2
if (resto==0){
    console.log("O número é par")
} else {
    console.log("O número é impar")
}


console.log("--------------------------------")

/*Para fazer o curso de panificação do Senai o aluno deve er conhecimento de boas práticas na cozinha, verifique se ele tem esse conhecimento e mostre se ele pode ou não fazer o curso*/


console.log("------------------------------------")
let praticas = Number(prompt("Você tem conhecimentos de boas práticas na cozinha?"))
if (praticas=="sim"){
    console.log("Você pode fazer o curso")
} else{
    console.log("Você não pode fazer o curso")
}

console.log("------------------------------------")

/* Para ser aprovado no Senai, o aluno deve ter nota minima de 50, verifique a nota informada pelo usuário e veja se ele será aprovado*/
let nota = Number(prompt("Qual sua nota"))