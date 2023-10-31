let termoDeAutorizacao = document.getElementById("termoDeAutorizacao");
let cadastrarButton = document.getElementById("cadastrar");

let nomeDoFilmeNoBrasil = document.getElementById("nomeDoFilmeNoBrasil");
let nomeDoFilmeOriginal = document.getElementById("nomeDoFilmeOriginal");
let nomeDoDiretor = document.getElementById("nomeDoDiretor");
let dataDeEstreia = document.getElementById("dataDeEstreia");
let idioma = document.querySelector("input[name='idioma']");

termoDeAutorizacao.addEventListener("change", () => {
    if(termoDeAutorizacao.checked) {
        cadastrarButton.disabled = false
    } else {
        cadastrarButton.disabled = true
    }
})


function cadastrar() {
if(nomeDoFilmeNoBrasil.value == "") {
    alert("O nome do filme precisa ser preenchido")
    nomeDoFilmeNoBrasil.style.boxShadow = "2px 2px 2px 2px red";
    return;
}

if(nomeDoFilmeOriginal.value == "") {
    alert("O nome do filme original precisa ser preenchido")
    nomeDoFilmeOriginal.style.boxShadow = "2px 2px 2px 2px red";
    return;
}

if(nomeDoDiretor.value == "") {
    alert("O nome do diretor precisa ser preenchido")
    nomeDoDiretor.style.boxShadow = "2px 2px 2px 2px red";
    return;
}

if(dataDeEstreia.value == "") {
    alert("A data precisa ser preenchida")
    dataDeEstreia.style.boxShadow = "2px 2px 2px 2px red";
    return;
}

if(idioma.checked == false) {
    alert("O idioma precisa ser selecionado")
    return;
}


alert("Filme cadastrado com sucesso!")

}