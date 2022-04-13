// Math

// Redondeo
console.log(Math.floor(9.12));
console.log(Math.ceil(20.18));
console.log(Math.round(127.07));

// Obtener el valor maximo de una lista
console.log(`El numero maximo de la lista es ${Math.max(12,554,4739,1010,340,30477,10)}`);
// Obetener el valor minimo de una lista
console.log(`El numero minimo de la lista es ${ Math.min(73,34,56,532,553,1,5)}`);

// Pasar de decimal a numero entero
let number = 63.34353
console.log(parseInt(number));
// Pasar numero a decimal
let number2 = "394.478";
console.log(parseFloat(number2));

// Elevar un numero a potencia
let base = 34
let exponente = 2

console.log(`El numero ${base} elevado a la potencia ${exponente} es de ${Math.pow(base, exponente)}`)

// Raiz cuadrada
console.log(`La raiz cuadrada de 91 es de ${Math.sqrt(81)}`)

// Numeros aleatorios
console.log(Math.ceil(Math.random() * 27));

// Devolver dos decimales
console.log(Math.round(number * 100) / 100);

console.log(parseFloat(number.toFixed(3)));


