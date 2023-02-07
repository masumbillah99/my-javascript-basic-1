// ------ Problem 3: Is Less or Greater than seven ------

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

const result3 = isLGSeven(15);
console.log(result3);