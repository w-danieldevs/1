
function solicitarCalificacion(materia) {
    return Number(prompt(`Ingrese la calificación de ${materia} (de 0 a 10):`));
}

function calcularPromedio(calificaciones) {
    let suma = 0;
    for (let i = 0; i < calificaciones.length; i++) {
        suma += calificaciones[i];
    }
    return suma / calificaciones.length;
}
function determinarCalificacion(promedio) {
    if (promedio >= 0 && promedio < 6) {
        return "Mala";
    } else if (promedio >= 6 && promedio <= 8) {
        return "Buena";
    } else if (promedio > 8) {
        return "Muy Buena";
    } else {
        return "Calificación no válida";
    }
}
function mostrarResultadoFinal(promedio, calificacion) {
    alert(`El promedio es ${promedio.toFixed(2)} y la calificación es: ${calificacion}.`);
}
function calcularYMostrarCalificacion() {
    let materias = ["Física", "Química", "Biología", "Matemáticas", "Informática"];
    let calificaciones = [];

    for (let i = 0; i < materias.length; i++) {
        calificaciones.push(solicitarCalificacion(materias[i]));
    }

    let promedio = calcularPromedio(calificaciones);
    let calificacion = determinarCalificacion(promedio);

    mostrarResultadoFinal(promedio, calificacion);
}
calcularYMostrarCalificacion();
