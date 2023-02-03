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