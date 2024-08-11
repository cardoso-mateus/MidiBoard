const teclas = document.querySelectorAll('.tecla');

function audio(texto) {return document.querySelector(texto).play();}

function criaTecla(i) {
    teclas[i].addEventListener('click', function() {
        audio(`#som_${teclas[i].classList[1]}`);
    });
}

for(let i = 0; i < teclas.length; i++) {
    criaTecla(i);
}
