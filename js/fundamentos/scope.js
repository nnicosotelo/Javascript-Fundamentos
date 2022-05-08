// scope en js

// tipos de scope
// global

let persona = {
    nombre: "Nico" ,
    direccion: "Cazon 912",
};

const getDatos=function(){

    console.log(`Nombre: ${persona.nombre}`);
    console.log(`Direccion: ${persona.direccion}`);
};

const saludarPersona = function() {
    console.log(`Hola, soy ${persona.nombre}`);
};

// local
const saludar = function(){
    let nombre = 'Pedro';
    console.log(`Hola ${nombre}`);
}

if(true){
    let skill='Javascript'
    const profesion='Profesor'
}
console.log()