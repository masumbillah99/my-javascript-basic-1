
// arguments is array like object

function add(num1, num2) {
    console.log(num1, num2);
    console.log(arguments);
    console.log(arguments[3]);
}
add(12, 13, 43, 45, 78);