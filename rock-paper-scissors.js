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

function removeHighlightsFromPrevious() {
    document.querySelector(`.${lastRound.player}`).classList.remove('selected');
    document.querySelector(`.opponent-${lastRound.computer}`).classList.remove('selected');
}

function highlightSelection(playerSelection, computerSelection) {
    lastRound.player = playerSelection;
    lastRound.computer = computerSelection;
    playerSelection = document.querySelector(`.${playerSelection}`);
    computerSelection = document.querySelector(`.opponent-${computerSelection}`);
    
    playerSelection.classList.add('selected');
    computerSelection.classList.add('selected');

}

let playerScore = 0;
let computerScore = 0;
let tieCount = 0;

let lastRound = {
    player: '',
    computer: '',
}

function playRound(playerSelection) {
    if (playerScore + computerScore === 5) {
        resetGame();
        return;
    }

    if (lastRound.player !== '') {
        removeHighlightsFromPrevious(lastRound);
    }
    
    playerSelection = playerSelection.target.closest('button').id;
    let computerSelection = computerPlay();
    
    if (playerSelection === computerSelection) {
        tieCount++;
        tieCountDisplay.textContent = `Tied Rounds: ${tieCount}`;
        
    } else if ((playerSelection === 'rock' && computerSelection === 'paper') || (playerSelection === 'scissors' && computerSelection === ' rock') || (playerSelection === 'paper' && computerSelection === 'scissors')) {
        computerScore++;
        computerScoreDisplay.textContent = `${computerScore}`;
    } else {
        playerScore++;
        playerScoreDisplay.textContent = `${playerScore}`;
    }
    
    highlightSelection(playerSelection, computerSelection);
    
    if (playerScore + computerScore === 5) {
        if (playerScore > computerScore) {
            modalText.textContent = 'You win!';
            modal.style.display = "flex";
        } else {
            modalText.textContent = 'You lose.';
            modal.style.display = "flex";
        }
    }
}

function resetGame() {
    removeHighlightsFromPrevious(lastRound);
    playerScore = 0;
    playerScoreDisplay.textContent = 0;
    computerScore = 0;
    computerScoreDisplay.textContent = 0;
    tieCount = 0;
    tieCountDisplay.textContent = 0;

    for (prop in lastRound) {
        prop.value = '';
    }
}

window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
}

let choice = document.querySelectorAll('.player-button');
let playerScoreDisplay = document.querySelector('.player-score').lastElementChild;
let computerScoreDisplay = document.querySelector('.computer-score').lastElementChild;
let tieCountDisplay = document.querySelector('.tie-counter');
let playAgainButton = document.querySelector('#play-again-btn');
let closeButton = document.querySelector('.close');
let modal = document.getElementById("myModal"); 
let modalText = document.querySelector('.modal-text');

playerScoreDisplay.textContent = `${playerScore}`;
computerScoreDisplay.textContent = `${computerScore}`;
tieCountDisplay.textContent = `Tied Rounds: ${tieCount}`;

choice.forEach(element => element.addEventListener('click', playRound));
playAgainButton.addEventListener('click', resetGame);
closeButton.addEventListener('click', () => modal.style.display = 'none');
