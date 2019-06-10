let johnsValues = {
    bills: [124, 48, 268, 180, 42],
    tips: [],
    finalAmounts: [],
    calculateTips: function () {
        for (let i = 0; i < this.bills.length; i++) {
            let percentage;
            if (this.bills[i] < 50) {
                percentage = 20
            } else if (this.bills[i] < 200) {
                percentage = 15;
            } else {
                percentage = 10;
            }
            this.tips[i] = this.bills[i] * percentage / 100;
            this.finalAmounts[i] = this.tips[i] + this.bills[i];
        }
    }
}

let marksValues = {
    bills: [77, 375, 110, 45],
    tips: [],
    finalAmounts: [],
    calculateTips: function () {
        for (let i = 0; i < this.bills.length; i++) {
            let percentage;
            if (this.bills[i] < 100) {
                percentage = 20
            } else if (this.bills[i] < 300) {
                percentage = 10;
            } else {
                percentage = 25
            }
            this.tips[i] = this.bills[i] * percentage / 100;
            this.finalAmounts[i] = this.tips[i] + this.bills[i];
        }
    }
}

function calculateAverageTips(tips) {
    let sum = 0;
    for (let i = 0; i < tips.length; i++) {
        sum += tips[i];
    }
    return sum / tips.length;
}

function compareAverageTips(johnsAverage, marksAverage) {
    if (johnsAverage == marksAverage) {
        console.log(`Both families have the same average: ${johnsAverage}`);
    } else if (johnsAverage > marksAverage) {
        console.log(`John's family has the greater average: ${johnsAverage}`);
    } else {
        console.log(`Mark's family has the greater average: ${marksAverage}`);
    }
}

johnsValues.calculateTips();
marksValues.calculateTips();

let averageTipsJohn = calculateAverageTips(johnsValues.tips);
let averageTipsMark = calculateAverageTips(marksValues.tips);

compareAverageTips(averageTipsJohn, averageTipsMark);