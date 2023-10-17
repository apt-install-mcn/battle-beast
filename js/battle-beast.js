const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
const sectionSeleccionarReiniciar = document.getElementById('reiniciar')
const botonMascotaJugador = document.getElementById('boton-mascota')
const botonAgua = document.getElementById('boton-agua')
const botonTierra = document.getElementById('boton-tierra')
sectionSeleccionarReiniciar.style.display = 'none'
const botonFuego = document.getElementById('boton-fuego')
const botonReiniciar = document.getElementById("boton-reiniciar")


const sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')
const inputChapultepec = document.getElementById('Chapultepec')
const inputCrinoxlo = document.getElementById('Crinoxlo')
const inputFungionixto = document.getElementById('Fungionixto')
const inputDoblextolio = document.getElementById('Doblextolio')
const inputTricalno = document.getElementById('Tricalno')


const spanMascotaJugador = document.getElementById('mascota-jugador')


const spanVidasJugador = document.getElementById('vidas-jugador')
const spanVidasEnemigo = document.getElementById('vidas-enemigo')


const sectionMensajes = document.getElementById('resultado');
const ataqueJugador1 = document.getElementById('ataque-jugador-1');
const ataqueJugador2 = document.getElementById('ataque-jugador-2');


let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

class Beast {
    constructor(nombre, foto, vida) {
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
    }
}

let Chapultepec = new Beast('Chapultepec', './assets/Chapultepec1.png', 5)

let Crinoxlo = new Beast('Crinoxlo', './assets/Crinoxlo.png', 5)

let Fungionixto = new Beast('Fungionixto', './assets/Fungionixto.png', 5)

let Doblextolio = new Beast('Dobletolio', './assets/Doblextolio.png', 5)

let Tricalno = new Beast('Tricalno', './assets/Tricalno.png', 5)

console.log(Chapultepec)

function ininciarJuego(){

    
    sectionSeleccionarAtaque.style.display = 'none'

    botonMascotaJugador.addEventListener('click', selecionarMascotaJugador)

            botonFuego.addEventListener('click', ataqueFuego)

            botonAgua.addEventListener('click', ataqueAgua)

    
            botonTierra.addEventListener('click', ataqueTierra)


    
    botonReiniciar.addEventListener("click", reiniciarJuego)

}

function selecionarMascotaJugador(){

    sectionSeleccionarMascota.style.display = 'none'


    sectionSeleccionarAtaque.style.display = 'flex'



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




            
        if (ataqueEnemigo == ataqueJugador) {
            crearMensaje("EMPATE")
          } else if (ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA') {
            crearMensaje("GANASTE")
            vidasEnemigo--
            spanVidasEnemigo.innerHTML = vidasEnemigo

          } else if (ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO') { 
            crearMensaje("GANASTE")
            vidasEnemigo--
            spanVidasEnemigo.innerHTML = vidasEnemigo
          } else if(ataqueJugador == 'TIERRA' && ataqueEnemigo == 'AGUA') {
            crearMensaje("GANASTE")
            vidasEnemigo--
            spanVidasEnemigo.innerHTML = vidasEnemigo
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

    let nuevoAtaqueJugador1 = document.createElement('p');
    let nuevoAtaqueJugador2 = document.createElement('p');

    sectionMensajes.textContent = resultado;
    nuevoAtaqueJugador1.textContent = "Tu ataque: " + ataqueJugador;
    nuevoAtaqueJugador2.textContent = "Ataque enemigo: " + ataqueEnemigo;

    ataqueJugador1.appendChild(nuevoAtaqueJugador1);
    ataqueJugador2.appendChild(nuevoAtaqueJugador2);

}

function crearMensajeFinal(resultadoFinal) {

    sectionMensajes.innerHTML = resultadoFinal
    



    botonFuego.disabled = true

    botonAgua.disabled = true

    botonTierra.disabled = true



    sectionSeleccionarReiniciar.style.display = 'block'

}
function reiniciarJuego(){

    location.reload()
};

function aleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
} 
window.addEventListener('load', ininciarJuego)
