itensToTalkAbout = document.getElementsByClassName('pointToTalkAbout')

function move_scrool_bar(){
    console.log('entrou')
    window.scrollTo(0, 0);
}
for(i = 0; i < itensToTalkAbout.length; i++){
    itensToTalkAbout[i].onclick = function(event){
        element = event.target;
        element = element.parentNode;
        id = `${element.getAttribute('href')}`
        id = id.replace('#', '')
        block_true = document.getElementById(id).style.getPropertyValue('display')

        if(block_true == 'none'){
            document.getElementById(id).style.display = 'block';
        } else {
            document.getElementById(id).style.display = 'none';
        }
        move_scrool_bar()
    }
}