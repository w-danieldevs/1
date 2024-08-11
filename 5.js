// Solicitar y calcular las notas promedio para Física
let fisicaNota1 = parseInt(prompt("Ingrese la primera nota para Física (0 a 10):"));
let fisicaNota2 = parseInt(prompt("Ingrese la segunda nota para Física (0 a 10):"));
let fisicaNota3 = parseInt(prompt("Ingrese la tercera nota para Física (0 a 10):"));
if (fisicaNota1 < 0 || fisicaNota1 > 10 || 
    fisicaNota2 < 0 || fisicaNota2 > 10 || 
    fisicaNota3 < 0 || fisicaNota3 > 10) {
    alert("Las notas de Física deben estar entre 0 y 10.");
    throw new Error("Error en las notas de Física");  // Termina la ejecución en caso de error
}
let promedioFisica = (fisicaNota1 + fisicaNota2 + fisicaNota3) / 3;

// Solicitar y calcular las notas promedio para Química
let quimicaNota1 = parseInt(prompt("Ingrese la primera nota para Química (0 a 10):"));
let quimicaNota2 = parseInt(prompt("Ingrese la segunda nota para Química (0 a 10):"));
let quimicaNota3 = parseInt(prompt("Ingrese la tercera nota para Química (0 a 10):"));
if (quimicaNota1 < 0 || quimicaNota1 > 10 || 
    quimicaNota2 < 0 || quimicaNota2 > 10 || 
    quimicaNota3 < 0 || quimicaNota3 > 10) {
    alert("Las notas de Química deben estar entre 0 y 10.");
    throw new Error("Error en las notas de Química");  // Termina la ejecución en caso de error
}
let promedioQuimica = (quimicaNota1 + quimicaNota2 + quimicaNota3) / 3;

// Solicitar y calcular las notas promedio para Biología
let biologiaNota1 = parseInt(prompt("Ingrese la primera nota para Biología (0 a 10):"));
let biologiaNota2 = parseInt(prompt("Ingrese la segunda nota para Biología (0 a 10):"));
let biologiaNota3 = parseInt(prompt("Ingrese la tercera nota para Biología (0 a 10):"));
if (biologiaNota1 < 0 || biologiaNota1 > 10 || 
    biologiaNota2 < 0 || biologiaNota2 > 10 || 
    biologiaNota3 < 0 || biologiaNota3 > 10) {
    alert("Las notas de Biología deben estar entre 0 y 10.");
    throw new Error("Error en las notas de Biología");  // Termina la ejecución en caso de error
}
let promedioBiologia = (biologiaNota1 + biologiaNota2 + biologiaNota3) / 3;

// Solicitar y calcular las notas promedio para Matemáticas
let matematicasNota1 = parseInt(prompt("Ingrese la primera nota para Matemáticas (0 a 10):"));
let matematicasNota2 = parseInt(prompt("Ingrese la segunda nota para Matemáticas (0 a 10):"));
let matematicasNota3 = parseInt(prompt("Ingrese la tercera nota para Matemáticas (0 a 10):"));
if (matematicasNota1 < 0 || matematicasNota1 > 10 || 
    matematicasNota2 < 0 || matematicasNota2 > 10 || 
    matematicasNota3 < 0 || matematicasNota3 > 10) {
    alert("Las notas de Matemáticas deben estar entre 0 y 10.");
    throw new Error("Error en las notas de Matemáticas");  // Termina la ejecución en caso de error
}
let promedioMatematicas = (matematicasNota1 + matematicasNota2 + matematicasNota3) / 3;

// Solicitar y calcular las notas promedio para Informática
let informaticaNota1 = parseInt(prompt("Ingrese la primera nota para Informática (0 a 10):"));
let informaticaNota2 = parseInt(prompt("Ingrese la segunda nota para Informática (0 a 10):"));
let informaticaNota3 = parseInt(prompt("Ingrese la tercera nota para Informática (0 a 10):"));
if (informaticaNota1 < 0 || informaticaNota1 > 10 || 
    informaticaNota2 < 0 || informaticaNota2 > 10 || 
    informaticaNota3 < 0 || informaticaNota3 > 10) {
    alert("Las notas de Informática deben estar entre 0 y 10.");
    throw new Error("Error en las notas de Informática");  // Termina la ejecución en caso de error
}
let promedioInformatica = (informaticaNota1 + informaticaNota2 + informaticaNota3) / 3;

// Calcular el promedio general
let promedioGeneral = (promedioFisica + promedioQuimica + promedioBiologia + promedioMatematicas + promedioInformatica) / 5;

// Determinar la calificación
let calificacion;
if (promedioGeneral >= 0 && promedioGeneral <= 5.9) {
    calificacion = "mala";
} else if (promedioGeneral >= 6 && promedioGeneral <= 8) {
    calificacion = "buena";
} else if (promedioGeneral > 8) {
    calificacion = "excelente";
}

// Mostrar el resultado
alert(`Promedio General: ${promedioGeneral.toFixed(2)}`);
alert(`Calificación: ${calificacion}`);

        