let intentos = 6;
let diccionario = ['APPLE', 'HURLS', 'WINGS', 'YOUTH']
const palabra = diccionario[Math.floor(Math.random() * diccionario.length)];
const BOTON = document.getElementById("guess-button");
const guesses = document.getElementById("guesses")

BOTON.addEventListener("click", intentar);

function intentar() {
    if (!validarPalabra()) {
        return
    }
    guesses.style.display = 'none'
    const INTENTO = leerIntento();
    const GRID = document.getElementById("grid");
    const ROW = document.createElement('div');
    ROW.className = 'row';
    if (INTENTO === palabra) {
        terminar("<h1>GANASTE!😀</h1>")
        return
    }
    for (let i in palabra) {
        const SPAN = document.createElement('span');
        SPAN.className = 'letter';
        if (INTENTO[i] === palabra[i]) { //VERDE
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = 'green';
        } else if (palabra.includes(INTENTO[i])) { //AMARILLO
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = 'yellow';
        } else {      //GRIS
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = 'grey';
        }
        ROW.appendChild(SPAN)
    }
    GRID.appendChild(ROW)
    intentos--;
    if (intentos == 1) {
        terminar("<h1>PERDISTE!😖</h1>")
        return;
    }
}

function leerIntento() {
    let intento = document.getElementById("guess-input");
    intento = intento.value;
    intento = intento.toUpperCase();
    intento = intento.replace(/\s+/g, '')
    return intento
}
function validarPalabra() {
    let intento = document.getElementById("guess-input");
    intento = intento.value;
    intento = intento.replace(/\s+/g, '')
    if (intento.length == 5) {
        return true;
    } else {
        guesses.innerHTML = '<p style="color: red; text-align:center;">La palabra debe contener 5 letras</p>';
        return false;
    }
}
function terminar(mensaje) {
    const INPUT = document.getElementById("guess-input");
    INPUT.disabled = true;
    BOTON.disabled = true;
    let contenedor = document.getElementById('guesses');
    contenedor.innerHTML = mensaje;
    contenedor.style.display = 'block';
}

const input = document.getElementById("guess-input");
const valor = input.value;


const GRID = document.getElementById("grid");

const ROW = document.createElement('div');
ROW.className = 'row';

