let boton = document.getElementById('calcular')
let dia = document.getElementById('dia');
let flu = document.getElementById('flu')
let man = document.getElementById('man')
let sc1 = document.getElementById('sc1')
let sc2 = document.getElementById('sc2')
let error = document.getElementById('error')
let pesoInput = document.getElementById('peso')

boton.addEventListener('click', () => {
    let peso = pesoInput.valueAsNumber
    let diario, flujo, mantenimientoValor, valor, valor1, valor2
    //validacion de datos
    if (pesoInput <= 0 || isNaN(peso)) {
        error.style.display = 'block';
        return;
    }
    if (peso <= 30) {
        diario = calculoHollidaySegar(peso)
        flujo = Math.round(flujoHorario(peso))
        mantenimientoValor = Math.round(mantenimiento(peso))
        dia.innerText = diario + " cc"
        flu.innerText = flujo + " cc/hr"
        man.innerText = mantenimientoValor + " cc/hr"

        componentesHasta30()
    } else {
        valor = metodoSuperficieCoroporal(peso)
        valor1 = valor * 1500
        valor2 = valor * 2000
        sc1.innerText = "Sc *1500: " + Math.round(valor1)
        sc2.innerText = "Sc *2000: " + Math.round(valor2)

        componentesMayorA30()
    }

})


function calculoHollidaySegar(peso) {
    let resultado
    if (peso <= 10) {
        resultado = peso * 100
    } else if (peso <= 20) {
        resultado = (peso - 10) * 50 + (10 * 100)
    } else if (peso > 20) {
        resultado = (10 * 100) + (10 * 50) + (peso - 20) * 20
    }
    return resultado
}
function metodoSuperficieCoroporal(peso) {
    let resultado = ((peso * 4) + 7) / (peso + 90)
    return resultado
}
function flujoHorario(peso) {
    return calculoHollidaySegar(peso) / 24
}
function mantenimiento(peso) {
    return flujoHorario(peso) * 1.5
}
function componentesHasta30() {
    dia.style.display = 'block';
    flu.style.display = 'block';
    man.style.display = 'block';
    sc1.style.display = 'none'
    sc2.style.display = 'none'
}
function componentesMayorA30() {
    dia.style.display = 'none';
    flu.style.display = 'none';
    man.style.display = 'none';

    sc1.style.display = 'block'
    sc2.style.display = 'block'
}