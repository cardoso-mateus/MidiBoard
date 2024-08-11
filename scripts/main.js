var teclas = ['.tecla_pom','.tecla_clap','.tecla_tim','.tecla_puff',
    '.tecla_splash','.tecla_toim','.tecla_psh','.tecla_tic','.tecla_tom',]

var audios = ['#som_tecla_pom','#som_tecla_clap','#som_tecla_tim','#som_tecla_puff',
    '#som_tecla_splash','#som_tecla_toim','#som_tecla_psh','#som_tecla_tic','#som_tecla_tom',]

function criaTecla(i) {
    document.querySelector(teclas[i])
    .addEventListener('click', function() {
        document.querySelector(audios[i]).play();
    });
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
