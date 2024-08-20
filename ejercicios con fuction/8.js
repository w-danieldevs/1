
function solicitarDuracion() {
    return Number(prompt("Ingrese la duración de la mensualidad: \n1 para 15 días \n2 para 30 días \n3 para 3 meses"));
}
function calcularCosto(duracion) {
    switch (duracion) {
        case 1:
            return 18000; // Costo para 15 días
        case 2:
            return 35000; // Costo para 30 días
        case 3:
            return 86000; // Costo para 3 meses
        default:
            return 0; // Costo para opciones no válidas
    }
}
function mostrarResultadoCosto(costo) {
    if (costo === 0) {
        alert("Opción no válida. Por favor ingrese 1, 2, o 3.");
    } else {
        alert(`El costo de la mensualidad es de $${costo}.`);
    }
}
function calcularYMostrarCosto() {
    let duracion = solicitarDuracion();
    let costo = calcularCosto(duracion);
    mostrarResultadoCosto(costo);
}
calcularYMostrarCosto();
