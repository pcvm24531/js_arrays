const totals = [1,2,3,4,5];
/*
let sum = 0;
for (let index = 0; index < totals.length; index++) {
    const element = totals[index];
     sum = sum + element;
}
console.log('resp:', sum);
*/

//Ejemplo de reduce
const res = totals.reduce( (sum, item)=>sum+item, 0 );
console.log('reduce:', res);
console.log('totals:',totals);
