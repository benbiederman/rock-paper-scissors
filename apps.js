const playerSelectionImg = document.querySelector('.player-throw');
const cpuSelectionImg = document.querySelector('.cpu-throw');
const playerWinCounter = document.querySelector('.player-wins')
const tiesCounter = document.querySelector('.ties')
const cpuWinCounter = document.querySelector('.cpu-wins')
const popup = document.querySelector('.popup');
const dismiss = document.querySelector('.dismiss')
const gameResults = document.createElement('p');
const playerWins = document.createElement('h3');
const gameTies = document.createElement('h3');
const cpuWins = document.createElement('h3');
const playerOptions = document.querySelectorAll('.options div');

let playerScore = 0;
let cpuScore = 0;
let tiesScore = 0;

playerWins.textContent = playerScore;
playerWinCounter.appendChild(playerWins);

gameTies.textContent = tiesScore;
tiesCounter.appendChild(gameTies);

cpuWins.textContent = cpuScore;
cpuWinCounter.appendChild(cpuWins);


playerOptions.forEach((div) => {
    div.addEventListener('click', (e) => {
        let playerSelection = div.className;
        playerSelectionImg.style.backgroundImage = `url(/img/${playerSelection}.jpg)`;
        const cpuSelection = computerPlay();
        cpuSelectionImg.style.backgroundImage = `url(/img/${cpuSelection}2.jpg)`;
        setTimeout(() => {playRound(playerSelection, cpuSelection);}, 500);
    })
})

function playRound(playerChoice, computerChoice){
    if (playerChoice === computerChoice) {
        popup.style.display = 'flex';
        gameResults.textContent = `It's a tie!`;
        popup.prepend(gameResults);
        tiesScore++       
    } else if(playerChoice === 'rock'){
        if(computerChoice === 'paper'){
            popup.style.display = 'flex';
            gameResults.textContent = `Computer Wins! ${computerChoice} beats ${playerChoice}`;
            popup.prepend(gameResults);
            cpuScore++   
        } else if(computerChoice === 'scissors'){
            popup.style.display = 'flex';
            gameResults.textContent = `Player Wins! ${playerChoice} beats ${computerChoice}`;
            popup.prepend(gameResults);   
            playerScore++
        }
    } else if(playerChoice === 'paper'){
        if(computerChoice === 'scissors'){
            popup.style.display = 'flex';
            gameResults.textContent = `Computer Wins! ${computerChoice} beats ${playerChoice}`;
            cpuScore++   
            popup.prepend(gameResults);  
        } else if(computerChoice === 'rock'){
            popup.style.display = 'flex';
            gameResults.textContent = `Player Wins! ${playerChoice} beats ${computerChoice}`;
            popup.prepend(gameResults);   
            playerScore++
        }
    } else if(playerChoice === 'scissors'){
        if(computerChoice === 'rock'){
            popup.style.display = 'flex';
            gameResults.textContent = `Computer Wins! ${computerChoice} beats ${playerChoice}`;
            cpuScore++   
            popup.prepend(gameResults);  
        } else if(computerChoice === 'paper'){
            popup.style.display = 'flex';
            gameResults.textContent = `Player Wins! ${playerChoice} beats ${computerChoice}`;
            popup.prepend(gameResults);  
            playerScore++ 
        }
    }

    //Adds scores for player, CPU, and ties after each round
    playerWins.textContent = playerScore;
    playerWinCounter.appendChild(playerWins);

    gameTies.textContent = tiesScore;
    tiesCounter.appendChild(gameTies);

    cpuWins.textContent = cpuScore;

    cpuWinCounter.appendChild(cpuWins);

    //Dismisses the popup, removes the selections
    dismiss.addEventListener('click', (e) => {
        popup.style.display = 'none'
        cpuSelectionImg.style.backgroundImage = 'none';
        playerSelectionImg.style.backgroundImage = 'none';
        
    })
    
}






function computerPlay() {
    switch(Math.ceil(Math.random() * 3)){
        case 1:
            return 'rock';
            break;
        case 2:
            return 'paper';
            break;
        case 3:
            return 'scissors';
            break;
    }
}