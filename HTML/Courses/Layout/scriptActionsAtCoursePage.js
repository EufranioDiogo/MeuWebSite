let btnRigth = document.querySelector('#button-angle-right')
let btnLeft = document.querySelector('#button-angle-left')
let step = 920;
let element = document.querySelector('.contentRow')
let btnCloseSugestion = document.querySelector('#button-angle-close')
let number_of_links = 0;

for(let index = 0; index < element.childNodes.length; index++){
    console.log(element.childNodes[index].href)
    if(element.childNodes[index].href != undefined){
        number_of_links += 1;
    }
}

console.log(number_of_links)
if(number_of_links < 5){
    btnLeft.style.display = 'none';
    btnRigth.style.display = 'none';
}

let limiteRight = -(parseInt(window.getComputedStyle(element).getPropertyValue('width').replace('px', '')) - 230)

btnRigth.addEventListener('click', (event) => {
    if (parseInt(window.getComputedStyle(document.querySelector('.divSugestoesConteiner')).width.replace('px', '')) < parseInt(window.getComputedStyle(element).width.replace('px', ''))) {
        leftValue = parseInt(element.style.left.replace('px', ''))
        if (limiteRight < leftValue - 230) {
            element.setAttribute('style', `left: ${leftValue - step}px;transition: 0.5s;`)
        }
    }
})

btnLeft.addEventListener('click', (event) => {
    leftValue = parseInt(element.style.left.replace('px', ''))
    if (leftValue < 0) {
        element.setAttribute('style', `left: ${leftValue + step}px;transition: 0.5s;`)
    }
})

function closeSugestionTab() {
    if (!flagSugVisible) {
        divSugestoes.style.height = '250px';
        flagSugVisible = true;
    } else {
        divSugestoes.style.height = '0px';
        flagSugVisible = false;
    }
}

let liSug = document.querySelector('#liSug')
let flagSugVisible = false
let divSugestoes = document.querySelector('.divSugestoes')
divSugestoes.style.transition = '0.5s'

liSug.addEventListener('click', closeSugestionTab)
btnCloseSugestion.addEventListener('click', closeSugestionTab)

let divForeHead = document.querySelector('#divForHead ul')
window.onscroll = ()=>{
    if(parseInt(window.scrollY) >= 150){
        divForeHead.style.position = 'fixed';
        divForeHead.style.width = '100%'
        divForeHead.style.top = '40px';
    } else {
        divForeHead.style.position = 'relative';
        divForeHead.style.top = '0';
    }
}