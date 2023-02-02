const song = 'tumi surmadani hoye amar choke lagio, tumi fozor hole alto kore venge dio ghum.';

// includes() method return true/false. and it is case sensitive
// const doesExit = song.includes('tumi');
const doesExit = song.includes('Hoye');
// console.log(doesExit);

//  ------------------------
// indexOf()
// console.log(song.indexOf('akash'));
// console.log(song.indexOf('tumi'));

if (song.indexOf('hoye') !== -1) {
    console.log('exists inside the string');
}
else {
    console.log('cannot find it');
}

// startsWith()
console.log(song.startsWith('tumi'));
console.log(song.startsWith('Tumi'));

// endsWith()
const fileName = 'mybiodata.pdf';
const otherFile = 'mypic.png';
console.log(fileName.endsWith('.pdf'));
console.log(otherFile.endsWith('.jpg'));