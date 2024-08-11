// ejercicio 7
let genero= prompt("cual es tu genero (femenino/masculino)")
let edad = prompt("cual es tu edad")
{ 
    if (genero === 'femenino') {
    if (edad > 50) {
       let apoyo1= valorApoyo = 120000;
         alert(`tu apoyo es de ${apoyo1}`)
    } else if (edad >= 30 && edad <= 50) {
        let apoyo2 = valorApoyo = 100000;
        alert (`tu apoyo es es de ${apoyo2}`)
    }
    } else if (genero === 'masculino') {
        let apoyo3 = valorApoyo = 40000; 
        alert (`tu apoyo es de${apoyo3}`)
    }
}
