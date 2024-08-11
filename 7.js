// Solicitar el número de copias al usuario
let copias = parseInt(prompt("¿Cuántas copias deseas imprimir?"));

// Validar que la entrada es un número entero y positivo
if (copias <= 0 || isNaN(copias)) {
    alert("Por favor, ingresa un número válido de copias.");
} else {
    let precioPorCopia;

    // Determinar el precio por copia basado en la cantidad de copias
    if (copias <= 499) {
        precioPorCopia = 120;
    } else if (copias <= 749) {
        precioPorCopia = 100;
    } else if (copias <= 999) {
        precioPorCopia = 80;
    } else {
        precioPorCopia = 50;
    }

    // Calcular el precio total
    let precioTotal = copias * precioPorCopia;

    // Mostrar el precio por copia y el precio total
    alert(`Precio por copia: $${precioPorCopia}`);
    alert(`Tu pago será de $${precioTotal}`);
}
