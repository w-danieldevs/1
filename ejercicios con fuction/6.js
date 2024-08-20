
function solicitarNumero(mensaje) {
    return Number(prompt(mensaje));
}

function encontrarMayor(num1, num2, num3) {
    if (num1 >= num2 && num1 >= num3) {
        return num1;
    } else if (num2 >= num1 && num2 >= num3) {
        return num2;
    } else {
        return num3;
    }
}

function mostrarResultadoMayor(numeroMayor) {
    alert(`El número mayor es: ${numeroMayor}`);
}
function determinarYMostrarMayor() {
    let num1 = solicitarNumero("Ingrese el primer número:");
    let num2 = solicitarNumero("Ingrese el segundo número:");
    let num3 = solicitarNumero("Ingrese el tercer número:");

    let numeroMayor = encontrarMayor(num1, num2, num3);

    mostrarResultadoMayor(numeroMayor);
}
determinarYMostrarMayor();
