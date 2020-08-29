"use strict"

let toggleMenuIsVisible = false;
let toggleMenu = document.querySelector('#toggle-menu');
let btnToggleMenu = document.querySelector('#btn-toggle-menu')

btnToggleMenu.addEventListener('click', ()=>{
    if(!toggleMenuIsVisible){
        toggleMenu.style.display = 'flex';
        toggleMenuIsVisible = true;
    } else {
        toggleMenu.style.display = 'none';
        toggleMenuIsVisible = false;
    }
})
