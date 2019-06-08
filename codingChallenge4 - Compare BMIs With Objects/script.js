const john = {
    fullName: "John Sauro",
    mass: 75.3,
    height: 1.75,
    bmi: null,
    calculateBMI: function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
};

const mark = {
    fullName: "Mark Sauro",
    mass: 80.3,
    height: 1.90,
    bmi: null,
    calculateBMI: function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
};


john.calculateBMI();
mark.calculateBMI();
mark.bmi == john.bmi ? console.log(`${john.fullName} and ${mark.fullName} has the same BMI: ${john.bmi}`) :
    mark.bmi > john.bmi ? console.log(`${mark.fullName} has the greater BMI: ${mark.bmi}`) :
    console.log(`${john.fullName} has the greater BMI: ${john.bmi}`);