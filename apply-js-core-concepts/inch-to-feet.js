const myInches = 12;
const myFeet = myInches / 12;
console.log(myFeet);

// inch to feet
// const feet = 5.6;
// const inch = feet * 12;
// console.log(inch.toFixed(2));

function inchToFeet(inches) {
    const feet = inches / 12;
    return feet;
}
const dadaInches = 115;
const dadaFeet = inchToFeet(dadaInches);
console.log('dada feet =', dadaFeet);

const nanaInches = 165;
const nanaFeet = inchToFeet(nanaInches);
console.log('nana feet =', nanaFeet);


// feet to inch
function FeetToinch(feet) {
    const inches = feet * 12;
    return inches;
}

const dadiFeet = 10;
const dadiInches = FeetToinch(dadiFeet);
console.log('dadi inches =', dadiInches);

const naniFeet = 7.8;
const naniInches = FeetToinch(naniFeet);
console.log('nani inches =', naniInches);