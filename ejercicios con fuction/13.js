// Función para solicitar el operador al usuario
function solicitarOperador() {
    return prompt("Ingrese el operador: Claro, Tigo o Movistar").toLowerCase();
}

// Función para solicitar la cantidad de minutos internacionales
function solicitarMinutosInternacionales() {
    return Number(prompt("Ingrese la cantidad de minutos internacionales consumidos:"));
}

// Función para calcular el costo total basado en el operador y minutos
function calcularCostoTotal(operador, minutos) {
    let cargoFijo, valorMinutoInternacional, valorPaqueteDatos;

    switch (operador) {
        case 'tigo':
            cargoFijo = 45000;
            valorMinutoInternacional = 200;
            valorPaqueteDatos = 12000;
            break;
        case 'claro':
            cargoFijo = 30000;
            valorMinutoInternacional = 100;
            valorPaqueteDatos = 18000;
            break;
        case 'movistar':
            cargoFijo = 40000;
            valorMinutoInternacional = 250;
            valorPaqueteDatos = 8000;
            break;
        default:
            return "Operador no válido. Por favor, ingrese Claro, Tigo o Movistar.";
    }

    let costoMinutosInternacionales = minutos * valorMinutoInternacional;
    let costoTotal = cargoFijo + costoMinutosInternacionales + valorPaqueteDatos;

    return `Operador: ${operador.charAt(0).toUpperCase() + operador.slice(1)}\n` +
           `Costo fijo: $${cargoFijo}\n` +
           `Costo por minutos internacionales: $${costoMinutosInternacionales}\n` +
           `Costo del paquete de datos: $${valorPaqueteDatos}\n` +
           `Costo total: $${costoTotal}`;
}

// Función para mostrar el resultado
function mostrarResultado(mensaje) {
    alert(mensaje);
}

// Función principal que coordina todo
function calcularCostoServicio() {
    let operador = solicitarOperador();
    let minutos = solicitarMinutosInternacionales();

    let mensaje = calcularCostoTotal(operador, minutos);
    mostrarResultado(mensaje);
}

// Llamada a la función principal
calcularCostoServicio();
