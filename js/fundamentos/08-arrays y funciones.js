// funciones
// son procedimientos encapsulados

// function <nombre>(<parametros>){
    // instrucciones que hara
// }

// funciones declarativas

let nombre = 'Nico';
let apellido = 'Sotelo';


function saludarPersona(parametro, parametro2) {
    console.log(`Hola ${parametro}, ${parametro2}`);
}

saludarPersona(nombre, apellido);

let num1 = 10;
let num2 = 10;

function sumarValores(valor1, valor2){

    if(isNaN(valor1) || isNaN(valor2)) {
        console.warn('Alguno de los dos valores no son numeros');
    }else{
        
        console.log(`${valor1} + ${valor2} = ${valor1 + valor2}`);
    }


}

sumarValores(num1, num2);


// funciones anonimas o de expresion

const multiplicacion = function () {
    console.log(num1 * num2);
};

const calculadora = function(valor1, valor2, operacion='+'){
    console.warn('Falta un valor requerido o es incorrecto')

    if(isNaN(valor1) || isNaN(valor2)) {
        console.warn('Alguno de los dos valores no son numeros');
    }else{
        switch(operacion){
            case '+':
            console.log(`${valor1} + ${valor2} = ${valor1 + valor2}`);
            break;
            case '-':
            console.log(`${valor1} - ${valor2} = ${valor1 - valor2}`);
            break;
            case '*':
            console.log(`${valor1} * ${valor2} = ${valor1 * valor2}`);
            break;
            case '/':
            console.log(`${valor1} / ${valor2} = ${valor1 / valor2}`);
            break;
            default:
                console.warn('La operacion ingresada no es valida');
                break;
        }
        
        
    }


};

// return

const calculadoraReturn = function(valor1, valor2, operacion='+'){
   

    if(isNaN(valor1) || isNaN(valor2)) {
         return"Alguno de los dos valores no son numeros";
    }
        switch(operacion){
            case '+':
           return(`${valor1} + ${valor2} = ${valor1 + valor2}`);

            case '-':
           return(`${valor1} - ${valor2} = ${valor1 - valor2}`);

            case '*':
           return(`${valor1} * ${valor2} = ${valor1 * valor2}`);

            case '/':
           return(`${valor1} / ${valor2} = ${valor1 / valor2}`);

            default:
                ('La operacion ingresada no es valida');
    
        
        
        
    }


};


// llamar una funcion dentro de otra funcion

function cubo(num) {
    return Math.pow(num, 3);
}

let numeros = [23, 32, 1, 42];

function convertirAlcubo(arreglo, funcion) {
    let numerosAlcubo = [];

    for (let index = 0; index < arreglo.length; index++) {
        let numeroAlcubo = funcion(arreglo[index]);
        numerosAlcubo.push(numeroAlcubo);
    }
    return numerosAlcubo;
}
console.log(convertirAlcubo(numeros, cubo));

// scope de una funcion
let heroe = 'Iron Man';

function presentarHeroe() {
    let heroe = 'Superman';
    return `Bienvenido ${heroe}`;
}
console.log(presentarHeroe());