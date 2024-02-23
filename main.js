const rpsChoices = ["Rock", "Paper", "Scissors"];

let playerScore = 0;
let cpuScore = 0;
let round = 0;
const maxScore = 5;
let gameOver = false;

const buttonsContainer = document.querySelector('.buttons');
let buttons = buttonsContainer.childNodes;
const score = document.querySelector('.score');
const resultText = document.querySelector('.resultText');
const endText = document.querySelector('.endText');

function getComputerChoice() {
    return Math.floor(Math.random() * (rpsChoices.length));
}

function playRound(playerSelection, computerSelection) {
    let choiceNumber = playerSelection;
    let computerChoiceNumber = computerSelection;
    if (choiceNumber == 2 && computerChoiceNumber == 0) { computerChoiceNumber = 3;} // If we got scissors and they got rock, make them higher in number.
    if (choiceNumber == 0 && computerChoiceNumber == 2) { choiceNumber = 3; } // Vice versa for the opposite situation.
    if (choiceNumber > computerChoiceNumber)
    {
        return 'win';
    }
    else if (choiceNumber < computerChoiceNumber)
    {
        return 'lose';
    }
    else
    {
        return 'tie';
    }
}

function updateScore() {
    score.innerHTML = `Score: ${playerScore}<br>CPU Score: ${cpuScore}`;
    if ((playerScore >= 5 || cpuScore >= 5) && !gameOver)
    {
        gameOver = true;
        if (playerScore > cpuScore) { endText.textContent = "You win! You can still keep playing, though."}
        else { endText.textContent = "You lose... You can still keep playing, though." }
    }
}

function onClick(playerChoice) {
    // alert(`This works! The id is ${id} which is equivalent to ${rpsChoices[id]}`);
    let computerChoice = getComputerChoice()
    let result = playRound(playerChoice, computerChoice)
    let playerChoiceText = rpsChoices[playerChoice];
    let computerChoiceText = rpsChoices[computerChoice];
    switch (result)
    {
        case 'win':
            resultText.textContent = `You win the round! ${playerChoiceText} beats ${computerChoiceText}!`;
            playerScore++;
            break;
        case 'lose':
            resultText.textContent = `You lose the round. ${playerChoiceText} is beaten by ${computerChoiceText}...`;
            cpuScore++;
            break;
        case 'tie':
            resultText.textContent = `Tie. Both of you picked ${playerChoiceText}.`;
            break;
    }
    updateScore();
}

buttons.forEach( button => {
    button.addEventListener('click', event => { onClick(parseInt(event.target.id)); });
})