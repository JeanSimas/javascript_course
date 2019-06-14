/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

let roundScores = [0, 0];
let globalScores = [0, 0];

let playerIndex = 0;

let dice = 6;



function rollDice() {
    dice = Math.floor(Math.random() * (7 - 1) + 1);
    verifyDiceNumber();
    changeImageDice();
    console.log(dice);
}


function changeImageDice() {}

function holdScore() {
    addRoundScoreToGlobalScore();
    resetScore();
    verifyGameOver();

    changePlayerIndex();

    updateVisual();
}

function verifyGameOver() {
    if (globalScores[playerIndex] >= 100) {
        document.querySelector(`#name-${playerIndex}`).innerText = "WINNER";
    }
}

function addRoundScoreToGlobalScore() {
    globalScores[playerIndex] += roundScores[playerIndex];

}

function resetScore() {
    roundScores.fill(0);
}

function changePlayerIndex() {
    playerIndex = playerIndex == 0 ? 1 : 0;
}

function updateVisual() {
    document.querySelector(".dice").src = `dice-${dice}.png`

    document.getElementById('current-0').innerText = roundScores[0];
    document.getElementById('current-1').innerText = roundScores[1];

    document.getElementById('score-0').innerText = globalScores[0];
    document.getElementById('score-1').innerText = globalScores[1];


}

function addDiceNumberToRoundScore() {
    roundScores[playerIndex] += dice;
}

function verifyDiceNumber() {
    if (dice == 1) {
        resetScore();

        changePlayerIndex();
    } else {
        addDiceNumberToRoundScore();
    }
    updateVisual();

}

function newGame() {
    roundScores.fill(0);
    globalScores.fill(0);
    playerIndex = 0;
    updateVisual();
}

document.querySelector('.btn-roll').addEventListener('click', () => rollDice());




document.querySelector('.btn-hold').addEventListener('click', () => holdScore());



document.querySelector('.btn-new').addEventListener('click', () => newGame())

updateVisual();