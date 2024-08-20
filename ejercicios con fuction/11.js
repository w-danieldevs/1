// Función para solicitar al usuario si la computadora emite un pitido
function solicitarPito() {
    return confirm("¿La computadora emite un pitido al iniciarse?");
}

// Función para solicitar al usuario si el disco duro gira
function solicitarDiscoDuroGira() {
    return confirm("¿El disco duro gira?");
}

// Función para determinar el estado de la computadora y mostrar el mensaje adecuado
function determinarEstadoComputadora(emitePito, discoDuroGira) {
    if (emitePito && discoDuroGira) {
        return "Póngase en contacto con el técnico de apoyo.";
    } else if (emitePito && !discoDuroGira) {
        return "Verificar contactos de la unidad.";
    } else if (!emitePito && !discoDuroGira) {
        return "Traiga la computadora para repararla en la central.";
    } else if (!emitePito && discoDuroGira) {
        return "Compruebe las conexiones de altavoces.";
    }
}

// Función para mostrar el resultado
function mostrarResultado(mensaje) {
    alert(mensaje);
}

// Función principal que coordina todo
function verificarEstadoComputadora() {
    let emitePito = solicitarPito();
    let discoDuroGira = solicitarDiscoDuroGira();

    let mensaje = determinarEstadoComputadora(emitePito, discoDuroGira);

    mostrarResultado(mensaje);
}

// Llamada a la función principal
verificarEstadoComputadora();
