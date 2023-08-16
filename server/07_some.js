/**
 * some() => Verifica que almenos un elemento cumpla una condición
 */

//verificamos si almenos un numero es par
/*const numbers = [1,11,3,5,7,9];

let rsp = numbers.some(
    (number) =>{
        return (number%2===0)&&true;
    }
);
console.log( numbers, rsp );*/

//Uso de some con un objeto donde verificamos si un coche fue entregado a su dueño en un taller
const automovil = [
    {marca:'toyota',modelo:'caldina',anio:1999,entregado:true},
    {marca:'nissan',modelo:'sunny',anio:1999,entregado:false},
    {marca:'toyota',modelo:'corolla',anio:2000,entregado:false},
    {marca:'nissan',modelo:'sentra',anio:2002,entregado:true},
    {marca:'toyota',modelo:'spacio',anio:1999,entregado:true},
    {marca:'suzuki',modelo:'vitara',anio:2020,entregado:true},
];
const reparadado = automovil
.some( (auto) => auto.entregado );
console.log( 'Autos reparados:'+reparadado );