
function solicitarNumeroModelo() {
    return Number(prompt("Ingrese el número de modelo de su automóvil:"));
}

function esModeloDefectuoso(modelo) {
    const modelosDefectuosos = [119, 179, 221, 780];
    for (let i = 189; i <= 195; i++) {
        modelosDefectuosos.push(i);
    }
    return modelosDefectuosos.includes(modelo);
}

function mostrarResultado(defectuoso) {
    if (defectuoso) {
        alert("El automóvil está defectuoso, llevar a garantía.");
    } else {
        alert("Su automóvil no está defectuoso.");
    }
}

// Función principal que coordina todo
function verificarModelo() {
    let modelo = solicitarNumeroModelo();
    let defectuoso = esModeloDefectuoso(modelo);
    mostrarResultado(defectuoso);
}

verificarModelo();
