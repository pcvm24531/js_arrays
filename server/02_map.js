/**
 * map() => Transforma un array original
 * map(), funciona para transformar
 */
const letters = Array('a','b','c','d','e');
const newLetter = [];
for (let index = 0; index < letters.length; index++) {
    const element = letters[index]+'++';
    newLetter.push(element)
}
console.log(letters, newLetter);

const newLetterMap = letters.map( letter => letter+'++' );
console.log(letters, newLetterMap);
