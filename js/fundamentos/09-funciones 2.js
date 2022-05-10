// diferencias entre anonimas y declarativas

function calcularDescuento(precio, descuento){
    // cual es el precio con el descuento
    let descuentoCalculado=100 - descuento
    let montoConDescuento=(precio*descuentoCalculado)/100

    return `El importe a pagar es de ${calcularDescuento}`
}

console.log(calcularDescuento(2500, 15));

const calcularDescuento2 = function(precio, descuento){
    let descuentoCalculado = 100 - descuento;
    let montoConDescuento = (precio * descuentoCalculado)/100;

    return `El importe a pagar es de ${montoConDescuento}`;
};

console.log(calcularDescuento2(3000, 15));
// // callbacks
// // son funciones que se envian como parametros y se ejecutan despues de un metodo

// let numeros = [23, 13, 48, 54, 10, 95, 25, 20, 1, 2, 9, 7];

// let numerosOrdenados=numeros.sort(function(a,b){

//     return a - b;
// });

// // filter
// let pares=numeros.filter(function(num) {
//     return num % 2 === 0;

// })

// let mayor = numeros.filter(function(num){
//     return num > 10;
// })

// let menor = numeros.filter(function(num){
//     return num < 10;
// })

// let impares = numeros.filter(function(num){
//     return num % 2 === 1;
// })

// // find
// let alumnos = ['Nico','Mateo','Emma','Azul']
// let resultadoBusqueda=alumnos.find(function (alumno){
//     return alumno === 'Mateo';
// });

// let resultadoBusquedaNumeros = numeros.find(function(numero){
//     return numero < 10;
// });

// // map
// let numerosDobles = numeros.map(function(num){
//     return num * 2;
// });

// let nombresMayus = alumnos.map(function(alumno){
//     return alumno.toUpperCase();
// })

// let nombresMinus = alumnos.map(function(alumno){
//     return alumno.toLowerCase();
// });

// // forEach
// alumnos.forEach(function(alumno){
//     let nombresMayuscula = alumno.toUpperCase();
//     console.log('Hola, soy', nombresMayuscula)
// });

// for (const alumno of alumnos) {
//     let nombresMayuscula = alumno.toUpperCase();
//     console.log('Hola, soy', nombresMayuscula);
// }

// tarea
// ordenar los numeros de mayor a menor
let numero1 = [14, 54, 63, 653, 352];
let numero2 = [856, 14, 17, 29, 586];
let numero3 = [27, 07, 19, 98, 29, 12];

function ejercicio1(){
    let numerosParaOrdenar = numero1.concat(numero2, numero3)
    numerosParaOrdenar.sort(function(a, b){
        return b - a;
    });
    console.log(numerosParaOrdenar);
}

// tarea 2
// filtrar los nombres que tengan la letra m

let personas = [
    'Marcela',
    'Miriam',
    'Gonzalo',
    'Enzo',
    'Nicole',
    'Irma',
    'Azul',
];
function obtenerNombreconLetra(letra){
    let nombres = personas.filter(function(nombre){
        return nombre.toUpperCase().includes(letra.toUpperCase());
    });
        return nombres;
}
console.log(obtenerNombreconLetra('m'));

// tarea 3
// ordenar los nombres por orden alfabetico

let lenguajes = ['Javascript', 'c++', 'c#', 'java', '.net'];

function ordenarLenguajes(){
 
    let lenguajesOrdenados = [];
    console.log(lenguajesOrdenados);

    lenguajesOrdenados = lenguajes.slice(0);

    lenguajesOrdenados.sort().map(function(lenguaje, index){
        console.log(`${index + 1} - ${lenguaje,toUpperCase()}`)
    });
}
