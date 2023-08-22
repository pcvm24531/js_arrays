const users = [
    {userId:1, username:'Tom', atributes:['Nice', 'Cute']},
    {userId:2, username:'Jerry', atributes:['Small', 'Fast']},
    {userId:3, username:'Donald', atributes:['White', 'Big']},
    {userId:4, username:'Micky', atributes:['Black', 'Mouse']},
];
//Ejemplo de uso de map+flat
const atributes =  users.map( user => user.atributes ).flat();
console.log( atributes );

//Ejemplo anterior usando flatmap
const flatMapExample = users.flatMap( usr => usr.atributes );
console.log(flatMapExample);

//Ejemplo obtener startDate del siguiente arreglo de objetos
const calendars = [
    {
        startDate: new Date(2021, 1, 1, 15),
        endDate: new Date(2021, 1, 1, 30),
        title: 'Apoiment One',
    },
    {
        startDate: new Date(2021, 1, 2, 17),
        endDate: new Date(2021, 1, 2, 28),
        title: 'Apoiment Two',
    }
];
const startDates = calendars.flatMap( apoiment => apoiment.startDate );
console.log( startDates );