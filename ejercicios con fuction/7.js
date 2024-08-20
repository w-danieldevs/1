
function solicitarGenero() {
    return prompt("Ingrese su género (M para masculino, F para femenino):").toUpperCase();
}

function solicitarEdad() {
    return Number(prompt("Ingrese su edad:"));
}

function calcularApoyo(genero, edad) {
    if (genero === "F") {
        if (edad > 50) {
            return 120000;
        } else if (edad >= 30 && edad <= 50) {
            return 100000;
        } else {
            return 0; 
        }
    } else if (genero === "M") {
        return 40000;
    } else {
        return 0; 
    }
}

function mostrarResultadoApoyo(apoyo) {
    alert(`El apoyo mensual que recibirá es de $${apoyo}.`);
}

function calcularYMostrarApoyo() {
    let genero = solicitarGenero();
    let edad = solicitarEdad();
    let apoyo = calcularApoyo(genero, edad);
    mostrarResultadoApoyo(apoyo);
}

calcularYMostrarApoyo();
