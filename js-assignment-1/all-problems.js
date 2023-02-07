// Problem - 1
/** First, this function takes a input parameter which will be a 
positive number. And then we multiply this positive number by 3, then add 10, 
then divide by 2 and finally subtract by 5. And return the value. */
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
/** First, this function takes a string. And we divided it by 2 and also checked a 
condition. The function return "odd" if the remainder is not equal to 0, and 
the function return "even" otherwise. */
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
/** This function takes a number parameter. And then we subtract 7 from the input 
and add a condition. if the subtraction is less then 7 then return the 
subtraction and return double of the subtraction otherwise. */
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
/** This function takes a numbers array. Then I run a loop in array for accessing
array elements. Then we check a condition. If array elements is less then 0 it 
returns bad data length.
*/
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
/** this function takes 3 parameters. And then parameters multiply by 21, 31, 43
and 3 friends gem stored by totalGem variable. Then checked a condition, if total
gem is less then or equal to double of thousand then return totalGem - double
of thousand, otherwise this function return only total gem.
*/
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