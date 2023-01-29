/** practice problem - 1
    you are given an array:
        var fruits = ['apple', 'banana', 'orange'];
    a. find the index of 'banana' and replace 'banana' with 'mango'.
    b. remove 'orange' and add 'watermelon'.
*/
var fruits = ['apple', 'banana', 'orange'];
var bananaIndex = fruits.indexOf('banana');
fruits[bananaIndex] = 'mango';
fruits.pop();
fruits.push('watermelon');
console.log(fruits);


/** practice problem - 2
    you and your friends tom, jane, peter and john got their final exam results.
    your total score is 85, tom's total score is 66, jane score 95, peter's score
    is 56 and john's score is 40. the grading cart is
        80 or above A grade
        60 or above B grade
        50 or above C grade
        40 or above D grade
        39 or less => F grade
    write a program to find your and your friends' grades using if-else.
*/
var mark = 56;
var grade;
if (mark >= 80) {
    grade = 'A';
}
else if (mark >= 60) {
    grade = 'B';
}
else if (mark >= 50) {
    grade = 'C';
}
else if (mark >= 40) {
    grade = 'D';
}
else {
    grade = 'F';
}
console.log(grade);


/** practice problem - 3
    1. you are given three numbers 13, 79 and 45. write a program that will print the largest
    number using if-else.
    2. you are given a triangle with the sides 9, 8, 9. write a program to check whether
    a triangle is Isosceles or not using if-else.
        [Isosceles => two sides are equal]
*/
var num1 = 13;
var num2 = 79;
var num3 = 45;
var largest;
if (num1 > num2) {
    if (num1 > num3) {
        console.log(num1);
    }
    else {
        console.log(num3);
    }
}
else {
    if (num2 > num3) {
        console.log(num2);
    }
    else {
        console.log(num3);
    }
}

/**
    you are given a triangle with the sides 9, 8, 9. write a program to check
    whether a triangle is Isosceles or not using if-else.
        [Isosceles => two sides are equal]
*/
var side1 = 9;
var side2 = 8;
var side3 = 9;

if (side1 == side2 || side1 == side3 || side2 == side3) {
    console.log('isosceles');
}
else {
    console.log('no');
}