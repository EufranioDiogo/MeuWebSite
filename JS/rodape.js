var divRodapeInfo = document.querySelector('#divRodapeInfo');
var numeroLiRodape = divRodapeInfo.childElementCount;

for(i = 1; i <= numeroLiRodape; i++) {
    var li = document.querySelector('#divRodapeInfo'+i);
    var numeroFilhos = li.childElementCount; 

    for(j = 1; j < numeroFilhos; j++) {
        var elemento = li.children[j]
        elemento.addEventListener('mouseover', function(){
            this.style.transition = '0.2s';
            this.style.textDecoration = 'underline';
        });
        elemento.addEventListener('mouseout', function(){
            this.style.transition = '0.2s';
            this.style.textDecoration = 'none'; 
        });
    }
}