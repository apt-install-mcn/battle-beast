let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3
 
function ininciarJuego(){

    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'none'

    let sectionSeleccionarReiniciar = document.getElementById('reiniciar')
    sectionSeleccionarReiniciar.style.display = 'none'


    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', selecionarMascotaJugador)

    let botonFuego = document.getElementById('boton-fuego')
            botonFuego.addEventListener('click', ataqueFuego)

    let botonAgua = document.getElementById('boton-agua')
            botonAgua.addEventListener('click', ataqueAgua)

    let botonTierra = document.getElementById('boton-tierra')
            botonTierra.addEventListener('click', ataqueTierra)


    let botonReiniciar = document.getElementById("boton-reiniciar")
    botonReiniciar.addEventListener("click", reiniciarJuego)

}

function selecionarMascotaJugador(){

    let sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')
    sectionSeleccionarMascota.style.display = 'none'

    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'flex'

    let inputChapultepec = document.getElementById('Chapultepec')
    let inputCrinoxlo = document.getElementById('Crinoxlo')
    let inputFungionixto = document.getElementById('Fungionixto')
    let inputDoblextolio = document.getElementById('Doblextolio')
    let inputTricalno = document.getElementById('Tricalno')
    let spanMascotaJugador = document.getElementById('mascota-jugador')

    if(inputChapultepec.checked){
        spanMascotaJugador.innerHTML = 'Chapultepec'
    }else if(inputCrinoxlo.checked){
        spanMascotaJugador.innerHTML = 'Crinoxlo'
    }else if(inputFungionixto.checked){
        spanMascotaJugador.innerHTML = 'Fungionixto'
    }else if(inputDoblextolio.checked){
        spanMascotaJugador.innerHTML = 'Doblextolio'
    }else if(inputTricalno.checked){
        spanMascotaJugador.innerHTML = 'Tricalno'
    }else {
        alert('Debes seleccionar una mascota')
    }

    selecionarMascotaEnemigo()
}

function selecionarMascotaEnemigo() {
    let mascotaAleatorio = aleatorio(1,5)
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo')

    if(mascotaAleatorio == 1) {
        spanMascotaEnemigo.innerHTML = 'Chapultepec'
    }else if (mascotaAleatorio == 2){
        spanMascotaEnemigo.innerHTML = 'Crinoxlo'
    }else if (mascotaAleatorio == 3){
        spanMascotaEnemigo.innerHTML = 'Fungionixto'
    }else if (mascotaAleatorio == 4){
        spanMascotaEnemigo.innerHTML = 'Doblextolio'
    }else { 
        spanMascotaEnemigo.innerHTML = 'Tricalno'
    }
}

function ataqueFuego (){
    ataqueJugador = 'FUEGO'
    ataqueAleatorioEnemigo()

}
function ataqueAgua (){
    ataqueJugador = 'AGUA'
    ataqueAleatorioEnemigo()

}
function ataqueTierra (){
    ataqueJugador = 'TIERRA'
    ataqueAleatorioEnemigo()

}

function ataqueAleatorioEnemigo(){
    let ataqueAleatorio = aleatorio(1,3)

    if(ataqueAleatorio == 1) {
        ataqueEnemigo = 'FUEGO'
    } else if(ataqueAleatorio == 2){
        ataqueEnemigo = 'AGUA'
    } else { 
        ataqueEnemigo = 'TIERRA'
    }
    
    combate();
}


function combate() {


        let spanVidasJugador = document.getElementById('vidas-jugador')
        let spanVidasEnermigo = document.getElementById('vidas-enemigo')

            
        if (ataqueEnemigo == ataqueJugador) {
            crearMensaje("EMPATE")
          } else if (ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA') {
            crearMensaje("GANASTE")
            vidasEnemigo--
            spanVidasEnermigo.innerHTML = vidasEnemigo

          } else if (ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO') { 
            crearMensaje("GANASTE")
            vidasEnemigo--
            spanVidasEnermigo.innerHTML = vidasEnemigo
          } else if(ataqueJugador == 'TIERRA' && ataqueEnemigo == 'AGUA') {
            crearMensaje("GANASTE")
            vidasEnemigo--
            spanVidasEnermigo.innerHTML = vidasEnemigo
          } else { 
            crearMensaje("PERDISTE")
            vidasJugador--
            spanVidasJugador.innerHTML = vidasJugador 
          }
        
          revisarVidas()
}

function revisarVidas(){
    if (vidasEnemigo == 0){
        crearMensajeFinal("Victoria")
        alert("Victoria")  
    }else if (vidasJugador == 0){
        crearMensajeFinal("Derrota")   
        alert("Perdiste")
    }


}


function crearMensaje(resultado) {
    let sectionMensajes = document.getElementById('resultado');
    let ataqueJugador1 = document.getElementById('ataque-jugador-1');
    let ataqueJugador2 = document.getElementById('ataque-jugador-2');

    let nuevoAtaqueJugador1 = document.createElement('p');
    let nuevoAtaqueJugador2 = document.createElement('p');

    sectionMensajes.innerHTML = resultado;
    nuevoAtaqueJugador1.textContent = "Tu ataque: " + ataqueJugador; 
    nuevoAtaqueJugador2.textContent = "Ataque enemigo: " + ataqueEnemigo; 

    ataqueJugador1.appendChild(nuevoAtaqueJugador1);
    ataqueJugador2.appendChild(nuevoAtaqueJugador2);

}

function crearMensajeFinal(resultadoFinal) {
    let sectionMensajes = document.getElementById('resultado')

    sectionMensajes.innerHTML = resultadoFinal
    


    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.disabled = true
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.disabled = true
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.disabled = true


    let sectionSeleccionarReiniciar = document.getElementById('reiniciar')
    sectionSeleccionarReiniciar.style.display = 'block'

}
function reiniciarJuego(){

    location.reload()
};

function aleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
} 
window.addEventListener('load', ininciarJuego)
