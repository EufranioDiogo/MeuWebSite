let readBar = document.querySelector('.readBar')
readBar.style.width = '0%'
let endPoint = document.querySelector('#endOfPost')
let offSetTop = endPoint.offsetTop - 450;
let sizeOfReadBar = 0;


window.onscroll = () => {
    sizeOfReadBar = readBar.getAttribute('style').split(' ')[1].replace(';', '').replace('%', '')
    if(window.scrollY > 1 || window.scrollY < offSetTop && sizeOfReadBar < 100){
        result = (window.scrollY * 100) / offSetTop;
        result = result.toFixed(2)
        readBar.style.width = `${result}%`
    } else if(window.scrollY == 0) {
        readBar.style.width = "0"
    }
}