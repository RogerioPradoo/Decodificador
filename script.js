var textInput = document.querySelector("#textMsg");
var outInput = document.querySelector("#text-img");



function criptografar() {
    var texto = textInput.value;

    var resultCripto = texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat")

    document.getElementById('text-img').innerHTML = '<textarea readonly id="textMsgg">' + resultCripto +
        '</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>'
}


function descriptografar() {

    var texto = textInput.value;

    var resultDescripto = texto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");

    document.getElementById('text-img').innerHTML = '<textarea readonly id="textMsgg">' + resultDescripto +
        '</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>'
}


function copiar() {
    var textoCop = document.getElementById('textMsgg');

    textoCop.select();
    document.execCommand('copy');
    alert("Texto copiado.");
}  