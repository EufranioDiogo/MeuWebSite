/*Início Elemetos Slides*/
var imageSlideList = ['../IMG/Slides/artificial-intelligence-blur-close-up-546819.jpg',
    '../IMG/Slides/adult-app-developer-coding-1181244.jpg',
    '../IMG/Slides/OBeneficiosDeAprenderAProgramar.png',
    '../IMG/Slides/brain-icon-png-2529.png',
    '../IMG/Slides/person-using-silver-macbook-pro-11814671.jpg',
    '../IMG/Slides/close-up-code-coding-160107.jpg'
];

/*var p = document.createElement('p')
p.style.position = 'absolute';
p.style.fontSize = '50px';
p.style.textShadow = '-2px 1px 5px #333';
p.style.color = 'white';
p.style.left = '50%';
p.style.top = '50%'
p.style.transform = 'translate(-50%, -50%)';
p.style.textTransform = 'uppercase';
p.innerText = 'O mundo está a Mudar'*/

var imageSlideIndex = 0;
var imageSlideElement = document.getElementById('imgSlide');
/* Fim Elementos Slides*/

function slideAction() {
    imageSlideIndex = imageSlideIndex == 5 ? 0 : imageSlideIndex + 1;
    $('#imgSlide').fadeOut(555, function() {
        $('#imgSlide').fadeIn(500);
        imageSlideElement.setAttribute('src', imageSlideList[imageSlideIndex]);
        /*if(imageSlideIndex == 4) {
            document.querySelector('#divSlide').appendChild(p);
        }*/
    });
}

/*Inicio Elementos Area Actuação*/
var imageAreaActuacao = [
    ['../IMG/desk-doctor-health-48604.jpg',
        '../IMG/children-class-classroom-1720186.jpg',
        '../IMG/blur-cellphone-cellular-telephone-533446.jpg',
        '../IMG/angry-artificial-artificial-intelligence-39349.jpg'
    ],

    ['../IMG/action-athletes-audience-1884574.jpg',
        '../IMG/blur-close-up-device-442576.jpg',
        '../IMG/photography-of-woman-listening-to-music-761963.jpg',
        '../IMG/adolescent-beautiful-brunette-919436.jpg'
    ]
]
var description = [
    ['Os profissionais de Saúde na monotorização de seus pacientes, possuem apps que os permitem ter uma visão profunda sobre epidemias isso tudo devido a programação.',
    'Hoje a educação rompeu barreiras, tendo a possibilidade de obtermos milhões de informações em um click e uma pesquisa no Google, aplicativos focados para educação!',
    'Mídias Sociais são actualmente os maiores canais de comunicação do mundo, onde falamos com amigos, familiares, colegas, ... sem barreiras físicas.',
    'As ciências evoluiram bastante desde a implementação da programação, permitindo-as a criação de dispositivos que melhoram a vida.'
    ],

    ['A visão dos desportos, tecnologias como o VAR mudaram a maneira de percepção dos acontecimentos em campo! Computadores fazendo estatísticas sobre o jogo!',
    'Hoje os maiores jogos são desenvolvidos com auxílio da programação, onde jovens, adolescentes, adultos, crianças e até idosos, se divertem!',
    'Tudo praticamente ao seu redor tem um chip ou circuitos electrónicos e programação dentro, e são nesses dispositivos que hoje nos divertimos até para assistir um filme.',
    'Hoje através de um click e o produto chega até a sua porta, isso através da programação! Quem pensaria nisso meio século atrás que com programação isto sería possível? '
    ]
]
var h1AreaActuacao = [['Saúde', 'Educação', 'Medias Sociais', 'Ciência'], ['Desporto', 'Jogos Virtuais', 'Diversão', 'Compras']]
var flagPanel = 0;
var imageAreaActucao1 = document.getElementById('img1AreaActuacao');
var imageAreaActucao2 = document.getElementById('img2AreaActuacao');
var imageAreaActucao3 = document.getElementById('img3AreaActuacao');
var imageAreaActucao4 = document.getElementById('img4AreaActuacao');

var flagAreaActuacaActiva = 0;
/*Fim Elementos Area Actuação*/


//Div Button da Esquerda Click
document.getElementById('divEsquerdaAreaActuacao').addEventListener('click', () => {
    document.getElementById('divEsquerdaAreaActuacao').style.cursor = 'not-allowed';
    imageAreaActucao1.setAttribute('src', imageAreaActuacao[0][0]);
    var tituloAreaActuacao1 = document.querySelector('#divAreaActuacao1 h1');
    tituloAreaActuacao1.innerHTML = h1AreaActuacao[0][0];

    imageAreaActucao2.setAttribute('src', imageAreaActuacao[0][1]);
    var tituloAreaActuacao2 = document.querySelector('#divAreaActuacao2 h1');
    tituloAreaActuacao2.innerHTML = h1AreaActuacao[0][1];

    imageAreaActucao3.setAttribute('src', imageAreaActuacao[0][2]);
    var tituloAreaActuacao3 = document.querySelector('#divAreaActuacao3 h1');
    tituloAreaActuacao3.innerHTML = h1AreaActuacao[0][2];

    imageAreaActucao4.setAttribute('src', imageAreaActuacao[0][3]);
    var tituloAreaActuacao4 = document.querySelector('#divAreaActuacao4 h1');
    tituloAreaActuacao4.innerHTML = h1AreaActuacao[0][3];

    flagPanel = 0;
    putDescription()
});
//Fim Div Button da Esquerda Click


//Div Button da Direita Click
document.getElementById('divDireitaAreaActuacao').addEventListener('click', () => {
    document.getElementById('divDireitaAreaActuacao').style.cursor = 'not-allowed';
    imageAreaActucao1.setAttribute('src', imageAreaActuacao[1][0]);
    var tituloAreaActuacao1 = document.querySelector('#divAreaActuacao1 h1');
    tituloAreaActuacao1.innerHTML = h1AreaActuacao[1][0];

    imageAreaActucao2.setAttribute('src', imageAreaActuacao[1][1]);
    var tituloAreaActuacao2 = document.querySelector('#divAreaActuacao2 h1');
    tituloAreaActuacao2.innerHTML = h1AreaActuacao[1][1];

    imageAreaActucao3.setAttribute('src', imageAreaActuacao[1][2]);
    var tituloAreaActuacao3 = document.querySelector('#divAreaActuacao3 h1');
    tituloAreaActuacao3.innerHTML = h1AreaActuacao[1][2];

    imageAreaActucao4.setAttribute('src', imageAreaActuacao[1][3]);
    var tituloAreaActuacao4 = document.querySelector('#divAreaActuacao4 h1');
    tituloAreaActuacao4.innerHTML = h1AreaActuacao[1][3];

    flagPanel = 1;
    putDescription()
});
//Fim Div Button da Direita Click


function overAreaActuacao(id, index) {
    var element = document.getElementById(id);
    var width = screen.width;
    var elementosDesfocados = document.querySelectorAll('.divAreaActuacao');
    index = parseInt(index);
    

    element.style.zIndex = 1;
    element.style.transition = "0.5s";
    element.style.backgroundColor = "#fff"
    if (width > 700) {
        element.style.width = "250px";
        element.style.height = "390px";
    }

    for(i = 0; i < elementosDesfocados.length; i++) {
        if(i != index-1) {
            elementosDesfocados[i].children[0].style.transition = '0.3s';
            elementosDesfocados[i].children[1].style.transition = '0.3s';
            elementosDesfocados[i].children[2].children[0].style.transition = '0.3s';
            elementosDesfocados[i].children[0].style.opacity = '0.65';
            elementosDesfocados[i].children[1].style.opacity = '0.65';
            elementosDesfocados[i].children[2].children[0].style.opacity = '0.65';
        }
    }
}

function outAreaActuacao(id, index) {
    var element = document.getElementById(id);
    var width = screen.width;
    var elementosDesfocados = document.querySelectorAll('.divAreaActuacao');
    index = parseInt(index);


    element.style.zIndex = 0;
    element.style.transition = "0.5s";
    element.style.backgroundColor = "#fefefe";

    if (width > 700) {
        element.style.width = "240px";
        element.style.height = "380px";
    }

    for(i = 0; i < elementosDesfocados.length; i++) {
        elementosDesfocados[i].children[0].style.transition = '0.3s';
        elementosDesfocados[i].children[1].style.transition = '0.3s';
        elementosDesfocados[i].children[2].children[0].style.transition = '0.3s';
        elementosDesfocados[i].children[0].style.opacity = '1.0';
        elementosDesfocados[i].children[1].style.opacity = '1.0';
        elementosDesfocados[i].children[2].children[0].style.opacity = '1.0';
    }
}
function putDescription() {
    var element = document.querySelectorAll('.divAreaActuacao .divAreaActuacaoText p');

    for(i = 0; i < element.length; i++) {
        element[i].innerText = description[flagPanel][i]
    }

}
putDescription();

function mouseOverSocialMedia(id) {
    var logoSocialMedia = document.querySelector('#'+id);
    var color = null;

    switch(id) {
        case 'facebookLogo':
            color = '#32a0fa';
            break;
        case 'instagramLogo':
            color = '#FE4E55'
            break;
        case 'twitterLogo':
            color = '#55ACEE';
            break;
        case 'pinterestLogo':
            color = '#CB2027'
            break;
    }
    logoSocialMedia.style.transition = '0.5s'
    logoSocialMedia.style.backgroundColor = color;
}

function mouseOutSocialMedia() {
    var logoSocialMedia = document.querySelectorAll('#divRodape #divRodapeSocialMidia img')

    for(i = 0; i < logoSocialMedia.length; i++) {
        logoSocialMedia[i].style.transition = '0.5s'
        logoSocialMedia[i].style.backgroundColor = 'transparent';
    }
}

//Componentes Menu para Telefones
var flagMenuVisivel = 0;

document.querySelector('#navMenu > div > img').addEventListener('touchstart', () => {
    if(flagMenuVisivel == 0) {
        document.querySelector('nav ul').style.display = 'block';
        flagMenuVisivel = 1;
    } else {
        document.querySelector('nav ul').style.display = 'none';
        flagMenuVisivel = 0;
    }
});
setInterval(slideAction, 3800);

/* 
1º Manter o li do menu activo de acordo a pagina
2º Trabalhar com os paddings
3º 
*/
