const rpsChoices = ["Rock", "Paper", "Scissors"]

function getComputerChoice() {
    return rpsChoices[Math.floor(Math.random() * (rpsChoices.length))]
}

console.log(getComputerChoice())