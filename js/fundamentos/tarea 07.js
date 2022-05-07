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


let lista =[23, 45, 64, 24, 52, 235, 5525, 27];
let numero = parseInt(prompt('ingrese un numero'));

if(lista.includes(numero)) {
    console.log(`El numero ${numero} se encuntra en la lista`)
}else{
    console.log(`el numero ingresado no esta en la lista`);
}

let clasificaciones = [];
clasificaciones.push('Ana', 'Mateo', 'Raul', 'Maia', 'Azul', 'Maria');

// maia adelanta a raul
console.log(clasificaciones[3]);
clasificaciones[2] = 'Maia';
clasificaciones[3] = 'Raul';

// maria es descalificada y es eliminada
clasificaciones.pop();

// se agregan dos nuevos participantes
clasificaciones.splice(1,0, 'Roberto', 'Amaya');

// nueva participante encabeza la lista
clasificaciones.unshift('Marta');

// imprimir la lista final
console.log(clasificaciones);

let rollingCoders=[];


while (rollingCoders.length < 5) {
    
    rollingCoders.push(prompt('Ingrese el nombre del alumno'));
}

for (let index = 0; index < array.length; index++) {
    console.log(`Hola ${rollingCoders[index]} bienvenido al mundo del desarrollo web`);
    
}