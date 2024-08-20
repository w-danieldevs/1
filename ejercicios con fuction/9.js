
function solicitarAngulo(mensaje) {
    return Number(prompt(mensaje));
}
function esTrianguloValido(angulo1, angulo2, angulo3) {
    return (angulo1 + angulo2 + angulo3 === 180);
}
function mostrarResultadoEsValido(esValido) {
    if (esValido) {
        alert("Los ángulos ingresados forman un triángulo válido.");
    } else {
        alert("Los ángulos ingresados no forman un triángulo válido.");
    }
}
function verificarTriangulo() {
    let angulo1 = solicitarAngulo("Ingrese el primer ángulo del triángulo:");
    let angulo2 = solicitarAngulo("Ingrese el segundo ángulo del triángulo:");
    let angulo3 = solicitarAngulo("Ingrese el tercer ángulo del triángulo:");

    let esValido = esTrianguloValido(angulo1, angulo2, angulo3);

    mostrarResultadoEsValido(esValido);
}
verificarTriangulo();
