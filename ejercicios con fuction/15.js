
function obtenerCartaAleatoria() {
    return Math.floor(Math.random() * 10) + 1;
}
function calcularPuntuacion(cartas) {
    return cartas.reduce((total, carta) => total + carta, 0);
}
function mostrarCartasPuntuacion(nombre, cartas) {
    return `${nombre} tiene las cartas ${cartas.join(', ')} con una puntuación de ${calcularPuntuacion(cartas)}.`;
}
function mostrarResultado(mensaje) {
    alert(mensaje);
}
function juego21() {
    let cartasUsuario = [obtenerCartaAleatoria(), obtenerCartaAleatoria()];
    let cartasComputadora = [obtenerCartaAleatoria(), obtenerCartaAleatoria()];
    alert(mostrarCartasPuntuacion('Usuario', cartasUsuario));
    let continuar = confirm("¿Desea recibir una carta adicional? (OK para sí, Cancelar para no)");
    if (continuar) {
        cartasUsuario.push(obtenerCartaAleatoria());
        alert(mostrarCartasPuntuacion('Usuario', cartasUsuario));
    }
    cartasComputadora.push(obtenerCartaAleatoria());
    let puntuacionUsuario = calcularPuntuacion(cartasUsuario);
    let puntuacionComputadora = calcularPuntuacion(cartasComputadora);
    alert(`${mostrarCartasPuntuacion('Computadora', cartasComputadora)}\n`);
    let mensaje;
    if (puntuacionUsuario > 21 && puntuacionComputadora <= 21) {
        mensaje = "El usuario ha pasado de 21. La computadora gana.";
    } else if (puntuacionComputadora > 21 && puntuacionUsuario <= 21) {
        mensaje = "La computadora ha pasado de 21. El usuario gana.";
    } else if (puntuacionUsuario <= 21 && puntuacionComputadora <= 21) {
        if (puntuacionUsuario > puntuacionComputadora) {
            mensaje = "El usuario gana.";
        } else if (puntuacionComputadora > puntuacionUsuario) {
            mensaje = "La computadora gana.";
        } else {
            mensaje = "Es un empate.";
        }
    } else {
        mensaje = "Ambos jugadores han pasado de 21. Es un empate.";
    }

    mostrarResultado(mensaje);
}
juego21();
