var teclas = [
    document.querySelector('.tecla_pom'),
    document.querySelector('.tecla_clap'),
    document.querySelector('.tecla_tim'),
    document.querySelector('.tecla_puff'),
    document.querySelector('.tecla_splash'),
    document.querySelector('.tecla_toim'),
    document.querySelector('.tecla_psh'),
    document.querySelector('.tecla_tic'),
    document.querySelector('.tecla_tom'),
]

var audios = [
    document.querySelector('#som_tecla_pom'),
    document.querySelector('#som_tecla_clap'),
    document.querySelector('#som_tecla_tim'),
    document.querySelector('#som_tecla_puff'),
    document.querySelector('#som_tecla_splash'),
    document.querySelector('#som_tecla_toim'),
    document.querySelector('#som_tecla_psh'),
    document.querySelector('#som_tecla_tic'),
    document.querySelector('#som_tecla_tom'),
]

function criaTecla(i) {
    teclas[i].addEventListener('click', function() {audios[i].play();});
}

var tecla_pom = criaTecla(0);
var tecla_clap = criaTecla(1);
var tecla_tim = criaTecla(2);
var tecla_puff = criaTecla(3);
var tecla_splash = criaTecla(4);
var tecla_toim = criaTecla(5);
var tecla_psh = criaTecla(6);
var tecla_tic = criaTecla(7);
var tecla_tom = criaTecla(8);
