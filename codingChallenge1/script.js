var massJohn = 65;
var massMark = 59.1;

var heightJohn = 1.75;
var heightMark = 1.77;

var bmiJohn = massJohn / (heightJohn * heightJohn);
var bmiMark = massMark / (heightMark * heightMark);
console.log(bmiJohn);
console.log(bmiMark);

var isJohnBmiGreaterThanMarks = bmiJohn > bmiMark;
console.log(`Is John's BMI greater than Marks's? ${isJohnBmiGreaterThanMarks}`);