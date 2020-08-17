let flag = false

document.getElementById('buttonIndice').onclick = function (event){
    if(!flag){
        document.getElementById('divIndice').style.display = 'block'
        event.target.style.color = '#54595F'
        event.target.style.backgroundColor = '#fff'
        flag = true;
    } else {
        document.getElementById('divIndice').style.display = 'none'
        event.target.style.color = '#fff'
        event.target.style.backgroundColor = '#54595F'
        flag = false;
    }
}