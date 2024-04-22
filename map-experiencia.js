let niveisJogadores = [1, 5, 10, 15, 20];

function calcularExperienciaProximoNivel(nivel) {
    const EXPERIENCIA_BASE = 100;
    const EXPERIENCIA_ADICIONAL_POR_NIVEL = 50;
    return EXPERIENCIA_BASE + nivel * EXPERIENCIA_ADICIONAL_POR_NIVEL;
}

let ExperienciaProximoNivel = niveisJogadores.map(function(nivel){
    return calcularExperienciaProximoNivel(nivel);
});
console.log(ExperienciaProximoNivel);