let humanScore = 0;
let computerScore = 0;


function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3);

    console.log(randomNum)

    if (randomNum === 2) {
        return "rock";
    } else if (randomNum === 1) {
        return "scissors";
    }
    return "paper";
}


function getHumanChoice() {
    let userChoice = 0 //prompt("Put a 0 for paper, 1 for scissors, or 2 for rock");

    if (userChoice === 2) {
        return "rock";
    } else if (userChoice === 1) {
        return "scissors";
    } else if (userChoice === 0) {
        return "paper";
    }
    console.log("Number not valid, please enter a new one");
    return getHumanChoice();
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("You both picked " + humanChoice + ". It was a tie");
    } else if (humanChoice === "rock") {
        if (computerChoice == "paper") {
            console.log("Computer wins");
            computerScore++;
        } else {
            console.log("You win");
            humanScore++;
        }
    } else if (humanChoice == "paper") {
        if (computerChoice == "scissors") {
            console.log("Computer wins");
            computerScore++;
        } else {
            console.log("You win");
            humanScore++;
        }
    
    } else {
        if (computerChoice == "rock") {
            console.log("Computer wins");
            computerScore++;
        } else {
            console.log("You win");
            humanScore++;
        }
    }
}

function playGame() {
    humanScore = 0;
    computerScore = 0;
    let roundsPlayed = 0;
    let humanSelection;
    let computerSelection;

    while(roundsPlayed < 5) {

        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
        roundsPlayed++;
    }

    if (humanScore === computerScore) {
        console.log("Tie");
    } else if (humanScore > computerScore) {
        console.log("you won");
    } else {
        console.log("comp wins");
    }
}


const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log(humanSelection);
console.log(computerSelection);

playRound(humanSelection, computerSelection);

playGame();


