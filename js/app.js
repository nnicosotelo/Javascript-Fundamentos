let lista =[23, 45, 64, 24, 52, 235, 5525, 27];
let numero = parseInt(prompt('ingrese un numero'));

if(lista.includes(numero)) {
    console.log(`El numero ${numero} se encuntra en la lista`)
}else{
    console.log(`el numero ingresado no esta en la lista`);
}
