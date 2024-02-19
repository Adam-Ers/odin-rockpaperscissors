const rpsChoices = ["Rock", "Paper", "Scissors"];
const playerChoices = ["r", "p", "s"];

function getComputerChoice() {
    return rpsChoices[Math.floor(Math.random() * (rpsChoices.length))];
}

function playRound(playerSelection, computerSelection) {
    let choice = playerSelection
    if (choice == undefined) {choice = "undefined";}
    let computerChoice = computerSelection
    let choiceLetter = choice.toLowerCase();
    choiceLetter = choiceLetter.charAt(0);
    if(playerChoices.find(element => element == choiceLetter) == undefined)
    {
        return "Invalid choice!"
    }
    else
    {
        let choiceNumber = playerChoices.findIndex(element => element == choiceLetter);
        let computerChoiceNumber = rpsChoices.findIndex(element => element == computerChoice)
        if (choiceNumber == 2 && computerChoiceNumber == 0) { computerChoiceNumber = 3;} // If we got scissors and they got rock, make them higher in number.
        if (choiceNumber == 0 && computerChoiceNumber == 2) { choiceNumber = 3; } // Vice versa for the opposite situation.
        if (choiceNumber > computerChoiceNumber)
        {
            return `You win! ${choice} beats ${computerChoice}.`;
        }
        else if (choiceNumber < computerChoiceNumber)
        {
            return `You lose. ${computerChoice} beats ${choice}.`;
        }
        else
        {
            return `Tie. Both of you picked ${choice}.`;
        }
    }
}

document.getElementById("output").innerHTML = playRound(prompt("Choose your move:"), getComputerChoice());