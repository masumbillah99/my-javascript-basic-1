function isLeapYear(year) {
    const remainder = year % 4;
    if (remainder === 0) {
        // console.log('your year is a leap year', year);
        return true;
    }
    else {
        // console.log('you year is not a leap year', year);
        return false;
    }
}

const isMyYearLeapYear = isLeapYear(2343);
const isHerYearLeapYear = isLeapYear(5436);
console.log('my year:', isMyYearLeapYear);
console.log('her year:', isHerYearLeapYear);