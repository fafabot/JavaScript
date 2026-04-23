function adicionar() {
    let tarefa = document.getElementById("tarefa").value
    let lista = document.getElementById("lista")
    let tarefaInput = document.getElementById("tarefa")

    //Não aceitar tarefa vazia
    if(tarefa == ""){
        alert("Digite uma tarefa")
        return
    }

    //Criar o li
    let novaTarefa = document.createElement("li")
    novaTarefa.innerText = tarefa

    lista.appendChild(novaTarefa)
    tarefaInput.value = ""

    novaTarefa.onclick = function(){
        lista.removeChild(novaTarefa)
    }
}