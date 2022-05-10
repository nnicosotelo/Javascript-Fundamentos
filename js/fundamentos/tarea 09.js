// // ejercicio 1
// // Solicita un nombre, la edad y nuestra por consola el mensaje "Hola **___**, tienes **___** años y el año que viene tendrás **___** años"
// // Realiza el ejercicio con prompt (mensaje) y haz uso de los template strings.
//  let nombre = prompt('Ingrese su nombre');
//  let edad = Number(prompt('Ingrese su edad'));

//  console.log(
//      `Hola ${nombre}, tienes ${edad} y el año que viene tendras ${edad + 1} años`
//  );

// //ejercicio 2
// // Escribe un programa que pueda calcular el área de 2 figuras geométricas: triangulo y rectángulo. En primer lugar pregunta de qué figura se quiere calcular el área, después solicita los datos que necesites para calcularlo. Utiliza **switch** para pedir los datos según la figura.
// // triangulo = b * h/2
// // rectangulo = b * h

// let figura = prompt(
//     'Ingresa la figura geometrica de la que quieres saber el area: triangulo , rectangulo'
// );
// let figuraMay = figura.toUpperCase();

// if (figuraMay === 'TRIANGULO' || figuraMay === 'RECTANGULO')
// {
//     switch(figuraMay) {
//         case 'TRIANGULO':
//             let baseTria = Number(prompt('Ingrese la base del triangulo'));
//             let alturaTria = Number(prompt('Ingrese la altura del triangulo'));
//             let areaTria = (baseTria * alturaTria) / 2;
//             console.log(`El area del triangulo es igual a ${areaTria}`);
//             break;

//             case 'RECTANGULO':
//                 let baseRec = Number(prompt('Ingrese la base del rectangulo'));
//                 let alturaRec = Number(prompt('Ingrese la altura del rectangulo'));
//                 let areaRec = (baseRec * alturaRec) / 2;
//                 console.log(`El area del rectangulo es igual a ${areaRec}`);
//                 break;

//                 default:
//                     console.log('La figura ingresada no es valida')
//                     break;
//     }
// }

// //  Solicita un número e imprime todos los números pares e impares
// // desde 1 hasta ese número con el mensaje "es par" o "es impar"
// // Por ej, si el número es 5 el resultado debería ser:
// //    1 - es impar
// //    2 - es par
// //    3 - es impar
// //    4 - es par
// //    5 - es impar

// let num = parseInt(prompt('Introduce un numero'));

// for (let i = 0; i < num; i++) {
//     if( i % 2 == 0) {
//         console.log(`${i} - es par`);
//     }else{
//         console.log(`${i} - es impar`);
//     }
    
// }

// // ejercicio 4
// // Escribe un programa que permita ir introduciendo una serie
// // indeterminada de números mientras su suma no supere 50. Cuando esto
// // ocurra, se debe mostrar el total acumulado y el contador de cuantos
// // números se han introducido.


// let suma = 0;
// let cont = 0;

// while(suma <= 50){
//     suma += parseInt(prompt('Introduce un numero para añadir la suma'));
//     cont++;
// }
// console.log(`La suma total es de ${suma}`);
// console.log(`El total de los numeros ingresados es de ${cont}`);

// // Crea 3 arrays. El primero tendrá 5 números, el segundo array se llamará
// // pares y el tercero impares, ambos arrays estarán vacíos **[ ]**

// // - Multiplica cada uno de los números del primer array por un número aleatorio entre 1 y 10
// // - Si el resultado es par, guarda ese número en el array de pares y si es impar en el array de impares.
// // - Mostrar por consola: array de pares e impares

// // **Tip: se recomienda el uso de for of**

// let num = [1, 5, 8, 4, 16];
// let pares =[];
// let impares = [];
// let numAleatorio = Math.ceil(Math.random() * 10);
// let producto = num.map((x) => x * numAleatorio);

// for (const numero of producto) {
//     if(numero % 2 === 0){
//         pares.push(numero);
//     }else{
//         impares.push(numero);
//     }
    
// }
// console.log(pares);
// console.log(impares);