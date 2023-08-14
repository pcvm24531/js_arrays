const items = [1,2,3,4,3];

const rsp = items.reduce(
    ( obj, item ) => {
        if( !obj[item] ){
            obj[item] = 1;
        }else{
            obj[item] = obj[item] + 1;
        }
        return obj;
    }, {}
);

console.log( items, rsp );