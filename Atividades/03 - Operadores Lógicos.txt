console.log("1 - Comparando Dois Números;\n")
let idade = Number(prompt("Informe a idade:"))
let cnh = prompt("Tem CNH? (sim/não)")
console.log("Você pode dirigir? R:",idade>=18 && cnh =="sim")

console.log("\n")

console.log("02 - Aprovação Escolar;\n")
let nota = Number(prompt("Informe sua nota:"))
let faltas = Number(prompt("Informe quantos dias você faltou:"))
console.log("Você foi aprovado? R:",nota>=6 && faltas<=10)

console.log("\n")

console.log("03 - Acesso ao Evento;\n")
let idade1 = Number(prompt("Informe sua idade:"))
let convite = Number(prompt("Tem convite? (sim/não):"))
console.log("Teve acesso liberado? R:",idade1>=18 && convite=="sim")

console.log("\n")

console.log("04 - Empréstimo Bancário;\n")
let salario = Number(prompt("Informe seu salário:"))
let nomeLimpo = prompt("Está com nome limpo? (sim/não):")
console.log("Pode pedir empréstimo? R:",salario>=2500 && nomeLimpo=="sim")

console.log("\n")

console.log("05 - Entrada;\n")
let conviteCasamento = prompt("Está com convite? (sim/não):")
let nomeLista = prompt("Está com nome na lista? (sim/não):")
console.log("Tem a entrada liberada? R:",conviteCasamento =="sim" || nomeLista =="sim")

console.log("\n")

console.log("06 - Desconto na Barbearia;\n")
let barbeiro = Number(prompt("Qual o valor da compra?"))
let vip = prompt("É cliente VIP? (sim/não):")
console.log("Desconto liberado? R:",barbeiro >=80 || vip =="sim")

console.log("\n")

console.log("07 - Recuperação Escolar;\n")
let nota1 = Number(prompt("Informe sua nota:"))
let extra = prompt("Fez trabalho extra? (sim/não):")
console.log("Passou na recuperação? R:",nota1 >5 && extra =="sim")

console.log("\n")

console.log("08 - Liberação de Sistema;\n")
let senhaDefinida = "1234"
let senhaDigitada = prompt("Informe sua senha:")
let digitalReconhecida = prompt("Digital reconhecida? (sim/não):")
console.log("Acesso liberado ao App? R:", senhaDigitada == senhaDefinida && digitalReconhecida == "sim")

console.log("\n")

console.log("09 - Conta Bloqueada;\n")
let bloqueada = prompt("A conta está bloqueada? (sim/não)")
console.log("A conta está liberada? R:",bloqueada =="não")

console.log("\n")

console.log("10 - Cadastro Incompleto;\n")
let temCadastro = prompt("A conta foi criada? (sim/não)")
console.log("Precisa fazer cadastro? R:",temCadastro =="não")

console.log("11 - Acesso Completo;\n")
let login = prompt("Informe o login:")
let senha = prompt("Informe sua senha:")
console.log("Acesso liberado? R:", senha == "senai2026" && login == "ADMIN")

console.log("\n")

console.log("12 - Compra Parcelada;\n")
let valorCompra = Number(prompt("Qual o valor da compra?"))
let cartaoLoja = prompt("Possui o cartão da loja? (sim/não):")
let nomeLimpoCompra = prompt("Está com o nome limpo? (sim/não):")
console.log("Parcelamento liberado? R:", valorCompra > 300 && cartaoLoja == "sim" && nomeLimpoCompra == "sim")

console.log("\n")

console.log("13 - Matrícula;\n")
let idadeMatricula = Number(prompt("Informe sua idade:"))
let documentos = prompt("Entregou os documentos? (sim/não):")
let pagamento = prompt("Pagou a matrícula? (sim/não):")
console.log("Matrícula realizada? R:", idadeMatricula >= 17 && documentos == "sim" && pagamento == "sim")

console.log("\n")

console.log("14 - Entrada no Clube;\n")
let idadeClube = Number(prompt("Informe sua idade:"))
let socio = prompt("É sócio? (sim/não):")
let convidado = prompt("É convidado? (sim/não):")
console.log("Entrada liberada? R:", idadeClube >= 15 && (socio == "sim" || convidado == "sim"))

console.log("\nfim")