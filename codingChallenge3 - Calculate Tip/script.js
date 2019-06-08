function calculateTip(value) {
    let percentage;
    let tip;

    // if the value is less than 50 the percentage is 20%
    // if the value is between 50 and 200 the percentage is 15%
    // if the value is greater than 200 the percentage is 10%
    percentage = value < 50 ? 20 :
        value < 200 ? 15 :
        10
    percentage /= 100;
    tip = value * percentage;
    console.log(`The percentage is ${percentage * 100} and the tip is ${tip}`);
}

calculateTip(500)