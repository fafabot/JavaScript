const fs = require('fs')

fs.writeFileSync("mensagem.txt", "Criei um bloco de notas com node.js")

console.log("Arquivo criado com sucesso!")

fs.writeFileSync("identidade.txt", "Rafael de Aquino Souza\nTurma: TDS2\nCurso: Técnico em Desenvolvimento de Sistemas\nFilme Favorito: Zathura")

console.log("Arquivo criado com sucesso!")

const pessoa = {
    nome: "Rafael",
    idade: 17,
    curso: "Poá"
}
fs.writeFileSync("pessoa.json", JSON.stringify(pessoa))

console.log("Json criado com sucesso!")

const informacoes = {
    nome: "Rafael",
    idade: 17,
    telefone: "11999999999",
    email: "rafael@email.com"
}
fs.writeFileSync("informacoes.json", JSON.stringify(informacoes))

console.log("Json criado com sucesso!")

//Importar partes especificas da biblioteca word
const {
    Document, //Criar o word
    Packer, //Transformar o documento em um arquivo
    Paragraph, //Criar parágrafos
    TextRun //Adicionar textos
} = require("docx")

const doc = new Document({
    sections:[
        {
            properties: {},
            children:[
                new Paragraph({
                    children:[
                        new TextRun("Arquivo Word"),
                    ]
                }),
                new Paragraph({
                    children:[
                        new TextRun("Textos importantes"),
                    ]
                })
            
            ]
        }
    ]
})
Packer.toBuffer(doc).then((buffer) => {
    fs.writeFileSync("relatorio.docx", buffer)
    console.log("Arquivo Word criado com sucesso!")
})