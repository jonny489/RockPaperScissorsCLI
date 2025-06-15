let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let int = Math.floor(Math.random()*3);
    let choice;
    switch (int) {
        case 0:
            choice = "rock";
        case 1:
            choice = "paper";
        case 2:
            choice = "scissors";
    }
    return choice;
}

console.log(getComputerChoice());

function getHumanChoice(){
    index = prompt('Rock Paper or Scissors?');
    return index;
}

function playRound(humanChoice, computerChoice) {
    const text = document.querySelector('.text');
    lowerCaseHumanChoice = humanChoice.toLowerCase();
    if (lowerCaseHumanChoice === computerChoice) {
    console.log("Tie!");
    text.textContent = "Tie";
    } else if (lowerCaseHumanChoice === "rock") {
        if (computerChoice === "paper") {
            console.log("You Lose! Computer Won!");
            text.textContent = "You Lose :(";
        } else {
            console.log("You Win!");
            text.textContent = "You Win :)";
        }
    } else if (lowerCaseHumanChoice === "paper") {
        if (computerChoice === "scissors") {
            console.log("You Lose! Computer Won!");
            text.textContent = "You Lose :(";
        } else {
            console.log("You Win!");
            text.textContent = "You Win :)";
        }
    } else if (lowerCaseHumanChoice === "scissors") {
        if (computerChoice === "rock") {
            console.log("You Lose! Computer Won!");
            text.textContent = "You Lose :(";
        } else {
            console.log("You Win!");
            text.textContent = "You Win :)";
        }
    } else {
        console.log("Invalid choice!");
        playGame();
    }
}

function playGame(){
        playRound(getHumanChoice(), getComputerChoice());
}


