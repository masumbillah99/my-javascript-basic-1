// -----------practice task-------------

/**
 * 1. write a function called foo() which prints 'foo' and a function called
    bar() which prints 'bar'. call function bar() in the foo() function after
    printing. what will be the output? now call the foo() to see the output.
*/
function foo() {
    console.log('foo');
    bar();
}
function bar() {
    console.log('bar');
}
foo();


/**
 * 2. write a function called make_avg() which will take an three integers and 
    return the average of those values.
*/
function make_avg(a, b, c) {
    const average = (a + b + c) / 3;
    return average;
}
var result1 = make_avg(5, 7, 9);
console.log(result1);


/**     ---- Challenging ----
 * 3. write a function called make_avg() which will take an array of integers and
    the size of that array and return the average of those values.
*/
function make_average(numbers) {
    let sum = 0;
    let average;
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        sum += element;
        // console.log(sum);
        average = sum / numbers.length;
    }
    return average;
}

const hisNumbers = [13, 35, 55, 75, 99];
const result2 = make_average(hisNumbers);
console.log(result2);


/**
 * 4. write a function called odd_even() which takes an integer value and
    tells whether this value is even or odd. You need to do it in 4 ways:
        * Has return + Has parameter
        * No return + Has parameter
*/
function odd_even(value) {

}


/**
 * 5. you are in a hurry to go to your school on time. but when you are crossing
    the road, the traffic signal is red coloured. in this situation, if you try to
    cross the road, you may be in danger. if you notice a yellow coloured traffic
    signal, you should stop. if you notice a green coloured traffic signal, you
    should cross the road. so write a JS code, where there is a variable called
    signal. its value can be green, yellow or red & we will get different activities
    as output depending on the variable. so, hurry up.
*/
