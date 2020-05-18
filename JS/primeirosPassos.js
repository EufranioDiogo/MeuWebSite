$('#buttonGoTop').hide();
window.onscroll = function() {scrollFunction()};
var flagButtonGoToTop = 0;


function scrollFunction() {
    if(window.scrollY >= 500) {
        if(! flagButtonGoToTop == 1) {
            $('#buttonGoTop').slideDown(900);
        } 
        flagButtonGoToTop = 1;
    } else {
        if(! flagButtonGoToTop == 0) {
            $('#buttonGoTop').slideUp(900);
        } 
        flagButtonGoToTop = 0;
    }
    if(window.scrollY > 3078) {
        document.querySelector('#buttonGoTop').style.display = 'none';
    } else if(window.scrollY > 500) {
        document.querySelector('#buttonGoTop').style.display = 'block';
    }
}

const buttonGoTop = document.querySelector('#buttonGoTop');
buttonGoTop.addEventListener('click', ()=>{
    window.scroll(0, 0)
})

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