/** ------ can you find out who will get the delicious cake? ----- */
// 2 person
const jim = 84;
const sim = 95;
if (jim > sim) {
    console.log('Jim will get the cake');
}
else {
    console.log('Sim you will get the cake');
}

// 3 person
const mela = 97;
const dela = 99;
const chinku = 89;

// if (mela > dela && mela > chinku) {
//     console.log('mela will get the cake');
// }
// else if (dela > mela && dela > chinku) {
//     console.log('dela will eat cake in this bela');
// }
// else {
//     console.log('chinku will get the cake');
// }

if (mela > dela) {
    if (mela > chinku) {
        console.log('mela will get the cake');
    }
    else {
        console.log('chinku will get the cake');
    }
}
else {
    if (dela > mela) {
        console.log('dela will get the cake');
    }
    else {
        console.log('chinku will get the cake');
    }
}

// homework - 1
// write a function that will take 3 numbers will return the max number
// write a function that will take 3 parameters and will return the min number

// first time do it using if-else
// second time do it using Math.min or Math.max method