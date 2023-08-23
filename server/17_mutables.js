const products = [
    { title:'Beer', price: 123, id:'🍺' },
    { title:'Cake', price: 20, id:'🍪' },
    { title:'Coffe', price: 123, id:'☕' },
];

//Ej: Sacar de productos y colocar a myproducts
const myProducts = [];

const product = products.findIndex( item => item.id==='🍪' );
if( product ){
    myProducts.push( products[product] );
    products.splice(products, 1);
}

console.log( 'products:', products );
console.log( 'myProducts:', myProducts );