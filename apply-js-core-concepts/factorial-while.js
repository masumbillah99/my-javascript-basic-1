function factorial() {
    let num = 1;
    let result = 1;
    while (num <= 7) {
        result = result * num;
        num++;
    }
    console.log(result);
}
factorial();