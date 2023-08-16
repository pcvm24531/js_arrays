/**
 * split() => Hace lo contrario al metodo join, 
 */

//Ej: Convierte un string en un array
const string = 'The firsth student is very big';
const rsp = string.split(' ');
console.log( `The new array is: `+rsp );

//Ej: crear una url con un string
const url = 'Formacion academica postgrado UPB';
const urlRsp = url.split(' ').join('-').toLowerCase();
console.log(`The url is: ${urlRsp}`);
