var student = {
    id: 79941,
    shift: 'first',
    semester: 6,
    name: 'Masum Billah'
}
// console.log(student);


var mobile = {
    brand: 'KGTEL',
    model: 'K80',
    storage: '1MB',
    camera: '2MP'
}
// console.log(mobile);


var myPc = {
    processor: 'Core i3',
    windows: '10th gen',
    motherboard: 'Gigabyte',
    monitorBrand: 'LG',
    totalPrice: 45000
}
console.log(myPc.monitorBrand);
myPc.totalPrice = 46000;
// console.log(myPc);

/**
 * get object property and property value
*/
var shoppingCart = {
    pen: 11,
    books: 5,
    mouse: 1,
    keyboard: 1
}

// dynamic
var propertyName = 'mouse';
var propertyValue = shoppingCart[propertyName];
console.log(propertyName, propertyValue);

// when you know the specific property name, use dot(.) notation to get the property value
var penCount = shoppingCart.pen;
var penCount2 = shoppingCart['books'];      // alternative system

var properties = Object.keys(shoppingCart);
var propertyValues = Object.values(shoppingCart);
console.log(properties);
console.log(propertyValues);
// console.log(shoppingCart);

// set property values
shoppingCart.mouse = 3;
console.log(shoppingCart);
shoppingCart['mouse'] = 5;
console.log(shoppingCart);