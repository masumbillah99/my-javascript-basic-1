/**
 * 1. write a function that will take hour as the input parameter and will convert
    it into minutes and will return the result in minutes.
*/
function hourToMinute(hour) {
    let minute = hour * 60;
    return minute;
}
const result1 = hourToMinute(1);
const result2 = hourToMinute(24);
const result3 = hourToMinute(48);
console.log('hour to minute = ', result1, result2, result3);

// minutes to seconds
function minuteToSecond(minute) {
    const second = minute * 60;
    return second;
}

const result4 = minuteToSecond(60);
const result5 = minuteToSecond(1440);
const result6 = minuteToSecond(2880);
console.log('minute to second =', result4, result5, result6);


/**
 * 2. write a function findLearpYear() that will take the array [2023, 2024, 2025,
    2028, 2030] as the input parameter and will check if each year is a leap year.
    if a year is a leap year insert that year in a new array, return the new array
    and print the result.
*/