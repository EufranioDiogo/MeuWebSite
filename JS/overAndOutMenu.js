var itemActivo = 1;

function verificarActivo() {
    var div = document.getElementById('listaDesordenada');
    var a =  div.getElementsByTagName('a');

    for(; itemActivo < a.length; itemActivo++) {
        if(a[itemActivo].getAttribute('href') == '#') {
            break;
        }
    }
}

function overButton(id) {
    var element = document.getElementById(id);
    element.style.transition = '0.5s';

    if(id != 'li'+(itemActivo)) {

        try {
            if(flagPanel == 0 && id == 'divEsquerdaAreaActuacao') {
                element.style.cursor = 'not-allowed';
            } 
            if(flagPanel == 1 && id == 'divDireitaAreaActuacao') {
                element.style.cursor = 'not-allowed';
            }
            if(id == 'divEsquerdaAreaActuacao' || id == 'divDireitaAreaActuacao') {
                element = element.children[0];
                
            }
        } catch (error) {
            console.log('erro')
        }
        element.style.color = "#2ea6d2"; 
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
