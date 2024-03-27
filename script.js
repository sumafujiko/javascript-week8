let computerChoice = "";
let userChoice = "";

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
        return "rock";
        case 1:
        return "paper";
        case 2:
        return "scissors";
    }
    
}

console.log(getComputerChoice());

/* Event listeners */
rock.addEventListener("click", function() {
    userChoice = "rock";
    determineWinner();
});

scissors.addEventListener("click", function() {
    userChoice = "scissors";
    determineWinner();
});

paper.addEventListener("click", function() {
    userChoice = "paper";
    determineWinner();
});

/* Determine winner */

function determineWinner() {
    computerChoice = getComputerChoice();
    if (userChoice === computerChoice) {
        document.getElementById("result").textContent = "It's a tie! You both chose " + userChoice + "!";
        return;
    }
    
    if (userChoice === "rock") {
        if (computerChoice === "paper") {
            document.getElementById("result").textContent = "Computer wins! " + computerChoice + " beats " + userChoice;
        } else {
            document.getElementById("result").textContent = "You win! " + userChoice + " beats " + computerChoice;
        }
    }
    if (userChoice === "paper") {
        if (computerChoice === "scissors") {
            document.getElementById("result").textContent = "Computer wins! " + computerChoice + " beats " + userChoice;
        } else {
            document.getElementById("result").textContent = "You win! " + userChoice + " beats " + computerChoice;
        }
    }
    if (userChoice === "scissors") {
        if (computerChoice === "rock") {
            document.getElementById("result").textContent = "Computer wins! " + computerChoice + " beats " + userChoice;
        } else {
            document.getElementById("result").textContent = "You win! " + userChoice + " beats " + computerChoice;
        }
    }
}
