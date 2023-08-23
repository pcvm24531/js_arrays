/**
 * sort() => es mutable y consiste en ordenar un array a partir de los valores Unicode de caracteres, retorna un array
 */
const months = [ 'March', 'Dec', 'Feb', 'June' ];
console.log( months );
//EJ: Ordenar mediante sort()
const order = months.sort();//Hace un orden alfabético por la primera Letra
console.log(order);

//Ej: Ordenar un arreglo de números
const numbers = [1,90,100,20,10];
const orderNumbers = numbers.sort();//Hace un orden atravez del primer digito y no asi por el peso
console.log(numbers);
console.log(orderNumbers);

//Ej: Ordenar un arreglo mediante el peso del número en order ascendente
const orderNumberByWeight = numbers.sort( (a,b) => a-b );
console.log(orderNumberByWeight);

//Ej: Ordernar un arreglo por el peso del número en orden descendente
const orderNumberDesc = numbers.sort( (a, b)=>b-a );
console.log(orderNumberDesc);

//Ej: Ordenar objetos por usuario por su edad
const people =  [
    {name:'Javier', age:27},
    {name:'Carlos', age:30},
    {name:'Ealfredo', age:45},
    {name:'Wilson', age:14},
];
const peopleOrder = people.sort( (a,b) => (a.age-b.age) );
console.log(people);
console.log(peopleOrder);