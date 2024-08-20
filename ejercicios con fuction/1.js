
function calcularSalario(horasTrabajadas) {
    let salario = 0;

    if (horasTrabajadas <= 10) {
        salario = 30000;
    } else {
        salario =  33000;
    }

    return salario;
}

function solicitarNombre() {
    return prompt("Ingrese su nombre:");
}


function solicitarHoras() {
    return Number(prompt("Ingrese el número de horas trabajadas:"));
}


function mostrarResultado(nombre, horasTrabajadas, salario) {
    alert(`Señor(a) ${nombre}, el número de horas es ${horasTrabajadas} y su salario equivale a $${salario}.`);
}

function calcularYMostrarSalario() {
    let nombre = solicitarNombre();
    let horasTrabajadas = solicitarHoras();
    let salario = calcularSalario(horasTrabajadas);
    mostrarResultado(nombre, horasTrabajadas, salario);
}

calcularYMostrarSalario();
