let formulario = document.getElementById("formulario")
let descricao = document.getElementById("descricao")
let valor = document.getElementById("valor")
let tipo = document.getElementById("tipo")
let listagem = document.getElementById("listagem")

let totalEntrada = document.getElementById("totalEntrada")
let totalSaida = document.getElementById("totalSaida")
let totalSaldo = document.getElementById("totalSaldo")
let saldoCard = document.querySelector(".saldo")
let totalMovimentacoes = document.getElementById("totalMovimentacoes")
let qtdEntradas = document.getElementById("qtdEntradas")
let qtdSaidas = document.getElementById("qtdSaidas")

let movimentacoes = []

formulario.addEventListener("submit", function(event) {
  event.preventDefault()

  let texto = descricao.value
  let numero = Number(valor.value)
  let categoria = tipo.value

  movimentacoes.push({
    descricao: texto,
    valor: numero,
    tipo: categoria
  })

  descricao.value = ""
  valor.value = ""

  mostrar()
})

function mostrar() {
  listagem.innerHTML = ""

  let entradas = 0
  let saidas = 0
  let qtdEnt = 0
  let qtdSai = 0

  for (let i = 0; i < movimentacoes.length; i++) {
    let item = movimentacoes[i]

    let li = document.createElement("li")
    li.classList.add(item.tipo)

    li.innerHTML = item.descricao + " - R$ " + item.valor.toFixed(2)

    listagem.appendChild(li)

    if (item.tipo == "entrada") {
      entradas = entradas + item.valor
      qtdEnt++
    } else {
      saidas = saidas + item.valor
      qtdSai++
    }
  }

  let saldo = entradas - saidas

  totalEntrada.innerText = "R$ " + entradas.toFixed(2)
  totalSaida.innerText = "R$ " + saidas.toFixed(2)
  totalSaldo.innerText = "R$ " + saldo.toFixed(2)
  totalMovimentacoes.innerText = movimentacoes.length
  qtdEntradas.innerText = qtdEnt
  qtdSaidas.innerText = qtdSai

  saldoCard.classList.remove("positivo", "negativo")
  if (saldo >= 0) {
    saldoCard.classList.add("positivo")
  } else {
    saldoCard.classList.add("negativo")
  }
}