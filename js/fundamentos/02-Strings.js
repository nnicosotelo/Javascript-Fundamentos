let nombre = 'Emmalen';
let apellido = 'Sotelin';

let frase ='         Este es un string';

// contar caracteres
console.log("El nombre tiene", nombre.length, "caracteres");
console.log(apellido.length);
console.log(frase.length);

// quitar los espacios en blanco
console.log(frase);
frase = frase.trim();

console.log(frase.length);
console.log(frase);

// mayusculas
console.log(apellido.toUpperCase());
console.log(frase.toUpperCase());
console.log(nombre.toUpperCase());

// minusculas
console.log(apellido.toLowerCase());
console.log(frase.toLowerCase());

// extraer una letra
console.log(frase.charAt(2));
console.log(frase.substring(1, 7));

// separar letras
console.log(apellido.split(""));
console.log(frase.split(" "));

let texto = 'Casco-Maidana-Pinola-Montiel';
let arregloTexto = texto.split("-");

// unir el arreglo de palabras
console.log(arregloTexto.join(" "));

// obtener la ultima letra de una palabra o frase
console.log(apellido.charAt(apellido.length - 1));

// tarea
let palabra = "Dragon"

// pasar a mayusculas
// console.log(palabra.toUpperCase);
console.log(palabra.toUpperCase());
// pasar a minusculas
console.log(palabra.toLowerCase());
// capitalizar una letra
// let primeraletra = palabra.charAt(0);
// let primerLetraMayus = primerLetra.toUpperCase();
// let restoPalabra = palabra.substring(1);
// let palabraCapitalizada = primerLetraMayus + restoPalabra;

let palabraCapitalizada =
palabra.charAt(0).toUpperCase() + palabra.substring(1);
console.log(palabraCapitalizada);

// template string
// console.log('Bienvenido nombre apellido, gracias por tu visita')
console.log(`Bienvenido ${nombre} ${apellido}, gracias por tu visita! `)
