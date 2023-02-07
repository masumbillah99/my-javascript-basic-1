// Problem - 1
// This function 
function mindGame(positiveNumber) {
    if (positiveNumber > 0) {
        const number = (((positiveNumber * 3) + 10) / 2) - 5;
        return number;
    }
    else {
        return "Input should be a number";
    }
}


// Problem - 2
// 
function evenOdd(str) {
    if (typeof str === "string") {
        if (str.length % 2 !== 0) {
            return "odd";
        }
        else {
            return "even";
        }
    }
    else {
        return "Input parameter should be string";
    }
}


// Problem - 3
// 
function isLGSeven(number) {
    if (typeof number === "string") {
        return "Input number should be positive";
    }
    else {
        const subtraction = number - 7;
        if (subtraction < 7) {
            return subtraction;
        }
        else {
            return number * 2;
        }
    }
}


// Problem - 4
// 
function findingBadData(numbers) {
    if (typeof numbers === "number" || typeof numbers === "string") {
        return "Input parameter should be a Array not single number or string";
    }
    else {
        let badData = [];
        for (let i = 0; i < numbers.length; i++) {
            if (numbers[i] < 0) {
                badData.push(numbers[i]);
            }
        }
        return badData.length;
    }
}


// Problem - 5
// 
function gemsToDiamond(firstGem, secGem, thirdGem) {
    if (typeof firstGem !== "number" || typeof secGem !== "number" || typeof thirdGem !== "number") {
        return "Please give all valid number";
    }
    else {
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
}