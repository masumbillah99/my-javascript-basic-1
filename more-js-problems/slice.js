const friends = [32, 54, 34, 30, 24, 13, 53, 12, 19, 21, 26];
const partial = friends.slice(3, 6);
console.log(partial);
// console.log(friends);


/** ----- splice() -----
    removes elements from an array and if necessary, 
    inserts new elements in their place,
    returning the deleted elements.
    will change the original array.
*/

const partial2 = friends.splice(2, 3, 444, 555, 666);
console.log(partial2);
console.log(friends);