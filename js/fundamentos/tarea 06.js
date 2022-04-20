
// tarea
// let respuestaCorrecta = "MADRID"
// let acierto=false;
// let contador=0;

// while(contador < 3 && acierto === false){
//     let rptUsuario = prompt('Capital de España');

//     if(rptUsuario.toUpperCase() === respuestaCorrecta){

//         acierto = true;
//         console.log('MUY BIEN');

//     }

//     contador++;
// }
// if(acierto===false){
//     console.error('Perdiste perdedor');
// }


// for
// for (let i = 0; i < 10 ; i++) {
    
    
// }
//  let tabla = parseInt(prompt('ingrese la tabla a calcular'));

// // //  for (let index = 1; index <= 10; index++) {
     
// // //      console.log(`${tabla} x ${index} = ${tabla * index}`);
// // //  }

// while(tabla){
//     console.log(`Tabla del ${tabla}`)
//     console.log('=========')
//     for (let index = 1; index <= 10; index++) {
//     console.log(`${tabla} x ${index} = ${tabla * index}`);
//     }
//     tabla = parseInt(prompt('ingrese la tabla a calcular'));
// }



// tarea

let cantidadDealumnos = parseInt(prompt('ingrese la cantidad de alumnos'))

let lista ="";
let nombre ="";
if(!isNaN(cantidadDealumnos)){
    for (let i = 0; i < cantidadDealumnos; i++) {
        nombre=prompt('ingrese el nombre del nombre del alumno')
        lista+=`${nombre} \n`
         }
         console.log(lista);
}else{
    console.log('la cantidad ingresada no es valida')

}