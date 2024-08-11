// ejercicio 1 y 2
let nombre= prompt("ingrese su nombre")
let horas = prompt("horas trabajadas")


let pago1 = 30000
let pago2 = 33000
let pago3 = 0
let maxhoras = 10
{ 
    if (horas <= maxhoras && horas >0 ){
        alert(`señor, ${nombre} el numero de horas es ${horas} positivo y su salario equivale a ${pago1}`)
    }else if (horas<0){
        alert(`señor, ${nombre} el numero de horas es ${horas} negativo y su salario equivale a ${pago3}`)
}else if (horas > maxhoras){
    alert(`señor,${nombre} el numero de horas es ${horas} y su salario equivale a ${pago2}`)}
}
