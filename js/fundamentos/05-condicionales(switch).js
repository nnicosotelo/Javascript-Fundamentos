// switch
// switch(variable){
//     case 10:
//     // accion
//         break;
//     case 20:
//     // accion
//         break;

//     default:
//         // mensaje
//         break;
// }


// let fruta = prompt('Ingrese la fruta que desea');


// switch(fruta){
//     case 'manzana':
//         console.log('el precio del kilo de manzana es de $200')
//      break;

//      case 'pera':
//         console.log('el precio del kilo de pera es de $100')
//      break;

//      case 'anana':
//         console.log('el precio del kilo de anana es de $400')
//      break;
//      case 'banana':
//      case 'sandia':
//         console.log('el precio del kilo de banana o de sandia es de $300')
//      break;
//     default:
//         console.log(`Lo siento no tenemos stock de ${fruta}`)
//         break;
// }

// let dia = new Date().getDay();

// switch(dia) {
//     case 0:
//         console.log('Hoy es domingo')
//         break;
//         case 1:
//         console.log('Hoy es lunes')
//         break;
//         case 2:
//         console.log('Hoy es martes')
//         break;
//         case 3:
//         console.log('Hoy es miercoles')
//         break;
//         case 4:
//         console.log('Hoy es jueves')
//         break;
//         case 5:
//         console.log('Hoy es viernes')
//         break;
//         case 6:
//         console.log('Hoy es sabado')
//         break;
// }

// let resultado = 0
// let elemento = 10

// switch(true){
//     case elemento >=10:
//         console.log('soy muy bueno usando switch')
//         break;
//         case elemento < 10 && elemento > 0:
//         resultado=Math.pow(elemento, 2)
//         console.log(`el numero ${elemento} elevado al cuadrado es de ${resultado}`)
//         break;
//         case elemento <=0:
//         resultado=elemento+elemento
//         console.log(`el numero ${elemento} sumado consigo mismo es de ${resultado}`)
//         break;

//         default:
//             console.error('no sos tan bueno que digamos')
//             break;
// }

// let num1=parseFloat(prompt('ingrese el numero'))
// let num2=parseFloat(prompt('ingrese el segundo numero'))
// if(isNaN(num1) || isNaN(num2)){
//     console.error('Alguno de los valores ingresados no son numeros, vuelva a ingresar los valores');
// }else{
//     let operacion = prompt('ingrese la operacion a realizar (suma, resta, multiplicacion, division)')

//     switch(operacion){
//         case 'suma':
//             case '+':
//             console.log(`${num1}+${num2} = ${num1 + num2}`)
//             break;
//             case 'resta':
//                 case '-':
//             console.log(`${num1}-${num2} = ${num1 - num2}`)
//             break;
//             case 'division':
//                 case '/':
//             console.log(`${num1}/${num2} = ${num1 / num2}`)
//             break;
//             case 'multiplicacion':
//                 case 'x':
    
//             console.log(`${num1}*${num2} = ${num1 * num2}`)
//             break;
//             default:
//                 console.warn('la operacion no es valida')
//                 break;
//     }
// };
