/*const words = ['spray','limit','elite','exuberant'];
const newWords = words.filter( word => word.length >= 6 
);
console.log( words, newWords );*/

//Filtramos ordenes por estado
const orders = [
    {
        customerName: 'Pablo',
        total: 120,
        delivered: false,
    },
    {
        customerName: 'Lucas',
        total: 1000,
        delivered: true,
    },
    {
        customername: 'Alfred',
        total: 150,
        delivered: false,
    },
    {
        customerName: "Nicolas",
        total: 60,
        delivered: true,
    },
    {
        customerName: "Zulema",
        total: 120,
        delivered: false,
    },
    {
        customerName: "Santiago",
        total: 180,
        delivered: true,
    },
    {
        customerName: "Valentina",
        total: 5,
        delivered: true,
    },
];

//Obtenemos un arreglo que  delivered sea tru y ademas sema mayor a 100
/*const deliveredOk = orders.filter(
    order => {
        if( order.delivered && order.total>=100 ){
            return order;
        }
    }
);
console.log( orders, deliveredOk );*/

//Creamos un pequeño buscador usando filter
/*const search = (query) => { return orders.filter( order => { return order.customerName.includes(query)} ) };
console.log( orders, search('Pab') );*/

//Funcion que recupera los elementos de 4 o mas letras
const letters = ['ana', 'joel', 'pablo', 'roy', 'lucas'];
const search = letters.filter( item => item.length>=4 );
console.log(letters, search);