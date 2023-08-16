/**
 * find() => retorna solo un objeto ue cumpla con la condicional, siempre devuelve el primer elemento que cumpla con la condicion, si no devuelve undefines
 */
//Ej:Buscar elemento 30
const numbers = [1,23,25,52,69];
const rst = numbers.find( item => item===30 );
console.log(`El elemento 30 existe? : ${rst}`);

//Ej: Buscar un id y obtener elemento
const food = [
    {name:'Hot cake', price:12, id:'🍪'},
    {name:'Beer', price:15, id:'🍺'},
    {name:'Coffe', price:10, id:'☕'},
];
const rspFood = food.find( item => item.id==='🍺' );
console.log( 'rspFood', rspFood );

//Ej: Retornar la posición en la que se encuentra un elemento
const rspFoodIndex = food.findIndex( item => item.id==='☕' );
console.log(`El elemento ☕ se encuentra en la posición : ${rspFoodIndex}`);