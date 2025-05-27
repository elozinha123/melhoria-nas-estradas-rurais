document.getElementById("formTrecho").addEventListener("submit", function(e) {
    e.preventDefault();

    const local = document.getElementById("local").value;
    const condicao = document.getElementById("condicao").value;

    const li = document.createElement("li");
    li.textContent = `${local} - Condição: ${condicao}`;
    
    // Adiciona classe de cor com base na condição
    li.classList.add(condicao.toLowerCase());

    document.getElementById("trechos").appendChild(li);

    // Limpa campos
    document.getElementById("local").value = "";
    document.getElementById("condicao").value = "";
});
