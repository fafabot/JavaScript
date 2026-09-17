let pesquisa = document.getElementById("pesquisa");
pesquisa.addEventListener("input", function() {
    let valorPesquisa = pesquisa.value.toLowerCase();
    let itens = document.querySelectorAll(".card");
    
    let encontrados = 0

    itens.forEach(function(item) {
        let nomeItem = item.querySelector("h2").textContent.toLowerCase();
        if (nomeItem.includes(valorPesquisa)) {
            item.style.display = "block";
            encontrados++;
        }
        else {
            item.style.display = "none";
        }   
    });
    document.getElementById("resultado").textContent = encontrados + " itens encontrados";
})