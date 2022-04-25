// arrays
let alumnos = ['Nico', 'Emma', 'Mateo', 'Valentino'];

// mostrar un elemento
alumnos[2] 

// mostrar el ultimo alumno
alumnos[alumnos.length - 1]

// concatenar elementos en un string
console.log(alumnos.join(' '));


// iterar los elementos de un arreglo
for (let i = 0; i < alumnos.length; i++) {
    console.log(`hola soy ${alumnos[i]}`);
}

for (const alumno of alumnos) {
    console.log(`Hola soy ${alumno}`);   
}

// agregar elementos al arreglo
alumnos.push('Ana', 'Emilia');
alumnos.unshift('Enzo');
 
// eliminar elementos del arreglo
alumnos.pop(); 
alumnos.shift();
alumnos.push('Enzo');

// encontrar la posicion indice de un elemento
console.log(alumnos.indexOf('Nico'));

// saber si un elemento existe en un elemento
console.log(alumnos.includes('Mateo'));

// eliminar un elemento por su posicion
let pos = alumnos.indexOf('Emma');
alumnos.splice(pos, 1);

// agregar alumnos desde una posicion particular
alumnos.push( 'Azul', 'Sara', 'Lucio');

// reemplazar elementos en una posicion
alumnos.splice(2, 0, 'Matilda', 'Valeria');

// nuevo arreglo
let alumnas = ['ana', 'fiorela', 'rocio', 'luz','tamara']

// concatenar arreglos
let comision = alumnos.concat(alumnas);

// ordenar arreglo a-z
console.log(comision.sort());

// ordenar arreglo z-a
console.log(comision.reverse());

// extraer en un nuevo arreglo
let ausentes = comision.slice(2, 4);

// enigma universal
console.log(['🐔', '🥚'].sort())