// 1
function ex1(){
    let ex1 = document.getElementById("nome").value
    let minusculo = document.getElementById("ex1")
    minusculo.innerText = ex1.toLowerCase()
}

// 2
function ex2(){
    let ex2 = document.getElementById("nome2").value
    let letras = document.getElementById("ex2")
    letras.innerText = ex2.length
}

// 3
function ex3(){
    let ex3 = document.getElementById("palavra3").value
    let ultimaLetra = document.getElementById("ex3")
    ultimaLetra.innerText = ex3[ex3.length - 1]
}

// 4
function ex4(){
    let ex4 = document.getElementById("texto4").value
    let quatroLetras = document.getElementById("ex4")
    quatroLetras.innerText = ex4.slice(0, 4)
}

// 5
function ex5(){
    let ex5 = document.getElementById("texto5").value
    let ultimasTres = document.getElementById("ex5")
    ultimasTres.innerText = ex5.slice(-3)
}

// 6
function ex6(){
    let nome = document.getElementById("nome6").value
    let sobrenome = document.getElementById("sobrenome6").value
    let resultado = document.getElementById("ex6")
    resultado.innerText = "Nome completo: " + nome + " " + sobrenome
}

// 7
function ex7(){
    let ex7 = document.getElementById("nome7").value
    let primeiraLetra = document.getElementById("ex7")
    primeiraLetra.innerText = "A primeira letra do seu nome é: " + ex7.slice(0,1).toUpperCase()
}

// 8
function ex8(){
    let ex8 = document.getElementById("nome8").value
    let nomeFormatado = document.getElementById("ex8")
    nomeFormatado.innerText = "Olá, " + ex8.toUpperCase() + "! Seja bem-vinda ao sistema."
}

// 9
function ex9(){
    let nome = document.getElementById("nome9").value
    let resultado = document.getElementById("ex9")

    if(nome.length <= 5){
        resultado.innerText = "Nome curto"
    } else {
        resultado.innerText = "Nome longo"
    }
}