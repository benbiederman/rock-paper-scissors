function computerPlay() {
    switch(Math.ceil(Math.random() * 3)){
        case 1:
            return 'rock'
            break;
        case 2: 
            return'paper'
            break;
        case 3:
            return 'scissors'
            break;
    }
}

let playerScore = 0;
let computerScore = 0;

function game (){
    const playerSelection = prompt('Rock, Paper, Scissors... SHOOT!');
    const computerSelection = computerPlay();   
    

    if(playerSelection.toLowerCase() === computerSelection) {
        console.log(`It's a draw! ${playerSelection.toLocaleLowerCase()} doesn't beat ${computerSelection}!`);
    } else if(playerSelection.toLowerCase() === 'rock' && computerSelection === 'paper'){
        console.log(`You lose! ${computerSelection} beats ${playerSelection.toLocaleLowerCase()}!`);
        computerScore++;
    } else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'scissors') {
        console.log(`You win! ${playerSelection.toLocaleLowerCase()} beats ${computerSelection}!`)
        playerScore++;
    } else if (playerSelection.toLocaleLowerCase() === 'paper' && computerSelection === 'rock'){
        console.log(`You win! ${playerSelection.toLocaleLowerCase()} beats ${computerSelection}!`);
        playerScore++
    } else if (playerSelection.toLocaleLowerCase() === 'paper' && computerSelection === 'scissors'){
        console.log(`You lose! ${computerSelection} beats ${playerSelection.toLocaleLowerCase()}!`);
        computerScore++
    } else if (playerSelection.toLocaleLowerCase() === 'scissors' && computerSelection === 'paper'){
        console.log(`You win! ${playerSelection.toLocaleLowerCase()} beats ${computerSelection}!`);
        playerScore++;
    } else if (playerSelection.toLocaleLowerCase() === 'scissors' && computerSelection === 'rock'){
        console.log(`You lose! ${computerSelection} beats ${playerSelection.toLocaleLowerCase()}!`);
        computerScore++
    } else {
        console.log('error! Shoot again');
    }
}

for(i = 0; i < 5; i++){
    game();
}

if(playerScore > computerScore){
    alert(`Congratulations! You beat the computer with a score of ${playerScore} to ${computerScore}!`);
} else if (computerScore > playerScore){
    alert(`Sucks to suck! You lost to the computer with a score of ${playerScore} to ${computerScore}!`);
} else if (computerScore === playerScore){
    alert(`You jabronis tied with a score of ${playerScore} to ${computerScore}!`);
} else {
    alert(`Wut?`);
}








