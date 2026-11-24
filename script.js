


playGame()


function getComputerChoice() {
    let hand = Math.floor(Math.random() * 3) + 1

    if (hand === 1) {
        return hand = "rock"

    } else if (hand === 2) {
        return hand = "paper"
    } else {
        return hand = "scissors"
    }

}

function getHumanChoice() {
    let human = prompt("Choice one Rock, Papper or Scissors")


    return human.toLowerCase();


}
function playRound(humanChoice, computerChoice) {
    const human = humanChoice.toLowerCase().trim();
    const computer = computerChoice.toLowerCase().trim();

    if (human === computer) {
        console.log("It's a draw");
        return "draw";
    }

    const humanWins =
        (human === "rock" && computer === "scissors") ||
        (human === "paper" && computer === "rock") ||
        (human === "scissors" && computer === "paper");

    if (humanWins) {
        console.log(`You win! ${human} beats ${computer}`);
        return "human";
    }

    console.log(`You lose! ${computer} beats ${human}`);
    return "computer";
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let draws = 0;

    for (let i = 1; i <= 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        const roundResult = playRound(humanSelection, computerSelection);

        if (roundResult === "human") {
            humanScore += 1;
        } else if (roundResult === "computer") {
            computerScore += 1;
        } else if (roundResult === "draw") {
            draws += 1;
        }

        console.log(`Manche ${i} — human: ${humanScore} | computer: ${computerScore} | draws: ${draws}`);
    }

    console.log(`Score final — human: ${humanScore} | computer: ${computerScore} | draws: ${draws}`);
}