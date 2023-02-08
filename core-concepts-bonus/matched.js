const numbers = [23, 34, 55, 64, 87];
// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     console.log(element);
// }

// for (const number of numbers) {
//     console.log(number);
// }

const products = [
    { id: 1, name: 'walton phone', price: 20000 },
    { id: 2, name: 'xiami phone', price: 20000 },
    { id: 3, name: 'iphone', price: 20000 },
    { id: 4, name: 'mac book laptop', price: 20000 },
    { id: 5, name: 'samsung j7 pro', price: 10000 },
    { id: 6, name: 'nokia 105', price: 20000 },
    { id: 7, name: 'hp laptop', price: 20000 },
    { id: 8, name: 'Phone one', price: 20000 },
]

// for(const product of products){
//     console.log(product);
// }

function matchedProduct(products, search) {
    const selected = [];
    for (const product of products) {
        // console.log(product.name.includes(search));
        if (product.name.toLowerCase().includes(search)) {
            selected.push(product);
        }
    }
    return selected;
}

const result = matchedProduct(products, 'laptop');
console.log(result);

function compare(a, b) {
    if (a.toString() === b) {
        return true;
    } else {
        return false;
    }
}
const result2 = compare(15, 15);
console.log(result2);

console.log('123' + 123);

let a = 'hi';
let b = 'there';
console.log(a + b);

for (let i = 5; i <= 100; i++) {
    console.log(i);
}