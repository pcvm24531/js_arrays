/**
 * join() => Une los elementos del array, mediante una separación y retorna un string, si un elemento es undefined o nul, se convierte en una cadena vacia.
 * Recibe como parámetro el patron de separación
 */

//Ej: separar los elementos de un arreglo mediante ,
const elements = ['Fire','Air','Water'];
const rsp = elements.join(', ');
console.log( `The response is: ${rsp}` );

