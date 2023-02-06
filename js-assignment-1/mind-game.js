// ----- Problem 1: Let’s play a mind game -----
function mindGame(positiveNumber) {
    const number = (((positiveNumber * 3) + 10) / 2) - 5;
    return number;
}
const result = mindGame(33);
// console.log(result);
// mindGame(50);
// mindGame(33);

// ---- Problem 2: Finding even or odd ----
function evenOdd(str) {
    if (str.length % 2 !== 0) {
        return "odd";
    }
    else {
        return "even";
    }
}
const result2 = evenOdd('batch7');
// console.log(result2);
// evenOdd('Batch7');
// evenOdd('chatgpt');

// ------ Problem 3: Is Less or Greater than seven ------
function isLGSeven(number) {
    const subtraction = number - 7;
    if (subtraction < 7) {
        return subtraction;
    }
    else {
        return number * 2;
    }
}
const result3 = isLGSeven(15);
// console.log(result3);

// ----- Problem 4: Finding Bad data -----
function findingBadData(arr) {
    let badData = [];
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (element < 0) {
            badData = badData.push(element);
            return badData.length;
        }
    }
}

const numbers = [2, -5, -7, -13];
const result4 = findingBadData(numbers);
// console.log(result4);

// ----- Problem 5: Convert your gems into diamond -----
function gemsToDiamond(firstGem, secGem, thirdGem) {
    const firstFriendGem = firstGem * 21;
    const secFriendGem = secGem * 32;
    const thirdFriendGem = thirdGem * 43;

    const totalGem = firstFriendGem + secFriendGem + thirdFriendGem;
    const thousandDouble = 1000 * 2;

    if (totalGem >= thousandDouble) {
        return totalGem - thousandDouble;
    }
    else {
        return totalGem;
    }
}

let result5 = gemsToDiamond(20, 200, 50);
result5 = gemsToDiamond(1, 1, 1);
result5 = gemsToDiamond(100, 5, 1);
console.log(result5);