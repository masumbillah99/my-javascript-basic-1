// ---- Problem 2: Finding even or odd ----

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

const result2 = evenOdd('phero');
console.log(result2);
// evenOdd('Batch7');
// evenOdd('chatgpt');