var inputs = document.getElementsByClassName('inputFormat');
var nome;
var sobreNome;
var email;
var descricao;
flagPainelLocation = 1;

function limparCampos() {
    for(i = 0; i < inputs.length; i++) {
        if(inputs[i].value.trim() !== ''){
            inputs[i].value = ''
        }
    }
}
function enviarDados() {
    if(confirmarExistenciaDados()) {
        prepararDados();
        window.location = 'formContactosRecive.html?nome='+nome+'&sobreNome='+sobreNome+'&email='+
        email+'&descricao='+descricao;
    }
}

function confirmarExistenciaDados() {
    if(inputs[0].value.trim() === '' ||  inputs[1].value.trim() === ''  || inputs[2].value.trim() === '' ) {
        alert('Os campos: '+procurarCamposVazios()+" vazios")
        return false;
    }
    return true;
}
function procurarCamposVazios() {
    var result = '';
    var campos = ['Nome', 'Email', 'O quer nos dizer?']
    for(i = 0; i < inputs.length; i++) {
        if(inputs[i].value.trim() === '') {
            result += campos[i]+" | "
        }
    }
    return result;
}

function prepararDados() {
    var nomeSobreNome = inputs[0].value;
    nomeSobreNome = nomeSobreNome.trim().toLowerCase().split(' ');
    nome = nomeSobreNome[0].toUpperCase();
    sobreNome = nomeSobreNome[nomeSobreNome.length - 1].toUpperCase();
    email = inputs[1].value.toLowerCase();
    descricao = inputs[2].value.toUpperCase();
}

var flagMenuVisivel = 0;

document.querySelector('#navMenu > div > img').addEventListener('click', () => {
    if(flagMenuVisivel == 0) {
        document.querySelector('nav ul').style.display = 'block';
        flagMenuVisivel = 1;
    } else {
        document.querySelector('nav ul').style.display = 'none';
        flagMenuVisivel = 0;
    }
});