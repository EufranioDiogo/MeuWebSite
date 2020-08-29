let btnRigth = document.querySelector('#button-angle-right')
let btnLeft = document.querySelector('#button-angle-left')
let element = document.querySelector('.contentRow')
let number_of_links = 0;
let btnCloseSugestion = document.querySelector('#button-angle-close')

let screenWidth = parseInt(screen.width);
if (screenWidth > 414) {
    for (let index = 0; index < element.childNodes.length; index++) {
        if (element.childNodes[index].href != undefined) {
            number_of_links += 1;
        }
    }

    if (number_of_links < 5) {
        btnLeft.style.display = 'none';
        btnRigth.style.display = 'none';
    }
    let number_of_links_showed = number_of_links > 4 ? 4 : 'todos';

    btnRigth.addEventListener('click', (event) => {
        leftValue = parseInt(element.style.left.replace('px', ''));
        if (number_of_links_showed != 'todos' && number_of_links_showed > 0) {
            element.setAttribute('style', `left: ${leftValue - step}px;transition: 0.5s;`)
            number_of_links_showed -= 4;
        }
    })

    btnLeft.addEventListener('click', (event) => {
        leftValue = parseInt(element.style.left.replace('px', ''))
        if (leftValue < 0) {
            element.setAttribute('style', `left: ${leftValue + step}px;transition: 0.5s;`)
            number_of_links_showed += 4
        }
    })
} else {
    btnLeft.style.display = 'none';
    btnRigth.style.display = 'none';
}

function closeOpenSugestions() {
    if (!flagSugVisible) {
        divSugestoes.style.height = '250px';
        flagSugVisible = true;
    } else {
        divSugestoes.style.height = '0px';
        flagSugVisible = false;
    }
}

let liSug = document.querySelector('#liSug')
let flagSugVisible = false;
let divSugestoes = document.querySelector('.divSugestoes');
divSugestoes.style.transition = '0.5s';

liSug.addEventListener('click', closeOpenSugestions);
btnCloseSugestion.addEventListener('click', closeOpenSugestions);

let divForeHead = document.querySelector('#divForHead ul')

window.onscroll = () => {
    if (parseInt(window.scrollY) >= 150) {
        divForeHead.style.position = 'fixed';
        divForeHead.style.width = '100%'
        divForeHead.style.top = '40px';
    } else {
        divForeHead.style.position = 'relative';
        divForeHead.style.top = '0';
    }
}