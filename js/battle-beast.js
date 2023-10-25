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

const sectionVerMapa = document.getElementById('ver-mapa');
const mapa = document.getElementById('mapa');

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
let mascotaJugadorObjeto
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
let lienzo = mapa.getContext("2d")
let intervalo
let mapaBackground = new Image();
mapaBackground.src = "/assets/mapa.jpg"
let altoMapa
let anchoMapa = window.innerWidth - 20
const anchoMaxMapa = 1080

if (anchoMapa > anchoMaxMapa) {
    anchoMapa = anchoMaxMapa -20
}

altoMapa = (anchoMapa * 600) / 800

mapa.width = anchoMapa
mapa.height = altoMapa

class Beast {
    constructor(nombre, foto, estilo, vida, fotoMapa) {
        this.nombre = nombre
        this.foto = foto
        this.estilo = estilo
        this.vida = vida
        this.ataques = []
        this.ancho = 60
        this.alto = 60
        this.x = aleatorio(0, mapa.width - this.ancho)
        this.y = aleatorio(0, mapa.height - this.alto)
        this.mapaFoto = new Image()
        this.mapaFoto.src = fotoMapa
        this.velocidadX = 0
        this.velocidadY = 0
    }

    pintarBeast(){
        lienzo.drawImage(
            this.mapaFoto,
            this.x,
            this.y,
            this.ancho,
            this.alto
        )
    }
}

let Chapultepec = new Beast('Chapultepec', './assets/Chapultepec1.png', 'tarjeta-de-pokemon', 5, "/assets/cabeza-Chapultepec.png")

let Crinoxlo = new Beast('Crinoxlo', './assets/Crinoxlo.png', 'tarjeta-de-pokemon2', 5, "/assets/cabeza-Crinoxlo.png")

let Fungionixto = new Beast('Fungionixto', './assets/Fungionixto.png', 'tarjeta-de-pokemon3', 5, "/assets/cabeza-Fungionixto.png")

let Doblextolio = new Beast('Doblextolio', './assets/Doblextolio.png', 'tarjeta-de-pokemon4', 5, "/assets/cabeza-Doblextolio.png")

let Tricalno = new Beast('Tricalno', './assets/Tricalno.png', 'tarjeta-de-pokemon5', 5, "/assets/cabeza-Tricalno.png")

let ChapultepecEnemigo = new Beast('Chapultepec', './assets/Chapultepec1.png', 'tarjeta-de-pokemon', 5, "/assets/cabeza-Chapultepec.png")

let CrinoxloEnemigo = new Beast('Crinoxlo', './assets/Crinoxlo.png', 'tarjeta-de-pokemon2', 5, "/assets/cabeza-Crinoxlo.png")

let FungionixtoEnemigo = new Beast('Fungionixto', './assets/Fungionixto.png', 'tarjeta-de-pokemon3', 5, "/assets/cabeza-Fungionixto.png")

let DoblextolioEnemigo = new Beast('Doblextolio', './assets/Doblextolio.png', 'tarjeta-de-pokemon4', 5, "/assets/cabeza-Doblextolio.png")

let TricalnoEnemigo = new Beast('Tricalno', './assets/Tricalno.png', 'tarjeta-de-pokemon5', 5, "/assets/cabeza-Tricalno.png")

Chapultepec.ataques.push(
    { nombre: '💧', id: 'boton-agua'},
    { nombre: '💧', id: 'boton-agua'},
    { nombre: '💧', id: 'boton-agua'},
    { nombre: '🔥', id: 'boton-fuego'},
    { nombre: '🌱', id: 'boton-tierra'},
)

ChapultepecEnemigo.ataques.push(
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

CrinoxloEnemigo.ataques.push(
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

FungionixtoEnemigo.ataques.push(
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

DoblextolioEnemigo.ataques.push(
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

TricalnoEnemigo.ataques.push(
    { nombre: '💧', id: 'boton-agua'},
    { nombre: '💧', id: 'boton-agua'},
    { nombre: '🔥', id: 'boton-fuego'},
    { nombre: '🌱', id: 'boton-tierra'},
    { nombre: '🌱', id: 'boton-tierra'},
)

beasts.push(Chapultepec, Crinoxlo, Fungionixto, Doblextolio, Tricalno)

function ininciarJuego(){
 
    sectionSeleccionarAtaque.style.display = 'none'
    sectionVerMapa.style.display = 'none' 

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
    sectionVerMapa.style.display = 'flex'
    iniciarMapa()
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

function selecionarMascotaEnemigo(enemigo) {
    spanMascotaEnemigo.innerHTML = enemigo.nombre
    ataquesBeastEnemigo = enemigo.ataques 
    secuenciaAtaque()
}

function ataqueAleatorioEnemigo(){
    console.log("ataques enemigo", ataquesBeastEnemigo);
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

function pintarCanvas() {

    mascotaJugadorObjeto.x = mascotaJugadorObjeto.x + mascotaJugadorObjeto.velocidadX
    mascotaJugadorObjeto.y = mascotaJugadorObjeto.y + mascotaJugadorObjeto.velocidadY
    lienzo.clearRect(0, 0, mapa.width, mapa.height)
    lienzo.drawImage(
        mapaBackground,
        0,
        0,
        mapa.width,
        mapa.height
    )
        mascotaJugadorObjeto.pintarBeast()
        ChapultepecEnemigo.pintarBeast()
        CrinoxloEnemigo.pintarBeast()
        FungionixtoEnemigo.pintarBeast()
        DoblextolioEnemigo.pintarBeast()
        TricalnoEnemigo.pintarBeast()
        if (mascotaJugadorObjeto.velocidadX !== 0 ||
            mascotaJugadorObjeto.velocidadY !== 0) { 
                revisarColision(ChapultepecEnemigo)
                revisarColision(CrinoxloEnemigo)
                revisarColision(FungionixtoEnemigo)
                revisarColision(DoblextolioEnemigo)
                revisarColision(TricalnoEnemigo)
        }
}

function moverArriba(){
    mascotaJugadorObjeto.velocidadY = -5
}

function moverIzquierda(){
    mascotaJugadorObjeto.velocidadX = -5
}

function moverAbajo(){
    mascotaJugadorObjeto.velocidadY = 5
}

function moverDerecha(){
    mascotaJugadorObjeto.velocidadX = 5
}

function detenerMovimiento(){
    mascotaJugadorObjeto.velocidadX = 0
    mascotaJugadorObjeto.velocidadY = 0
}

function sePresionaUnaTecla(event){ 
    switch (event.key) {
        case "ArrowUp":
            moverArriba()
            break
        case "ArrowDown":
            moverAbajo()
            break
        case "ArrowLeft":
            moverIzquierda() 
            break
        case "ArrowRight":
            moverDerecha()
            break
        default:
            break
    }
}

function iniciarMapa() {

    mascotaJugadorObjeto = obtenerObjetoBeast(mascotaJugador)
    intervalo = setInterval(pintarCanvas, 50)

window.addEventListener('keydown', sePresionaUnaTecla)

window.addEventListener('keyup', detenerMovimiento) 
}

function obtenerObjetoBeast() {
    for (let i = 0; i < beasts.length; i++) {
        if (mascotaJugador === beasts[i].nombre) {
            return beasts[i];
        }
    }
}

function revisarColision(enemigo) {
    const arribaEnemigo = enemigo.y
    const abajoEnemigo = enemigo.y + enemigo.alto 
    const derechaEnemigo = enemigo.x + enemigo.ancho
    const izquierdaEnemigo = enemigo.x

    const arribaBeast = 
        mascotaJugadorObjeto.y
    const abajoBeast = 
        mascotaJugadorObjeto.y + mascotaJugadorObjeto.alto 
    const derechaBeast = 
        mascotaJugadorObjeto.x + mascotaJugadorObjeto.ancho
    const izquierdaBeast = 
        mascotaJugadorObjeto.x
    
    if(
        abajoBeast < arribaEnemigo || 
        arribaBeast > abajoEnemigo ||
        derechaBeast < izquierdaEnemigo ||
        izquierdaBeast > derechaEnemigo
    
     ) {
        return
     }
     detenerMovimiento()
     clearInterval(intervalo)
     console.log("se dectecto una colision");
     sectionSeleccionarAtaque.style.display = 'flex'
     sectionVerMapa.style.display = 'none'
     selecionarMascotaEnemigo(enemigo)
}

window.addEventListener('load', ininciarJuego)
