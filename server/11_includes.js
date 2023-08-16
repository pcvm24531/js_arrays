/**
 * includes() => Determina si un array o un string tiene un elemento determinado
 * este metodo no trabaja con objetos, recibe como parametro la cadena o valor a buscar
 */

//Ej: Buscar la palabra 'un' dentro de una orción
const pets = ['cat','dog','bat'];
const rsp = pets.includes( 'dog' );
console.log(`El resultado es: ${rsp}`);