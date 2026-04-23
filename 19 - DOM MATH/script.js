function arredondar(){
    let numero = document.getElementById("numero").value

    let round = document.getElementById("round")
    let ceil = document.getElementById("ceil")
    let floor = document.getElementById("floor")

    round.innerText = "round: " + Math.round(numero)
    ceil.innerText = "ceil: " + Math.ceil(numero)
    floor.innerText = "floor: " + Math.floor(numero)
}

function calcular(){
    let num = document.getElementById("num").value
    let potencia = document.getElementById("potencia").value
    let resultado = document.getElementById("resultado")
    resultado.innerText = Math.pow(num,potencia)
}

let n1 = 5
let n2 = 16
let n3 = 9
console.log(Math.max(n1, n2, n3))
console.log(Math.min(n1,n1,n3))

let n4 = 81
let n5 = 100
let n6 = 25
console.log(Math.sqrt(n4))
console.log(Math.sqrt(n5))
console.log(Math.sqrt(n6))