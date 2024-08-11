const precios = {
    pequeno: 6000,
    grande: 12000,
    tocineta: 3000,
    pavo: 3000,
    queso: 2500
};

// Solicitar al usuario el tamaño del sándwich
let tamano = prompt("Ingrese el tamaño del sándwich (pequeño o grande):").toLowerCase();

// Validar el tamaño del sándwich
if (tamano !== "pequeño" && tamano !== "grande") {
    alert("Tamaño no válido. Por favor, ingrese 'pequeño' o 'grande'.");
} else {
    // Convertir "pequeño" a "pequeno" para coincidir con las claves del objeto
    tamano = tamano === "pequeño" ? "pequeno" : "grande";

    // Solicitar los ingredientes adicionales
    let tocineta = prompt("¿Desea añadir tocineta? (sí o no):").toLowerCase();
    let pavo = prompt("¿Desea añadir pavo? (sí o no):").toLowerCase();
    let queso = prompt("¿Desea añadir queso? (sí o no):").toLowerCase();

    // Inicializar el costo total con el precio del sándwich
    let costoTotal = precios[tamano];

    // Sumar el costo de los ingredientes adicionales si se seleccionan
    if (tocineta === "si" || tocineta === "si") {
        costoTotal += precios.tocineta;
    }
    if (pavo === "si" || pavo === "si") {
        costoTotal += precios.pavo;
    }
    if (queso === "si" || queso === "si") {
        costoTotal += precios.queso;
    }

    // Mostrar el resultado
    alert(`Tamaño del sándwich: ${tamano === "pequeno" ? "pequeño" : "grande"}\nCosto del sándwich: $${precios[tamano]}\nCosto adicional tocineta: $${(tocineta === "si" || tocineta === "si") ? precios.tocineta : 0}\nCosto adicional pavo: $${(pavo === "si" || pavo === "si") ? precios.pavo : 0}\nCosto adicional queso: $${(queso === "si" || queso === "si") ? precios.queso : 0}\nCosto total a pagar: $${costoTotal}`);
}
