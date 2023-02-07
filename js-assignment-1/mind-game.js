// ----- Problem 1: Let’s play a mind game -----

function mindGame(positiveNumber) {
    if (positiveNumber > 0) {
        const number = (((positiveNumber * 3) + 10) / 2) - 5;
        return number;
    }
    else {
        return "Input should be a number";
    }
}

const result = mindGame(-5);
console.log(result);
// mindGame(50);
// mindGame(33);