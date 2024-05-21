let humanPoints = 0;
let computerPoints = 0;

function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3) + 1;
    let result = (randomNum === 1) ? `rock` : (randomNum === 2) ? `paper` : `scissors`;
    return result;
}

function getHumanChoice() {
    const buttonContainer = document.querySelector(".button-container");
    buttonContainer.addEventListener('click', (event) => {
        if (event.target.tagName === `BUTTON`) {
            const humanChoice = event.target.id;  // Retrieve the choice based on button id
            const computerChoice = getComputerChoice();
            playRound(computerChoice, humanChoice);  // Play the round immediately after the choice
        }
    });
}

function displayChoices(humanChoice, computerChoice) {
    const attacks = document.querySelector(".attacks");

    while (attacks.firstChild) {
        attacks.removeChild(attacks.firstChild);
    } 

    const humanAttack = document.createElement("p");
    humanAttack.textContent = `Human Choice: ${humanChoice}`;
    const computerAttack = document.createElement("p");
    computerAttack.textContent = `Computer Choice: ${computerChoice}`;
    attacks.appendChild(humanAttack);
    attacks.appendChild(computerAttack);

}

function updateScores() {
    const scores = document.querySelector(`.scores`);

    while (scores.firstChild) {
        scores.removeChild(scores.firstChild);
    }

    const totalHumanPoints = document.createElement(`p`);
    const totalComputerPoints = document.createElement(`p`);
    totalHumanPoints.textContent = `Total human points: ${humanPoints}`;
    totalComputerPoints.textContent = `Total computer points: ${computerPoints}`;
    scores.appendChild(totalHumanPoints);
    scores.appendChild(totalComputerPoints);
}



function playRound(computerChoice, humanChoice) {
    displayChoices(humanChoice, computerChoice);
    if ((computerChoice == 'rock' && humanChoice == 'scissors') || 
        (computerChoice == 'scissors' && humanChoice == 'paper') || 
        (computerChoice == 'paper' && humanChoice == 'rock')) {
        computerPoints++;
    } else if ((humanChoice == 'rock' && computerChoice == 'scissors') || 
               (humanChoice == 'scissors' && computerChoice == 'paper') || 
               (humanChoice == 'paper' && computerChoice == 'rock')) {
        humanPoints++;
    }
    updateScores();
}

// Initialize the game when the document is ready
document.addEventListener('DOMContentLoaded', getHumanChoice);





