function pesquisar() {

    let section = document.getElementById("resultados-pesquisas");

let resultados = ""

for (let dado of dados) {
    resultados += `
    <div class="item-resultado">
    <h2>
        <a href="#" target="_blank">${dado.nome}</a>
    </h2>
    <p class="descricao-meta">${dado.descricao}</p>
    <a href="${dado.link}" target="_blank">Saiba Mais</a>
</div>
`

}

section.innerHTML = resultados


}


