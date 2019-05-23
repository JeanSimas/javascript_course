var johnFirstGame = 89;
var johnSecGame = 120;
var johnThirdGame = 103;

var markFirstGame = 116;
var markSecGame = 94;
var markThirdGame = 123;

var averageJohn = johnFirstGame + johnSecGame;
averageJohn += johnThirdGame;
averageJohn /= 3;

var averageMark = markFirstGame + markSecGame;
averageMark += markThirdGame;
averageMark /= 3;

console.log(`Mark's average: ${averageMark}\t\tJohn's average: ${averageJohn}`);
averageJohn === averageMark ?
    console.log('It was a draw!') :
    averageJohn > averageMark ?
    console.log(`John's average is greater than Mark's`) :
    console.log(`Mark's average is greater than John's `);


var maryFirstGame = 97;
var marySecGame = 134;
var maryThirdGame = 105;


var averageMary = maryFirstGame + marySecGame;
averageMary += maryThirdGame;
averageMary /= 3;


console.log(`Mark's average: ${averageMark}\t\tJohn's average: ${averageJohn}\t\tMary's average: ${averageMary  }`);

averageMary > averageJohn && averageMary > averageMark ?
    console.log(`Mary's average is greater than John's and Mark's`) :
    averageMark > averageJohn && averageMark > averageMary ?
    console.log(`Mark's average is greater than John's and Mary's`) :
    averageJohn > averageMark && averageJohn > averageMary ?
    console.log(`John's average is greater than Mark's and Mary's`) :
    console.log(`It was a draw`);