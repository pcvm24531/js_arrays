//Ejemplo de reduce con arreglo
/*const items = [1,2,3,4,3];
const rsp = items.reduce(
    ( obj, item ) => {
        if( !obj[item] ){
            obj[item] = 1;
        }else{
            obj[item] = obj[item] + 1;
        }
        return obj;
    }, 
    {}
);
console.log( items, rsp );*/

//Ejemplo de reduce utilizando objetos
const automovil = [
    {marca:'toyota',modelo:'caldina',anio:1999},
    {marca:'nissan',modelo:'sunny',anio:1999},
    {marca:'toyota',modelo:'corolla',anio:2000},
    {marca:'nissan',modelo:'sentra',anio:2002},
    {marca:'toyota',modelo:'spacio',anio:1999},
    {marca:'suzuki',modelo:'vitara',anio:2020},
];
//Aplicar reduce por marca
const rsp = automovil
.map( car => car.marca )
.reduce(
    (obj, mark) => {
        if( !obj[mark] ){
            obj[mark] = 1;
        }else{
            obj[mark] = obj[mark] + 1;
        }
        return obj;
    },
    {}
);

console.log( automovil, rsp );