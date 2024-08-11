const teclas = document.querySelectorAll('.tecla');

function audio(texto) {
    document.querySelector(texto).play();
}

for (let i = 0; i < teclas.length; i++) {
    teclas[i].addEventListener('click', function () {
        audio(`#som_${teclas[i].classList[1]}`);
    });

    teclas[i].addEventListener('keydown', function (evento) {
        if (evento.code === 'Enter'|| evento.code === 'Enter') {
            teclas[i].classList.add('ativa');
        }
    });

    teclas[i].addEventListener('keyup', function () {
        teclas[i].classList.remove('ativa');
    });
}
