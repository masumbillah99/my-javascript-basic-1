// -------- math properties ------
const m = 10;
console.log(m * Math.PI);


/**
 * -------- math methods() ------ 
*/
/** ------ pow(), abs() ----- */
const result = Math.pow(3, 5);
// console.log(result);

const num1 = 25;
const num2 = 45;

// const gap = num1 - num2;
const gap = Math.abs(num1 - num2);
// console.log(gap);

if (gap < 5) {
    console.log('you gays can be friends');
}
else {
    console.log('you guys stay apart');
}

/** ------ round(), ceil(), floor() ----- */
const number = 13.67;
const roundNumber = Math.round(number);
const ceilNumber = Math.ceil(number);
const floorNumber = Math.floor(number);
// console.log(roundNumber);
// console.log(ceilNumber);
console.log(floorNumber);

/** ------ random(), (), () ----- */
const random = Math.random() * 15;

for (let i = 0; i < 6; i++) {
    const random = Math.round(Math.random() * 6);
    console.log(random);
}

const num3 = -78;
const answer = Math.abs(num3);
console.log(answer);

var a = 2;
var b = 3;
if (a < b) {
    console.log('hello');
}
