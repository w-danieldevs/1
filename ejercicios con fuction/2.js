
function solicitarNumero() {
    return Number(prompt("Ingrese un número:"));
}

function determinarPositividad(numero) {
    if (numero > 0) {
        return "positivo";
    } else if (numero < 0) {
        return "negativo";
    } else {
        return "cero";
    }
}
function mostrarResultadoPositividad(numero, resultado) {
    alert(`El número ${numero} es ${resultado}.`);
}

function determinarYMostrarPositividad() {
    let numero = solicitarNumero();
    let resultado = determinarPositividad(numero);
    mostrarResultadoPositividad(numero, resultado);
}

determinarYMostrarPositividad();
