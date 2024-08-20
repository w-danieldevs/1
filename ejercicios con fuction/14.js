// Función para solicitar el tamaño del sándwich al usuario
function solicitarTamaño() {
    return prompt("Ingrese el tamaño del sándwich (pequeño o grande):").toLowerCase();
}

// Función para solicitar los ingredientes adicionales al usuario
function solicitarIngredientes() {
    let ingredientes = [];
    let añadirTocineta = confirm("¿Desea añadir tocineta? (Costo adicional: $3000)");
    let añadirJalapeno = confirm("¿Desea añadir jalapeño? (Gratis)");
    let añadirPavo = confirm("¿Desea añadir pavo? (Costo adicional: $3000)");
    let añadirQueso = confirm("¿Desea añadir queso? (Costo adicional: $2500)");

    if (añadirTocineta) ingredientes.push('tocineta');
    if (añadirJalapeno) ingredientes.push('jalapeño');
    if (añadirPavo) ingredientes.push('pavo');
    if (añadirQueso) ingredientes.push('queso');

    return ingredientes;
}

// Función para calcular el costo del sándwich basado en el tamaño y los ingredientes
function calcularCostoTotal(tamaño, ingredientes) {
    let costoTamaño;
    let costoAdicional = 0;

    // Definir el costo según el tamaño
    if (tamaño === 'pequeño') {
        costoTamaño = 6000;
    } else if (tamaño === 'grande') {
        costoTamaño = 12000;
    } else {
        return "Tamaño no válido. Por favor, ingrese 'pequeño' o 'grande'.";
    }

    // Calcular el costo adicional basado en los ingredientes
    if (ingredientes.includes('tocineta')) costoAdicional += 3000;
    if (ingredientes.includes('pavo')) costoAdicional += 3000;
    if (ingredientes.includes('queso')) costoAdicional += 2500;

    // Calcular el costo total
    let costoTotal = costoTamaño + costoAdicional;
    
    return `Tamaño del sándwich: ${tamaño.charAt(0).toUpperCase() + tamaño.slice(1)}\n` +
           `Costo del tamaño: $${costoTamaño}\n` +
           `Ingredientes adicionales: ${ingredientes.join(', ')}\n` +
           `Costo adicional: $${costoAdicional}\n` +
           `Costo total: $${costoTotal}`;
}

// Función para mostrar el resultado
function mostrarResultado(mensaje) {
    alert(mensaje);
}

// Función principal que coordina todo
function crearPedidoSandwich() {
    let tamaño = solicitarTamaño();
    let ingredientes = solicitarIngredientes();
    
    let mensaje = calcularCostoTotal(tamaño, ingredientes);
    mostrarResultado(mensaje);
}

// Llamada a la función principal
crearPedidoSandwich();
