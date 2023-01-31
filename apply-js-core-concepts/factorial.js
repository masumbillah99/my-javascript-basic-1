// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 = 45; 
function sumOfNumbers(number) {
    let sum = 0;
    for (let i = 0; i < number; i++) {
        sum = sum + i;
        // console.log(i, sum);
    }
    return sum;
}

const output1 = sumOfNumbers(10);
console.log('sum =', output1);

// 1 * 2 * 3 * 4 * 5 * 6 * 7
function multiplyOfNumbers(number) {
    let multiply = 1;
    for (let i = 1; i <= number; i++) {
        multiply = multiply * i;
    }
    return multiply;
}
const output2 = multiplyOfNumbers(7);
console.log('multiply =', output2);

// factorial number
// 2! = 2 * 1
// 3! = 3 * 2 * 1;
// 4 != 4 * 3 * 2 * 1;
// 5 != 5 * 4 * 3 * 2 * 1;
function factorial(num) {
    let fact = 1;
    for (let i = 1; i <= num; i++) {
        fact = fact * i;
    }
    return fact;
}
const output3 = factorial(7);
console.log('factorial =', output3);

// factorial reverse
function reverseFactorial(num) {
    let fact = 1;
    for (let i = num; i >= 1; i--) {
        fact = fact * i;
    }
    return fact;
}
const number = 5;
const fact = reverseFactorial(number);
console.log(`factorial of ${number} : ` , fact);