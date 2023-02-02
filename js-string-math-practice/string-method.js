// js string methods
let text = "hello world man";
let number = 5;

let arraySpilt = text.split('');
console.log(arraySpilt);
let reverse = arraySpilt.reverse();
console.log(reverse);
let join = reverse.join('');
console.log(join);

let numberString = number.toString();
let padStart = numberString.padStart(2, "2");
let padEnd = numberString.padEnd(3, 'a');
// console.log(padStart);
// console.log(padEnd);

let char = text.charAt(6);
// console.log(char);

let charCode = text.charCodeAt(3);
// console.log(charCode);


var index = text.indexOf('world');
index = text.lastIndexOf('man');
index = text.search('world');
// console.log(index);

let match = text.match(/rld/);      // 'rld'
// console.log(match);

let stringIncludes = text.includes('hello');
let startEnd = text.startsWith('ello');
startEnd = text.endsWith('man');
// console.log(stringIncludes);
// console.log(startEnd);