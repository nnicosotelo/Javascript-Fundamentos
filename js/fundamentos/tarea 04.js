let monto = parseFloat(prompt('Ingrese el monto del respuesto'))

if(monto < 500){
    console.log('Montos menores a 500 no tienen descuentos')
}else if(monto >=500 && monto <=1000){
    console.log('El descuento es del 5%')

}else if(monto > 1000 && monto <= 7000){
    console.log('El descuento es del 11%')
}else if(monto > 7000 && monto <= 15000){
    console.log('El descuento es del 18%')
}else{
    console.log('El descuento es del 25%')
}
