/**
 * flat() => es inmutable, retorna un arreglo donde los subarrays han sido aplanados hasta una profundidad especifica.
 */
const matriz = [
    [1,2,3],
    [4,5,6],
    [7,8,[9,8,[1,2,3]]]
];
const rsp = matriz.flat(3);//el parametro indica el nivel hasta el cual debe ingresar y hacer el aplanado
console.log('rsp:', rsp);