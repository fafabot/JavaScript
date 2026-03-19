

let numero = Number(prompt("Me cite um número:"))
console.log("A tabuada de "+numero+" é:")
for(let i=1; i<=10; i++){
    let multiplicacao=numero*i
    console.log(numero+"x"+i+"="+multiplicacao)
}

let grupo = Number(prompt("Qual seu número:"))
console.log("Seu grupo é:")
for(let i=1; i<=5; i++){
    if (grupo >= 10){
        console.log("Grupo A")
    } else{
        console.log("Grupo B")
    }
}

let idade = Number(prompt("Qual sua idade:"))
for(let i=1; i<=3; i++){
    if (idade >= 18){
        console.log("Maior de idade")
    } else{
        console.log("Menor de idade")
    }
}