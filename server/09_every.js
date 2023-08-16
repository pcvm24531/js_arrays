/*
 * Es lo opuesto a some(), para este caso todos los elementos deben cumplir la condición
 */

//Ej: Verificar que todos los nrs. sean menores a 40
/*const  numbers = [1,30,49,29,10,13];
let rsp = numbers.every( number => number<=40 && true );
console.log( 'rsp:', rsp );*/

//Ej: Evaluar que todos los miembros de un equipo sean menores de 15 años
const team = [
    {name:'Zulema', age:10},
    {name:'Marizca', age:12},
    {name:'Etelbina', age:15},
    {name:'Florencia', age:16},
    {name:'Zula', age:18},
    {name:'Natalia', age:8},
];
const rsp2 = team.every( player => player.age<=15 && true );
console.log('Todo el equipo es menor a 15:', rsp2);
