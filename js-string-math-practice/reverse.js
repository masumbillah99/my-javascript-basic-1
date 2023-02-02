// character reverse

function reverseString(text) {
    let reversed = '';
    for (let i = text.length - 1; i >= 0; i--) {
        const element = text[i];
        reversed = reversed + element;
    }
    return reversed;
}

const string = 'He is a good boy';
const reversed = reverseString(string);
console.log('reversed output: ', reversed);

// word reverse

function reverseWords(str) {
    const words = str.split(' ');
    const result = [];
    // [ 'he', 'is', 'a', 'good', 'boy' ]
    for (let i = words.length - 1; i >= 0; i--) {
        const element = words[i];
        result.push(element);
    }
    const reversed = result.join(' ');
    console.log(reversed);
}

const str = 'he is a good boy';
reverseWords(str);