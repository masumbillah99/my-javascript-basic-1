for (var i = 1; i <= 20; i++) {
    if (i > 10) {
        break;
    }
    console.log(i);
}

// continue
var numbers = [23, 53, 34, 94, 50, 04, 13, 54];
for (var i = 1; i < numbers.length; i++) {
    if (i > 50) {
        // continue;
    }
    console.log(numbers);
}

// Fill in the blanks; so that the output will be 13 and 14.
var marks = [13, 15, 14, 20, 18];
for (var i = 0; i < marks.length; i++) {
    if (marks[i] >= 15) {
        continue;
    }
    console.log(marks[i]);
};