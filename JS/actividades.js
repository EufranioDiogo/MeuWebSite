function overActividade(id) {
    var element = document.getElementById(id);

    element.style.border = '1px solid rgb(195, 195, 195)';
}
function outActividade(id) {
    var element = document.getElementById(id);

    element.style.border = '1px solid rgba(219, 219, 219, 0.5)';
}

var i = 1,
    j = 0;
var idActividadesInterval;

function actividadeTransition() {
    if (i == 9) {
        i = 1;
        j = 0;
    }

    var element = document.querySelector("#divActividades" + i + " p")

    if (i == 1) {
        element.style.transition = "1.0s";
        element.style.color = "rgba(250, 250, 250, 1)";
        element.style.backgroundColor = "rgba(200, 200, 200, 0.6)";

        let element1 = document.querySelector("#divActividades8 p");
        element1.style.transition = "1.0s";
        element1.style.color = "rgba(46, 166, 210, 0)";
        element1.style.backgroundColor = "rgba(230, 230, 230, 0.0)";
    } else {
        j += 1
        let element1 = document.querySelector("#divActividades" + j + " p")
        element1.style.transition = "1.0s";
        element1.style.color = "rgba(46, 166, 210, 0)";
        element1.style.backgroundColor = "rgba(230, 230, 230, 0.0)";

        element.style.transition = "1.0s";
        element.style.color = "rgba(255, 255, 255, 1)";
        element.style.backgroundColor = "rgba(200, 200, 200, 0.6)";
    }
    i += 1;
}

function actividadeTransitionStopAndFocus(id) {
    clearInterval(idActividadesInterval);
    let element = document.querySelector("#" + id);
    element.style.transition = "1.0s";
    element.style.color = "rgba(255, 255, 255, 1)";
    element.style.backgroundColor = "rgba(190, 190, 190, 0.9)";

    
    if ("#" + id != "#divActividades" + (i - 1) + " p") {
        var element1 = document.querySelector("#divActividades" + (i - 1) + " p");
        element1.style.transition = "1.0s";
        element1.style.color = "rgba(255, 255, 255, 0.0)";
        element1.style.backgroundColor = "rgba(225, 225, 225, 0.0)";
    }
}

function mouseOutOverActividadeElement(id) {
    idActividadesInterval = setInterval(actividadeTransition, 2500);
    var element = document.querySelector("#" + id);
    element.style.transition = "1.0s";
    element.style.color = "rgba(46, 166, 210, 0)";
    element.style.backgroundColor = "rgba(230, 230, 230, 0.0)";
}
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
idActividadesInterval = setInterval(actividadeTransition, 2500);