/**
 * concat() => es un metodo que sirve para funcionar arrays, el parámetro que recibe es el array que queremos concatenar. Concat no modifica el array original, lo que hace es crear un nuevo array
 */

//Ej: Funcionar 2 arreglos 
const food = ['rice', 'frites','chicken'];
const fruits = ['apple', 'banana','orange'];
const meal = food.concat(fruits);
console.log(`food: ${food}`);
console.log(`fruits: ${fruits}`);
console.log(`meal: ${meal}, meal type is:${typeof meal}`);

//Ej:COncatenar 2 arreglos usando split operation, split operation solo funciona con arrays
const rsp = [...food, ...fruits];
console.log( ` ${rsp}, rsp type is: ${typeof rsp} ` );

//Ej: Agregar un elemento al array
const rsp1 = [...food, 'Hola'];
console.log( rsp1 );

//Ej: Error al agregar un elemento
const rsp2 = [...food, ...'Hola'];
console.log( rsp2 ); 

//Ej: Modificar el arreglo original, agregando nuevos elementos
food.push(fruits);//food.push(...fruits);
console.log( food );