function milesToKm(miles) {
    const km = miles * 1.60934;
    return km;
}

const distance = milesToKm(2);
console.log('miles to km =',distance);


// km to miles
function kmToMiles(km) {
    const miles = km/1.60934;
    return miles;
}

const distance2 = kmToMiles(4.53);
console.log('km to miles =',distance2);