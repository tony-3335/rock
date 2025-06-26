let userScore = 0;
let computerScore = 0;
let userHand;
let computerHand;
let roundResult;

const USER_OUTPUT = document.getElementById("user-scored");
const COMPUTER_OUTPUT = document.getElementById("computer-scored");

const ROCK = document.getElementById("rock");
const PAPER = document.getElementById("paper");
const SCISSORS = document.getElementById("scissors");

const RESULT = document.getElementById("result");

const SCORE_BOARD =  document.getElementById("score-board");

ROCK.addEventListener('click',function(){
    computerchoice();
    userHand="rock"
})