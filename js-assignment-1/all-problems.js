// Problem - 1
// 
function mindGame(positiveNumber) {
    const number = (((positiveNumber * 3) + 10) / 2) - 5;
    return number;
}


// Problem - 2
// 
function evenOdd(str) {
    if (str.length % 2 !== 0) {
        return "odd";
    }
    else {
        return "even";
    }
}


// Problem - 3
// 
function isLGSeven(number) {
    const subtraction = number - 7;
    if (subtraction < 7) {
        return subtraction;
    }
    else {
        return number * 2;
    }
}

// Problem - 4
// 



// Problem - 5
// 
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