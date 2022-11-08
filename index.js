const readlineSync = require('readline-sync');
const fs = require('fs');

const questionAnswer = fs.readFileSync('./questionAnswer.json');
var highScore = fs.readFileSync('./highScore.json');

const questionAnswerJson = JSON.parse(questionAnswer);
var highScoreJson = JSON.parse(highScore);

let userScore = 0

checkAnswerRewardUser(questionAnswerJson.questionOne.question, questionAnswerJson.questionOne.answer);
checkAnswerRewardUser(questionAnswerJson.questionTwo.question, questionAnswerJson.questionTwo.answer);
checkAnswerRewardUser(questionAnswerJson.questionThree.question, questionAnswerJson.questionThree.answer);
checkAnswerRewardUser(questionAnswerJson.questionFour.question, questionAnswerJson.questionFour.answer);
checkAnswerRewardUser(questionAnswerJson.questionFive.question, questionAnswerJson.questionFive.answer);

updateHighScore(userScore)


// function to update user score
function checkAnswerRewardUser(questionStatement, correctAnswer) {
    var userAnswer = readlineSync.question(questionStatement)

    if (correctAnswer == userAnswer) {
        userScore++;
        console.log('Hurray! You earned a point, your current score: ' + userScore);
    } else {
        userScore--;
        console.log('Sorry! Wrong Answer, your current score: ' + userScore)
    }
}


// function to update and compare high score
function updateHighScore(userScore) {
    highScoreJson['highScore'].push(userScore)
    var maxScore = Math.max.apply(null, highScoreJson['highScore']);

    if (maxScore == userScore) {
        console.log('Hey King, you dropped this! Send us a screenshot <3')
    }

    var updatedHighScore = JSON.stringify(highScoreJson, null, 2);
    fs.writeFile('./highScore.json', updatedHighScore, err => {
        // error checking
        if (err) throw err;
        console.log("New data added");
    });
}           