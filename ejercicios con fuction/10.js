
function solicitarNumeroCopias() {
    return Number(prompt("Ingrese el número de copias que desea imprimir:"));
}
function calcularPrecioPorCopia(copias) {
    if (copias >= 0 && copias <= 499) {
        return 120;
    } else if (copias >= 500 && copias <= 749) {
        return 100;
    } else if (copias >= 750 && copias <= 999) {
        return 80;
    } else if (copias >= 1000) {
        return 50;
    } else {
        return 0; 
    }
}
function calcularPrecioTotal(copias, precioPorCopia) {
    return copias * precioPorCopia;
}
function mostrarResultado(precioPorCopia, precioTotal) {
    alert(`Precio por copia: $${precioPorCopia}\nPrecio total: $${precioTotal}`);
}
function calcularYMostrarPrecios() {
    let copias = solicitarNumeroCopias();
    let precioPorCopia = calcularPrecioPorCopia(copias);
    let precioTotal = calcularPrecioTotal(copias, precioPorCopia);
    
    mostrarResultado(precioPorCopia, precioTotal);
}
calcularYMostrarPrecios();
