const letters = Array('a', 'b', 'c', 'd');
//const newArrayLetters = Array();
/*for (let index = 0; index < letters.length; index++) {
    const element = letters[index];
    newArrayLetters.push(element+'++');
}*/
const newArrayLetters = letters.map( letter => letter+'--' );
console.log(`This is array letters: ${letters}`);
console.log(`This is new array: ${newArrayLetters}`);