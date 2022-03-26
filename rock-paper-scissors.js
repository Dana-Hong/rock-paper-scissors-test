function computerPlay() {
    let computer_selection = computerSelection();
    
    if (computer_selection === 1) {
        return 'rock';
    } else if (computer_selection === 2) {
        return 'paper';
    } else if (computer_selection === 3) {
        return 'scissors';
    }

    function computerSelection() {
        return Math.floor(Math.random() * 3) + 1;
    }

}


function playerPlay() {
    let selection = prompt('Choice: ');
    return selection;
}


function playRound(playerSelection, computerSelection) {
    computerSelection = computerPlay();
    playerSelection = playerPlay();

    playerSelection = playerSelection.toLowerCase();
    if (playerSelection !== 'rock' && playerSelection !== 'paper' && playerSelection !== 'scissors') {
        return 'invalid selection';
    } else {
        if (playerSelection === computerSelection) {
            return 'tie';
        } else if ((playerSelection === 'rock' && computerSelection === 'paper') || (playerSelection === 'scissors' && computerSelection === ' rock') || (playerSelection === 'paper' && computerSelection === 'scissors')) {
            return 'computer wins';
        } else {
            return 'player wins';
        }
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    let counter = 5;
    while (counter) {
        console.log(`Rounds left: ${counter}`)
        let result = playRound();
        if (result === 'invalid selection') {
            console.log('invalid selection');
            continue;
        } else if (result === 'player wins') {
            playerScore++;
            counter--;
        } else if (result === 'computer wins') {
            console.log(result);
            computerScore++;
            counter--;
        }
    }
    return console.log(`Game over. Player score: ${playerScore} Computer score: ${computerScore}`);
}

game();