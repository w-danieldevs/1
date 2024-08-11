// ejercicio 3 y 4 


let tipoDeLavadora = parseInt(prompt("1. Lavadora grande o 2. Lavadora pequeña"));
let lavadoras = parseInt(prompt("¿Cuántas lavadoras?"));
let cantidadHoras = parseInt(prompt("¿Cuántas horas quieres?"));

let lavadoraGrande = {
    valor: 4000
};

let lavadoraPequeña = {
    valor: 3000
};


let costoTotal = 0;

if (tipoDeLavadora === 1) {
 
    costoTotal = lavadoraGrande.valor * cantidadHoras * lavadoras;
} else if (tipoDeLavadora === 2) {
 
    costoTotal = lavadoraPequeña.valor * cantidadHoras * lavadoras;
}

// Aplica el descuento si se alquilan más de 3 lavadoras
if (lavadoras >= 3) {
    costoTotal *= 0.97; // Descuento del 3%
}
if 
(par = (costoTotal % 2 ===0 )){
alert(`Costo total: ${costoTotal.toFixed(2)} pesos.${par}`);
} else {
    alert(`Costo total: ${costoTotal.toFixed(2)} pesos.${par}`);
}

