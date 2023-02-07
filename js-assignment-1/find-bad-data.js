// ----- Problem 4: Finding Bad data -----

function findingBadData(numbers) {
    if (typeof numbers === "number" || typeof numbers === "string") {
        return "Input parameter should be a Array not single number or string";
    }
    else {
        let badData = [];
        for (let i = 0; i < numbers.length; i++) {
            if (numbers[i] < 0) {
                badData.push(numbers[i]);
            }
        }
        return badData.length;
    }
}

let ageNumber = [1, 2, 5];
ageNumber = [2, -5, -7, -13];
ageNumber = [-4, -9, -5, -33, -55];
// ageNumber = 'ami';
// ageNumber = [-4, -9, -5, -33, -55];
const result4 = findingBadData(ageNumber);
console.log(result4);