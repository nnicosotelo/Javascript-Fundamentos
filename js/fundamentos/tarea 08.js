// mayusculas y minusculas
const examinarCadena = function(cadena){

    if(cadena === cadena.toUpperCase()) {
        return 'El texto esta en mayusculas'
    }

    if(cadena === cadena.toLowerCase()) {
        return 'El texto esta en minusculas'
    }

    return 'El texto esta en minusculas y mayusculas'

};

console.log(examinarCadena('La Tele es GRande'));

// calcular perimetro
let ladoA=Number(prompt('Ingrese el lado A del rectangulo'));
let ladoB=Number(prompt('Ingrese el lado B del rectangulo'));

const perimetroRectangulo=function(a, b){

    return 2*(a + b)

};

document.write(`El perimetro del rectangulo es de ${perimetroRectangulo(ladoA, ladoB)}`);