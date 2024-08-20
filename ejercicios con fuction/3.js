
function solicitarTipoLavadora() {
    return Number(prompt("Ingrese 1 para lavadora grande o 2 para lavadora pequeña:"));
}

function solicitarHorasAlquiler() {
    return Number(prompt("Ingrese el número de horas que desea alquilar la lavadora:"));
}

function solicitarCantidadLavadoras() {
    return Number(prompt("Ingrese el número de lavadoras que desea alquilar:"));
}

function calcularCostoLavadora(tipoLavadora, horasAlquiler) {
    if (tipoLavadora === 1) {
        return horasAlquiler * 4000; 
    } else if (tipoLavadora === 2) {
        return horasAlquiler * 3000; 
    } else {
        return 0; 
    }
}

function aplicarDescuento(costo, cantidadLavadoras) {
    if (cantidadLavadoras > 3) {
        return costo * 0.97; 
    } else {
        return costo;
    }
}

function mostrarResultadoFinal(costoFinal) {
    alert(`El costo total a pagar es $${costoFinal}.`);
}

function calcularCostoAlquilerLavadoras() {
    let tipoLavadora = solicitarTipoLavadora();
    let horasAlquiler = solicitarHorasAlquiler();
    let cantidadLavadoras = solicitarCantidadLavadoras();

    let costo = calcularCostoLavadora(tipoLavadora, horasAlquiler) * cantidadLavadoras;
    let costoFinal = aplicarDescuento(costo, cantidadLavadoras);

    mostrarResultadoFinal(costoFinal);
}

calcularCostoAlquilerLavadoras();
