const country = 'Bangladesh';
const age = 52;
const isIndependent = true;
const student = { id: 101, class: 12, name: 'Jibon' };
const friends = [13, 34, 53, 12, 34, 19, 21, 26];
function add(a, b) {
    return a + b;
}

console.log(typeof country);
console.log(typeof age);
console.log(typeof isIndependent);
console.log(typeof student);
// check array using : Array.isArray() method
console.log(Array.isArray(friends));
console.log(typeof add);

// includes(), indexOf()
console.log(friends.includes(35));
console.log(friends.includes(19));

if (friends.indexOf(35) !== -1) {

}

// concat()
const newFriends = [32, 54, 34, 13, 30, 24];
const allFriends = newFriends.concat(friends);
console.log(allFriends);


/** some quiz problem - PH */
const nayoks = ['“Bangla Bhai”', '”English Bhai”', '”Korean Bhai”', '”Turkish Bhai”'];
for (const nayok of nayoks) {
    const elements = nayok;
    console.log(elements);
}

// What will be the final value of the sum? 
let sum = 0;
for (let i = 0; i <= 3; i++) {
    sum = sum + i;
}
console.log(sum);

const char = 'hello';
console.log(char.length);

var student2 = { name: "Yo Mama", age: 17 };
const age2 = delete student2.age;
console.log(student2);

let arr = [2, 3, 5, 6, 8];
let change = arr[arr.length - 1] = 5;
console.log(arr);