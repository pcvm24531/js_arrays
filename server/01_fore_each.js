
const letters = ['a','b','c','d'];

for (let i = 0; i < letters.length; i++){
    const element = letters[i];
    console.log(`This is for, ${element}`);
}

letters.forEach( item => console.log(`This is foreach, ${item}`) );
