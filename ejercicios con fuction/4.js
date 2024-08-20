
function solicitarNumero() {
    return Number(prompt("Ingrese un número:"));
}

function determinarParidad(numero) {
    if (numero % 2 === 0) {
        return "par";
    } else {
        return "impar";
    }
}

function mostrarResultadoParidad(numero, resultado) {
    alert(`El número ${numero} es ${resultado}.`);
}

function determinarYMostrarParidad() {
    let numero = solicitarNumero();
    let resultado = determinarParidad(numero);
    mostrarResultadoParidad(numero, resultado);
}

determinarYMostrarParidad();
