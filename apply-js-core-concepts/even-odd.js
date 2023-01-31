function isEven(number) {
    const remainder = number % 2;
    // console.log(remainder);
    if (remainder === 0) {
        // console.log('number is even');
        return true;
    }
    else {
        // console.log('number is odd');
        return false;
    }
}

const myNumberIsEven = isEven(46);
const herNumberIsEven = isEven(1381);
// console.log(myNumberIsEven);
// console.log(herNumberIsEven);

// practice problem - 3
function findOddSum(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        // console.log(i, element);
        sum = sum + element;
    }
    // console.log(sum);
    return sum;
}

const hisNumbers = [23, 34, 6, 46, 67, 98, 89];
const result = findOddSum(hisNumbers);
// console.log(result);


// practice problem - 4
function getSumOfAnArray(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        sum = sum + element;
    }
    return sum;
}

function getOddNumbersOfAnArray(numbers) {
    const oddNumbers = [];
    const evenNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if (element % 2 === 1) {
            oddNumbers.push(element);
        }
    }
    return oddNumbers;
}
const myNumbers = [34, 23, 66, 45, 16, 67, 98, 89];
const oddNumbers = getOddNumbersOfAnArray(myNumbers);
console.log(oddNumbers);

const oddNumberSum = getSumOfAnArray(oddNumbers);
console.log('odd number sum =', oddNumberSum);