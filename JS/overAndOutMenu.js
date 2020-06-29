var itemActivo = 0;

function verificarActivo() {
    var div = document.getElementById('listaDesordenada');
    var a =  div.getElementsByTagName('a');

    for(; itemActivo < a.length; itemActivo++) {
        if(a[itemActivo].getAttribute('href') == '#') {
            itemActivo += 1
            break;
        }
    }
}

function overButton(id){
    var elemento_da_lista = document.getElementById(id)

    if(elemento_da_lista.getAttribute('href') != '#'){
        elemento_da_lista.style.transition = '0.5s';
        elemento_da_lista.style.color = '#2B85AA';
    }
}
function outButton(id) {
    var element = document.getElementById(id);
    
    if(id != 'li'+(itemActivo)) {
        element.style.cursor = 'pointer';
        if(id == 'divEsquerdaAreaActuacao' || id == 'divDireitaAreaActuacao') {
            element= element.children[0];
        }
        element.style.color = '#333'; 
    }
}


verificarActivo();
