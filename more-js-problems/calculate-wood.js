/**
 1. chair -- 3 cft
 2. table -- 10 cft
 3. bed -- 50 cft

 vary: quantity
*/

function woodCalculator(chairQuantity, tableQuantity, bedQuantity) {
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    // console.log(chairQuantity, tableQuantity, bedQuantity);

    const chairWood = chairQuantity * perChairWood;
    const tableWood = tableQuantity * perTableWood;
    const bedWood = bedQuantity * perBedWood;
    // console.log(chairWood, tableWood, bedWood);

    const totalWood = chairWood + tableWood + bedWood;
    return totalWood;
}

const totalWood = woodCalculator(5, 3, 5);
console.log('total wood(cft) required: ', totalWood);