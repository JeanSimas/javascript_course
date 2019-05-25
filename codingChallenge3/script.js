function calculateTip(value) {
    let percentage;
    let tip;
    percentage = value < 50 ? 20 :
        value < 200 ? 15 :
        10
    percentage /= 100;
    tip = value * percentage;
    console.log(`The percentage is ${percentage * 100} and the tip is ${tip}`);
}

calculateTip(500)