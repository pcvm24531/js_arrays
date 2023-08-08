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

//Retornamos un arreglo de totales
/*const deliveredTrue = orders.map( order => order.total );
console.log( orders, deliveredTrue );*/

//Agregar nuevo atributo a los objetos, modificando el objeto original
/*const impuestoTax = orders.map( (order) => {
    order.tax = 0.19;
    return order;
} );
console.log( orders, impuestoTax);*/

//Agregar nuevo atributo a lso objetos SIN modificar el objeto original
/*const noModificarObjetoOriginal = orders.map(
    (neworder) => {
        if( neworder.total % 2 === 0 ){
            return {
                ...neworder,
                tax: .19,
            }
        }else{
            return{
                ...neworder,
                tax:.50,
            }
        }
    }
);
console.log(orders, noModificarObjetoOriginal);*/

//Agregar un taxed del 19% a cada total y que sea solo el nro entero y los decimales.
const addTaxed = orders.map(

    (order) => {
        return{
            ...order,
            taxed: Math.floor(order.total * (19/100)),
        }
    }

);
console.log( orders, addTaxed );
