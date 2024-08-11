// ejercicio 8
let mese = parseInt(prompt("¿Cuántos meses deseas pagar?"), 10);

// Define el costo mensual
let costoMensual = 35000;

// Calcula el costo total
let costoTotal = mese * costoMensual;

alert(`Te toca pagar ${costoTotal.toFixed(2)} pesos.`);
