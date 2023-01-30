// function declaration
function startFan() {
    console.log('Stand up');
    console.log('walk towards the switch');
    console.log('Press the switch');
}

// call the function
startFan();


// Function single Parameter
function bringSingara(money) {
    console.log('mama singara den');
    console.log('eto taka disen', money);
    console.log('ai nen singara');
}

var taka = 150;
bringSingara(30);

// multiple parameter
function add(a, b, c) {
    console.log(a, b, c);
    var sum = a + b + c;
    console.log(sum);
}

add(3, 5, 7);