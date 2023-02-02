const song = 'tumi surmadani hoye amar choke lagio, tumi fozor hole alto kore venge dio ghum.';

const chars = song.split('');
const words = song.split(' ');
const sentence = song.split('.');
// console.log(chars);
// console.log(words);
// console.log(sentence);

// slice(), substring()
const partial = song.slice(5, 9);
const partial2 = song.substring(5, 9);
console.log(partial);
console.log(partial2);

// trim(), trimEnd(), trimStart()
const greeting = '  hello world   ';
console.log(greeting);
console.log(greeting.trimEnd());
console.log(greeting.trimStart());
console.log(greeting.trim());

// join(), concat()
const lines = [
    'ami jodi kondin path vule jay',
    'hatchani diye kace nio',
    'momotar bondone amai bhede',
    'sob vul khoma kore dio'
];

const join = lines.join(', ');
console.log(join);

const concat = lines.concat(song);
console.log(concat);