let n
let i=1
do{
     n = Number(prompt("Digite um número:"))
    if (n>10){
        console.log("Maior que 10")
    } else{
        console.log("Menor que 10")
    }
    i++
} while (i<=3)


i = 1   
let soma = 0
n = 0
do{
    n = Number(prompt("Digite um número"))
    i++
    soma=soma+n
} while (i<3)
console.log (soma)

console.log("6 - Sequência numérica;\n")
let e=0
do{
    console.log(e)
    e+=3
}
while (e<=99)