// ----- Problem 5: Convert your gems into diamond -----

function gemsToDiamond(firstGem, secGem, thirdGem) {
    if (typeof firstGem !== "number" || typeof secGem !== "number" || typeof thirdGem !== "number") {
        return "Please give all valid number";
    }
    else {
        const firstFriendGem = firstGem * 21;
        const secFriendGem = secGem * 32;
        const thirdFriendGem = thirdGem * 43;

        const totalGem = firstFriendGem + secFriendGem + thirdFriendGem;
        const thousandDouble = 1000 * 2;

        if (totalGem >= thousandDouble) {
            return totalGem - thousandDouble;
        }
        else {
            return totalGem;
        }
    }
}

let result5 = gemsToDiamond(20, 200, 50);
result5 = gemsToDiamond(100, 5, 1);
// result5 = gemsToDiamond(1, 1, 1);
console.log(result5);