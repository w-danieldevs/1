

let emitePitido = prompt("¿La computadora emite un pitido al iniciarse? (sí/no)")


let discoGira = prompt("¿El disco duro gira? (sí/no)")


if ((emitePitido !== 'sí' && emitePitido !== 'no') || (discoGira !== 'sí' && discoGira !== 'no')) {
    alert("Por favor, ingresa 'sí' o 'no' para ambas preguntas.");
} else {
    if (emitePitido === 'sí' && discoGira === 'sí') {
        alert("Póngase en contacto con el técnico de apoyo.");
    } else if (emitePitido === 'sí' && discoGira === 'no') {
        alert("Verificar contactos de la unidad.");
    } else if (emitePitido === 'no' && discoGira === 'sí') {
        alert("Compruebe las conexiones de altavoces.");
    } else if (emitePitido === 'no' && discoGira === 'no') {
        alert("Traiga la computadora para repararla en la central.");
    }
}
