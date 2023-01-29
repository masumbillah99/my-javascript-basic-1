var numbers = [19, 29, 39, 49, 59];
numbers.push(69);
console.log(numbers);

// The push() method adds a new element to an array (at the end)
// The pop() method removes the last element from an array

var friends = ['kamal', 'damal', 'tamal'];
friends.push('mamal');
console.log(friends);

var names = ['amin', 'manik', 'sadik', 'mofiz', 'kuddus'];
var popElement = names.pop();
console.log(names);
console.log(popElement);


// add / remove element to start in an array
/**
    The unshift() method adds new elements to the beginning of an array.
    The unshift() method overwrites the original array.
*/ 
names.unshift('bulbul');
console.log(names);
numbers.unshift(9);
console.log(numbers);

/**
    The shift() method removes the first item of an array.
    The shift() method changes the original array.
    The shift() method returns the shifted element.
*/
var fruits = ['apple', 'banana', 'orange','mango'];
fruits.shift();
console.log(fruits);