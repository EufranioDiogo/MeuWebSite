var mensagens = {nome: '', sobreNome: '', email: '', desc: ''};
var dados = null;

function receberDados() {
    var url = window.location.toString();
    //dados = []
    url = url.substring(url.indexOf('?')+1);
    url = url.split('&');
    /*for(i = 0; i < url.length; i++) {
        dados.push(url[i].substring(url[i].indexOf('=')+1))
    }*///Formulário Modal
    dados = url.map((valor) => {
        return valor.substring(valor.indexOf('=')+1);
    });
    mensagens['nome'] = dados[0];
    mensagens['sobreNome'] = dados[1];
    mensagens['email'] = dados[2];
    mensagens['desc'] = dados[3];
    adicionarDadosNosCampos()
}

function adicionarDadosNosCampos() {
    var elementNome = document.querySelector('#divMessagesToRead > div:nth-child(1) > p:nth-child(1)');
    var elementEmail = document.querySelector('#divMessagesToRead > div:nth-child(1) > p:nth-child(2)');
    var elementDesc = document.querySelector('#divMessagesToRead > div:nth-child(1) > span > p:nth-child(1)');

    limparDados();

    elementNome.innerHTML = '<strong>Nome:</strong> '+mensagens['nome']+' '+mensagens['sobreNome'];
    elementEmail.innerHTML = '<strong>Email:</strong> '+mensagens['email'];
    elementDesc.innerHTML = mensagens['desc'];
}

function limparDados() {
    while(mensagens['desc'].indexOf('%20') !== -1) {
        mensagens['desc'] = mensagens['desc'].replace('%20', ' ')
    }
    while(mensagens['desc'].indexOf('%C3%81') !== -1 || mensagens['nome'].indexOf('%C3%81') !== -1) {
        mensagens['desc'] = mensagens['desc'].replace('%C3%81', 'Á')
        mensagens['nome'] = mensagens['nome'].replace('%C3%81', 'Á')
    }
    while(mensagens['desc'].indexOf('%C3%93') !== -1 || mensagens['nome'].indexOf('%C3%93') !== -1) {
        mensagens['desc'] = mensagens['desc'].replace('%C3%81', 'Ó')
        mensagens['nome'] = mensagens['nome'].replace('%C3%93', 'Ó')
    }
}

function adicionarEfeitoMessagesToRead(){
    var messages = document.querySelectorAll('#divMessagesToRead .divParticularMessage');

    for(i = 0; i < element.length; i++) {
        element[i].addEventListener('mouseover', alert('Mouse Over'))
        element[i].addEventListener('mouseout', alert('Mouse Out'))
    }
}


var element = document.querySelectorAll('#divMessagesToRead .divParticularMessage')[0].addEventListener('click', () => {
    document.querySelector('#divDisplayMessageHeader > p:nth-child(1)').innerHTML = '<strong>Destinatário: </strong>'+mensagens['nome']+mensagens['sobreNome'];
    document.querySelector('#divDisplayMessageHeader > p:nth-child(2)').innerHTML = '<strong>Email: </strong>'+mensagens['email'];
    document.querySelector("#messageSended").innerHTML = mensagens['desc'];
} )
document.querySelector("#divMessagesToRead > div")
receberDados();

//adicionarEfeitoMessagesToRead()
//receberDados();