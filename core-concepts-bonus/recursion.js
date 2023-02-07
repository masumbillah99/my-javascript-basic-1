let sum = 0;
// for (let i = 0; i <= 5; i++) {
//     sum = sum + i;
// }

// console.log(sum);

// for (let i = 5; i >= 1; i--) {
//     sum = sum + i;
// }

// console.log(sum);

function summation(i) {
    if (i === 1) {
        return 1;
    }
    return i + summation(i - 1);
}
const result = summation(5);
console.log(result);