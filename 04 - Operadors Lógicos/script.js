// && = e
// || = ou
// ! = não

let idade = 20
let convite = true
console.log(idade >= 18 && convite == true)
console.log("---------------------")

let ingresso = "sim"
let nomeLista = "sim"
console.log(ingresso=="sim" || nomeLista =="sim")

console.log("---------------------")
let calor = true
console.log (calor)
console.log(!calor)
console.log("---------------------")

/* Para assistir um filme de terror no cinema é preciso ter idade maior ou igual a 14 ou estar acompanhado do responsável */
let idade1 = Number(prompt("Informe sua idade:"))
let acompanhada = (prompt("Informe se está acompanhada:"))
console.log(idade1 >= 14 || acompanhada == "sim")

/* Para ser aprovado no Senai o aluno precisa ter nota maior ou igual a 50 e ter frequência maior ou igual a 75 */
let nota = Number(prompt("Informe sua nota:"))
let frequência = Number(prompt("Informe sua frequência:"))
console.log(nota >= 50 && frequencia>=75)

/* Para fazer login no computador, o aluno deve colocar o usuário igual a TDS2 e a senha igual a senai2026 */
let login = prompt("Informe o login:")
let senha = prompt("Informe a senha:")

console.log(senha == "senai2026" && login == "TDS2")
