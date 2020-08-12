itensToTalkAbout = document.getElementsByClassName('pointToTalkAbout')

for(i = 0; i < itensToTalkAbout.length; i++){
    itensToTalkAbout[i].addEventListener('click', ()=>{
        console.log(this)
        id = `${this.getAttribute('href').replace('#', '')}`
        document.getElementById(id).style.display = 'block';
    })
}