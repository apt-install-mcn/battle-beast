const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
const sectionSeleccionarReiniciar = document.getElementById('reiniciar')
const botonMascotaJugador = document.getElementById('boton-mascota')
const botonReiniciar = document.getElementById("boton-reiniciar")
sectionSeleccionarReiniciar.style.display = 'none'

const sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')
const spanMascotaJugador = document.getElementById('mascota-jugador')
const spanMascotaEnemigo = document.getElementById('mascota-enemigo')
botonReiniciar.addEventListener("click", reiniciarJuego)

const spanVidasJugador = document.getElementById('vidas-jugador')
const spanVidasEnemigo = document.getElementById('vidas-enemigo')

const sectionMensajes = document.getElementById('resultado');
const ataqueJugador1 = document.getElementById('ataque-jugador-1');
const ataqueJugador2 = document.getElementById('ataque-jugador-2');
const contenedorTarjetas = document.getElementById('contenedorTarjetas');
const contendorAtaques = document.getElementById('contenedorAtaques');

let beasts = []
let ataqueJugador = []
let ataqueEnemigo = []
let opcionDeBeasts
let inputChapultepec
let inputCrinoxlo
let inputFungionixto
let inputDoblextolio
let inputTricalno
let mascotaJugador
let ataquesBeast 
let ataquesBeastEnemigo
let botonFuego
let botonAgua
let botonTierra
let botones = []
let indexAtaqueJugador
let indexAtaqueEnemigo
let victoriasJugador = 0
let victoriasEnemigo = 0 
let vidasJugador = 3
let vidasEnemigo = 3

class Beast {
    constructor(nombre, foto, estilo, vida) {
        this.nombre = nombre
        this.foto = foto
        this.estilo = estilo
        this.vida = vida
        this.ataques = []
    }
}

let Chapultepec = new Beast('Chapultepec', './assets/Chapultepec1.png', 'tarjeta-de-pokemon', 5)

let Crinoxlo = new Beast('Crinoxlo', './assets/Crinoxlo.png', 'tarjeta-de-pokemon2', 5)

let Fungionixto = new Beast('Fungionixto', './assets/Fungionixto.png', 'tarjeta-de-pokemon3', 5)

let Doblextolio = new Beast('Doblextolio', './assets/Doblextolio.png', 'tarjeta-de-pokemon4', 5)

let Tricalno = new Beast('Tricalno', './assets/Tricalno.png', 'tarjeta-de-pokemon5', 5)

Chapultepec.ataques.push(
    { nombre: '💧', id: 'boton-agua'},
    { nombre: '💧', id: 'boton-agua'},
    { nombre: '💧', id: 'boton-agua'},
    { nombre: '🔥', id: 'boton-fuego'},
    { nombre: '🌱', id: 'boton-tierra'},
)

Crinoxlo.ataques.push(
    { nombre: '💧', id: 'boton-agua'},
    { nombre: '🌱', id: 'boton-tierra'},
    { nombre: '🌱', id: 'boton-tierra'},
    { nombre: '🔥', id: 'boton-fuego'},
    { nombre: '🌱', id: 'boton-tierra'},
)

Fungionixto.ataques.push(
    { nombre: '🔥', id: 'boton-fuego'},
    { nombre: '🔥', id: 'boton-fuego'},
    { nombre: '💧', id: 'boton-agua'},
    { nombre: '🔥', id: 'boton-fuego'},
    { nombre: '🌱', id: 'boton-tierra'},
)

Doblextolio.ataques.push(
    { nombre: '💧', id: 'boton-agua'},
    { nombre: '💧', id: 'boton-agua'},
    { nombre: '💧', id: 'boton-agua'},
    { nombre: '🔥', id: 'boton-fuego'},
    { nombre: '🌱', id: 'boton-tierra'},
)

Tricalno.ataques.push(
    { nombre: '💧', id: 'boton-agua'},
    { nombre: '💧', id: 'boton-agua'},
    { nombre: '🔥', id: 'boton-fuego'},
    { nombre: '🌱', id: 'boton-tierra'},
    { nombre: '🌱', id: 'boton-tierra'},
)

beasts.push(Chapultepec, Crinoxlo, Fungionixto, Doblextolio, Tricalno)

function ininciarJuego(){
 
    sectionSeleccionarAtaque.style.display = 'none'

    beasts.forEach((beasts) => {
        opcionDeBeasts = `
        <input type="radio" name="mascota" id=${beasts.nombre}>
        <label class=${beasts.estilo}  for=${beasts.nombre}>
            <p>${beasts.nombre}</p>
            <img src=${beasts.foto} alt=${beasts.nombre}>
        </label>
        `   
        contenedorTarjetas.innerHTML += opcionDeBeasts

    inputChapultepec = document.getElementById('Chapultepec')
    inputCrinoxlo = document.getElementById('Crinoxlo')
    inputFungionixto = document.getElementById('Fungionixto')
    inputDoblextolio = document.getElementById('Doblextolio')
    inputTricalno = document.getElementById('Tricalno')
    })

    botonMascotaJugador.addEventListener('click', selecionarMascotaJugador)
}

function selecionarMascotaJugador(){

    sectionSeleccionarMascota.style.display = 'none'

    sectionSeleccionarAtaque.style.display = 'flex'

    if(inputChapultepec.checked){
        spanMascotaJugador.innerHTML = inputChapultepec.id
        mascotaJugador = inputChapultepec.id
    }else if(inputCrinoxlo.checked){
        spanMascotaJugador.innerHTML = inputCrinoxlo.id
        mascotaJugador = inputCrinoxlo.id
    }else if(inputFungionixto.checked){
        spanMascotaJugador.innerHTML = inputFungionixto.id
        mascotaJugador = inputFungionixto.id
    }else if(inputDoblextolio.checked){
        spanMascotaJugador.innerHTML = inputDoblextolio.id
        mascotaJugador = inputDoblextolio.id
    }else if(inputTricalno.checked){
        spanMascotaJugador.innerHTML = inputTricalno.id
        mascotaJugador = inputTricalno.id
    }else {
        alert('Debes seleccionar una mascota')
    }
    extraerAtaques(mascotaJugador)
    selecionarMascotaEnemigo()
}

function extraerAtaques(mascotaJugador) {
    let ataques
    for (let i = 0; i < beasts.length; i++) {
        if (mascotaJugador === beasts[i].nombre) {
            ataques = beasts[i].ataques
        }        
    }
    mostrarAtaques(ataques)
}

function mostrarAtaques(ataques) {
    ataques.forEach((ataque) => {   
        ataquesBeast = `
        <button id=${ataque.id} class="boton-de-ataque BAtaque"> ${ataque.nombre} </button>`

        contendorAtaques.innerHTML += ataquesBeast
    })

    botonAgua = document.getElementById('boton-agua')
    botonFuego = document.getElementById('boton-fuego')
    botonTierra = document.getElementById('boton-tierra')  
    botones = document.querySelectorAll('.BAtaque')  
}

function secuenciaAtaque() {    
    botones.forEach((boton) => {
        boton.addEventListener('click', (e) => {
            console.log(e)
            if (e.target.textContent === " 🔥 "){
                ataqueJugador.push('FUEGO')
                console.log(ataqueJugador)
                boton.style.background = '#112f58'
                boton.disabled = true
            } else if (e.target.textContent === " 💧 "){
                ataqueJugador.push('AGUA')
                console.log(ataqueJugador)
                boton.style.background = '#112F58'
                boton.disabled = true
            } else {
                ataqueJugador.push('TIERRA')
                console.log(ataqueJugador)
                boton.style.background = '#112f58'
                boton.disabled = true
            }
            ataqueAleatorioEnemigo()
        })
    })
}

function selecionarMascotaEnemigo() {
    let mascotaAleatorio = aleatorio(0, beasts.length -1)

    spanMascotaEnemigo.innerHTML = beasts[mascotaAleatorio].nombre
    ataquesBeastEnemigo = beasts[mascotaAleatorio].ataques
    secuenciaAtaque()
}

function ataqueAleatorioEnemigo(){
    let ataqueAleatorio = aleatorio(0,ataquesBeastEnemigo.length -1)

    if(ataqueAleatorio == 0 || ataqueAleatorio == 1) {
        ataqueEnemigo.push('FUEGO')
    } else if (ataqueAleatorio == 3 || ataqueAleatorio == 4){
        ataqueEnemigo.push('AGUA')
    } else { 
        ataqueEnemigo.push('TIERRA')
    }
    console.log(ataqueEnemigo)
    iniciarPelea()
}

function iniciarPelea(){
    if (ataqueJugador.length === 5) {
        combate()
    } else if (Tricalno.length === 6){
        combate()
    }
}

function indexAmbosOponentes(jugador, enemigo){
    indexAtaqueJugador = ataqueJugador[jugador]
    indexAtaqueEnemigo = ataqueEnemigo[enemigo]

}

function combate() {

    for (let index = 0; index < ataqueJugador.length; index++) {
        if(ataqueJugador[index] === ataqueEnemigo[index]){
            indexAmbosOponentes(index, index)
            crearMensaje("EMPATE")
        } else if (ataqueJugador[index] === "FUEGO" && ataqueEnemigo[index] === "TIERRA"){
            indexAmbosOponentes(index, index)
            crearMensaje("GANASTE")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
        } else if (ataqueJugador[index] === "AGUA" && ataqueEnemigo[index] === "FUEGO"){
            indexAmbosOponentes(index, index)
            crearMensaje("GANASTE")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
        } else if (ataqueJugador[index] === "TIERRA" && ataqueEnemigo[index] === "AGUA") {
            indexAmbosOponentes(index, index)
            crearMensaje("GANASTE")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
        } else {
            indexAmbosOponentes(index, index)
            crearMensaje("PERDISTE")
            victoriasEnemigo++
            spanVidasEnemigo.innerHTML = victoriasEnemigo
        }

    }

    revisarVidas()

}


function revisarVidas(){
    if (victoriasJugador === victoriasEnemigo){
        crearMensajeFinal("EMPATE")
    }else if (victoriasJugador > victoriasEnemigo){
        crearMensajeFinal("GANASTE")   
    } else {
        crearMensajeFinal("Perdiste") 
    }
}


function crearMensaje(resultado) {

    let nuevoAtaqueJugador1 = document.createElement('p');
    let nuevoAtaqueJugador2 = document.createElement('p');

    sectionMensajes.textContent = resultado;
    nuevoAtaqueJugador1.textContent = "Tu ataque: " + indexAtaqueJugador;
    nuevoAtaqueJugador2.textContent = "Ataque enemigo: " + indexAtaqueEnemigo;

    ataqueJugador1.appendChild(nuevoAtaqueJugador1);
    ataqueJugador2.appendChild(nuevoAtaqueJugador2);

}

function crearMensajeFinal(resultadoFinal) {

    sectionMensajes.innerHTML = resultadoFinal

    sectionSeleccionarReiniciar.style.display = 'block'

}
function reiniciarJuego(){

    location.reload()
};

function aleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
} 
window.addEventListener('load', ininciarJuego)
