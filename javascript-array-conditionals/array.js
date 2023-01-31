var numbers = [32, 5, 64, 56, 34];
var names = ['amin', 'manik', 'sadik', 'mofiz', 'kuddus'];
var players = ["tamim", "shakib", "musfiq", "mahmudullah", "mashrafee"];
// console.log(numbers);

// 1. get element by index
var element = numbers[2];
element = numbers[0];
element = numbers[3];
console.log(element);

// 2. set element value by index
numbers[3] = 25;
// console.log(numbers);

// 3. find index of an element
var positionIndex = numbers.indexOf(34);
positionIndex = names.indexOf('mofiz');
var elementIncludes = names.includes('amin');
console.log(positionIndex);
console.log(elementIncludes);

// 4. return a new array with (array.concat());
const newArray = names.concat(players);
console.log(newArray);

// array.slice(), splice()
const arraySlice = numbers.slice(0, 3)
console.log(arraySlice);
console.log(numbers);

const arraySplice = numbers.splice(1, 3);
console.log(arraySplice);
console.log(numbers);