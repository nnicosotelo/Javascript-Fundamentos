// tarea

let frase = 'La sonrisa es la mejor respuesta para una mirada';

let palabras = frase.toLowerCase().split(' ');

// numero de palabras
console.log(`La cantidad de palabras es de ${palabras.length}`);

// primera palabra

console.log(`La primera palabra es ${palabras[0]}`);

// ultima palabra

console.log(`La ultima palabra es ${palabras[palabras.length - 1]}`)

console.log(palabras.reverse());

console.log(palabras.sort());

console.log(palabras.sort().reverse());