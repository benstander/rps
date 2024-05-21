function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3) + 1;
    let result;

    if (randomNum === 1) {
        result = `rock`;
    } else if (randomNum === 2) {
        result = `paper`;
    } else {
        result = `scissors`;
    }

    return result;
}

function getHumanChoice() {
    let input = prompt(`What is your attack?`, );
    input = input.toLowerCase();
    return input;
}


let humanPoints = 0;
let compPoints = 0;

function playRound(computerChoice, humanChoice) {
    // Conditions where the computer wins
    if ((computerChoice == 'rock' && humanChoice == 'scissors') || 
        (computerChoice == 'scissors' && humanChoice == 'paper') || 
        (computerChoice == 'paper' && humanChoice == 'rock')) {
        compPoints++;
        console.log(`Computer wins this round`);
    } 
    // Conditions where the human wins
    else if ((humanChoice == 'rock' && computerChoice == 'scissors') || 
             (humanChoice == 'scissors' && computerChoice == 'paper') || 
             (humanChoice == 'paper' && computerChoice == 'rock')) {
        humanPoints++;
        console.log(`Human wins this round`);
    } 
    // Conditions where it's a tie
    else {
        console.log(`This round is a tie`);
    }
}


for (let i = 0; i < 5; i++) {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    console.log(`Human choice : ${humanChoice}`);
    console.log(`Computer choice: ${computerChoice}`);
    playRound(computerChoice, humanChoice);
}

console.log(`Total human points: ${humanPoints}`);
console.log(`Total computer points: ${compPoints}`);




