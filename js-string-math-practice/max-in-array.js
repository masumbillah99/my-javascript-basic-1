function maxInArray(numbers) {
    let largest = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if (element > largest) {
            largest = element;
        }
    }
    return largest;
}

const heights = [123, 190, 143, 153, 138];
const tallest = maxInArray(heights);
console.log('tallest person is: ', tallest);

// homework - 2
// write a function to get the lowest number in an array
