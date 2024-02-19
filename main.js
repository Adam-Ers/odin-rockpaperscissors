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

function playGame(rounds)
{
    for (let i = 0; i < rounds; i++)
    {
        let text = "";
        // The point of the 0 ms timeout is to ensure that it doesn't wait until the last prompt to draw all the text.
        // It doesn't always work for every single line, but it works most of the time.
        setTimeout( () => {
            text = playRound(prompt("Choose your move:"), getComputerChoice())
            console.log(text);
            document.getElementById("output").innerHTML += text + "<br>";
        },
        0);
        
    }
}

playGame(5);