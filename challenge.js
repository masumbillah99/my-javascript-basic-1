/**
 * For problem solving most important is understand logic
 * if (you understand logic) {
 *      console.log('you are good');
 * } else {
 *      console.log('try to understand logic');
 * }
*/

function reverseString(str) {
    let newString = '';
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
const result = reverseString('zimargorp');
// console.log(result);

// reverse the string
function reverseMaker(word) {
    let spilt = word.split('');
    let reverse = spilt.reverse();
    let join = reverse.join('');
    return join;
}
const result2 = reverseMaker('GeeksForGeeks');
// console.log(result2);

const solution = (letter) => {
    if (letter === 'a') {
        return 'VOWEL';
    }
    else if (letter === 'e') {
        return 'VOWEL';
    }
    else if (letter === 'i') {
        return 'VOWEL';
    }
    else if (letter === 'o') {
        return 'VOWEL';
    }
    else if (letter === 'u') {
        return 'VOWEL';
    }
    else {
        return 'CONSONANT';
    }
}
const result3 = solution('a');
console.log(result3);
// console.log(solution('a'));
// console.log(solution('e'));
// console.log(solution('i'));
// console.log(solution('o'));
// console.log(solution('u'));
// console.log(solution('y'));
// console.log(solution('k'));