// find the cheapest phone from an array of phone objects
const phones = [
    { name: 'samsung', camera: 25, storage: '32gb', price: 32000, color: 'silver' },
    { name: 'walton', camera: 12, storage: '32gb', price: 20000, color: 'silver' },
    { name: 'iphone', camera: 8, storage: '32gb', price: 52000, color: 'silver' },
    { name: 'xaomi', camera: 4, storage: '32gb', price: 18000, color: 'silver' },
    { name: 'oppo', camera: 21, storage: '32gb', price: 44000, color: 'silver' },
    { name: 'nokia', camera: 9, storage: '32gb', price: 30000, color: 'silver' },
    { name: 'htc', camera: 10, storage: '32gb', price: 62000, color: 'silver' }
]

function cheapestPhone(phones) {
    let cheapest = phones[0];
    for (let i = 0; i < phones.length; i++) {
        const phone = phones[i];
        if (phone.price < cheapest.price) {
            cheapest = phone;
        }
    }
    return cheapest;
}

const mySelection = cheapestPhone(phones);
// console.log(mySelection);

function cheapestPhoneCamera(phones) {
    let cheapest = phones[0];
    for (let i = 0; i < phones.length; i++) {
        const phone = phones[i];
        if (phone.camera > cheapest.camera) {
            cheapest = phone;
        }
    }
    return cheapest;
}

const mySelection2 = cheapestPhoneCamera(phones);
// console.log(mySelection2);

// calculate the total cost of the products in a shopping cart
const shoppingCart = [
    { name: 'shoe', price: 1100 },
    { name: 'shirt', price: 1700 },
    { name: 'pant', price: 3000 },
    { name: 'belt', price: 600 }
]