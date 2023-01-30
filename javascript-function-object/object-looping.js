// array vs object
var shoppingItems = ['books', 'sunglass', 'shoes', 'pen'];
var friendsAge = [12, 34, 54, 65, 29];
var friendsAge = {
    rahim: 12,
    karim: 34,
    jamal: 54,
    kamal: 65,
    kazi: 29
}

var shoppingCart = {
    pen: 11,
    books: 5,
    mouse: 1,
    keyboard: 5,
    speaker: 2,

}

const keys = Object.keys(shoppingCart);
console.log(keys);

const values = Object.values(shoppingCart);
console.log(values);

for (var i = 0; i < keys.length; i++) {
    var propertyName = keys[i];
    var propertyValue = shoppingCart[propertyName];
    // console.log(propertyName, propertyValue);
}

// for in loop
for (var propertyName in shoppingCart) {
    const value = shoppingCart[propertyName];
    console.log(value);
}