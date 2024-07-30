
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
    let userChoice = prompt("Put a 0 for paper, 1 for scissors, or 2 for rock");

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

console.log(getComputerChoice());
console.log(getHumanChoice());


