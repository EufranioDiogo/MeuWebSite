flagLanguage = 0;

function languagePortuguese() {
    if(flagLanguage == 0) {
        alert('O site já se encontra em Portugues!')
    } else {
        var elementosMenus = document.querySelectorAll('.itemDeMenu');
   

        elementosMenus[0].innerText = 'Inicio';
        elementosMenus[1].innerText = 'Primeiros Passos';
        elementosMenus[2].innerText = 'Eventos de Programação';
        elementosMenus[3].innerText = 'Contactos';

        var titlePorqueProgramar = document.querySelector('#titlePorqueProgramar');
        var descPorqueProgramar = document.querySelector('#spanAprenderProgramar > p');
        var titleAreaActuacao = document.querySelector('#titleAreaActuacao')


        titlePorqueProgramar.innerText = 'Gostário de aprender a Programar?';
        descPorqueProgramar.innerText = 'Se você está iniciando em um curso de computação ou está aprendendo a programar por conta própria, deve estar interessado em aprender como são feitos aqueles jogos fantásticos ou aqueles sites que se diferenciam em meio a tantos outros por terem um design próprio, saiba que tudo isso é possível, mas com muito esforço, dedicação e persistência pois muitos “bugs” vão aparecer pelo caminho e, apesar desses obstáculos, as gambiarras devem prevalecer, pois no final seu código vai compilar e vai ter valido a pena todo seu esforço, pois você aprenderá com seus erros.';
        titleAreaActuacao.innerText = 'Locais onde a Programação Actua!'


        var areaActuacaoText = document.querySelectorAll('.divAreaActuacao div p')
        var h1 = document.querySelectorAll('.divAreaActuacao h1');

        description[0][0] = 'Os profissionais de Saúde na monotorização de seus pacientes, possuem apps que os permitem ter uma visão profunda sobre epidemias isso tudo devido a programação.'  
        description[0][1] = 'Hoje a educação rompeu barreiras, tendo a possibilidade de obtermos milhões de informações em um click e uma pesquisa no Google, aplicativos focados para educação!'
        description[0][2] = 'Mídias Sociais são actualmente os maiores canais de comunicação do mundo, onde falamos com amigos, familiares, colegas, ... sem barreiras físicas.'                 
        description[0][3] = 'As ciências evoluiram bastante desde a implementação da programação, permitindo-as a criação de dispositivos que melhoram a vida.'                                  

        description[1][0] = 'A visão dos desportos, tecnologias como o VAR mudaram a maneira de percepção dos acontecimentos em campo! Computadores fazendo estatísticas sobre o jogo!'  
        description[1][1] = 'Hoje os maiores jogos são desenvolvidos com auxílio da programação, onde jovens, adolescentes, adultos, crianças e até idosos, se divertem!'
        description[1][2] = 'Tudo praticamente ao seu redor tem um chip ou circuitos electrónicos e programação dentro, e são nesses dispositivos que hoje nos divertimos até para assistir um filme.'                 
        description[1][3] = 'Hoje através de um click e o produto chega até a sua porta, isso através da programação! Quem pensaria nisso meio século atrás que com programação isto sería possível?'                                  
 

        h1AreaActuacao[0][0] = 'Saúde';
        h1AreaActuacao[0][1] = 'Educação';
        h1AreaActuacao[0][2] = 'Medias Sociais';
        h1AreaActuacao[0][3] =  'Ciência';
        h1AreaActuacao[1][0] = 'Desporto';
        h1AreaActuacao[1][1] =  'Jogos Virtuais';
        h1AreaActuacao[1][2] =  'Diversão';
        h1AreaActuacao[1][3] =  'Compras';     

        areaActuacaoText[0].innerText = description[flagPanel][0];
        areaActuacaoText[1].innerText = description[flagPanel][1];
        areaActuacaoText[2].innerText = description[flagPanel][2];
        areaActuacaoText[3].innerText = description[flagPanel][3];

        
        h1[0].innerText = h1AreaActuacao[flagPanel][0];
        h1[1].innerText = h1AreaActuacao[flagPanel][1];
        h1[2].innerText = h1AreaActuacao[flagPanel][2];
        h1[3].innerText = h1AreaActuacao[flagPanel][3];

        var textDescRodapeTitle = document.querySelectorAll('#divRodapeInfo li h3');
        var textDescRodape = document.querySelectorAll('#divRodapeInfo li h4');

        textDescRodapeTitle[0].innerText = 'Sobré-nos';
        textDescRodape[0].innerText = 'Quem somos?'
        textDescRodape[1].innerText = 'Nosso Objectivo!'
        textDescRodape[2].innerText = 'Planos e Objectivos'

        textDescRodapeTitle[1].innerText = 'Contactos';
        textDescRodape[3].innerText = 'Email: uijiacode@gmail.org'
        textDescRodape[4].innerText = 'Endereço: 1º Maio, rua Ngola Kiluange'
        textDescRodape[5].innerText = 'Telefone: +244 921 611 793'


        textDescRodapeTitle[2].innerText = 'Deseja Nós Ajudar?';
        textDescRodape[6].innerText = 'De a oportunidade a jovens angolanos!'
        textDescRodape[7].innerText = 'Diz nós o que devemos melhorar'
        textDescRodape[8].innerText = '.'

        textDescRodapeTitle[3].innerText = 'Direitos';
        textDescRodape[9].innerText = 'CopyLeft Código Livre'
        textDescRodape[10].innerText = 'Autor: Eufránio Diogo'
        textDescRodape[11].innerText = 'Ano: 2019'

        
        flagLanguage = 0
    }
}


function languageEnglish() {
    if(flagLanguage == 1) {
        alert('The page is in English allready!')
    } else {
        var elementosMenus = document.querySelectorAll('.itemDeMenu');


        elementosMenus[0].innerText = 'Home';
        elementosMenus[1].innerText = 'First Steps';
        elementosMenus[2].innerText = 'Programing Events';
        elementosMenus[3].innerText = 'Contacts';
    
        var titlePorqueProgramar = document.querySelector('#titlePorqueProgramar');
        var descPorqueProgramar = document.querySelector('#spanAprenderProgramar > p');
        var titleAreaActuacao = document.querySelector('#titleAreaActuacao')
    
    
        titlePorqueProgramar.innerText = 'Would you like to learn programming?';
        descPorqueProgramar.innerText = 'If you are starting out on a computer course or learning how to program on your own, you should be interested in learning how those fantastic games are made or those sites that differentiate themselves from so many others by having their own design, know that all this It is possible, but with a lot of effort, dedication and persistence because many bugs will appear along the way and, despite these obstacles, the jokes should prevail, because in the end your code will compile and it will have been worth all your effort, because you You will learn from your mistakes.';
        titleAreaActuacao.innerText = 'Fields that Programming is Applied!'
    
    
        var areaActuacaoText = document.querySelectorAll('.divAreaActuacao div p')
        var h1 = document.querySelectorAll('.divAreaActuacao h1');


        description[0][0] = 'Healthcare professionals in monitoring their patients, have apps that allow them to have a deep view on epidemics all due to programming.'             
        description[0][1] = 'Today education has broken down barriers, allowing us to get millions of information in one click and a search on Google, apps focused on education!'  
        description[0][2] = 'Social Media is currently the largest communication channel in the world, where we talk to friends, family, colleagues, ... without physical barriers.'
        description[0][3] = 'The sciences have come a long way since programming, allowing them to create life-enhancing devices.'                                                   

        description[1][0] = 'The vision of sports, technologies like VAR have changed the way we perceive events on the field! Computers making statistics about the game!'  
        description[1][1] = 'Today the biggest games are developed with the aid of programming, where young people, teenagers, adults, children and even the elderly have fun!'
        description[1][2] = 'Almost everything around you has a chip or electronic circuitry and programming inside, and it is on these devices that we have fun even today to watch a movie.'                 
        description[1][3] = 'Today through a click and the product comes to your door, this through programming! Who would think about it half a century ago that with programming this would be possible?'                                  

        h1AreaActuacao[0][0] = 'Health';
        h1AreaActuacao[0][1] = 'Education';
        h1AreaActuacao[0][2] = 'Social Medias';
        h1AreaActuacao[0][3] =  'Sciencs';
        h1AreaActuacao[1][0] = 'Desport';
        h1AreaActuacao[1][1] =  'Virtual Games';
        h1AreaActuacao[1][2] =  'Diverction';
        h1AreaActuacao[1][3] =  'Shopping';

        areaActuacaoText[0].innerText = description[flagPanel][0];
        areaActuacaoText[1].innerText = description[flagPanel][1];
        areaActuacaoText[2].innerText = description[flagPanel][2];
        areaActuacaoText[3].innerText = description[flagPanel][3];


        h1[0].innerText = h1AreaActuacao[flagPanel][0];
        h1[1].innerText = h1AreaActuacao[flagPanel][1];
        h1[2].innerText = h1AreaActuacao[flagPanel][2];
        h1[3].innerText = h1AreaActuacao[flagPanel][3];

        var textDescRodapeTitle = document.querySelectorAll('#divRodapeInfo li h3');
        var textDescRodape = document.querySelectorAll('#divRodapeInfo li h4');
    
        textDescRodapeTitle[0].innerText = 'About Us';
        textDescRodape[0].innerText = 'Who we are?'
        textDescRodape[1].innerText = 'Our Objective!'
        textDescRodape[2].innerText = 'Plans and Objectis'
    
        textDescRodapeTitle[1].innerText = 'Contacts';
        textDescRodape[3].innerText = 'Email: uijiacode@gmail.org'
        textDescRodape[4].innerText = 'Address: 1º Maio, rua Ngola Kiluange'
        textDescRodape[5].innerText = 'Phone: +244 921 611 793'
    
    
        textDescRodapeTitle[2].innerText = 'Would you like to help us?';
        textDescRodape[6].innerText = 'Give the opportunity to young Angolans!'
        textDescRodape[7].innerText = 'Tell us where we can grow up!'
        textDescRodape[8].innerText = '.'
    
        textDescRodapeTitle[3].innerText = 'Directs';
        textDescRodape[9].innerText = 'CopyLeft Free Code'
        textDescRodape[10].innerText = 'Author: Eufránio Diogo'
        textDescRodape[11].innerText = 'Year: 2019' 

        flagLanguage = 1;
    }
}