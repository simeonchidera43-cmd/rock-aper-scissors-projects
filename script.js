let score = {
  wins: 0,
  Tie: 0,
  Lose: 0
}


function playerMove(playGame){
    
  let computerMove = pickComputerMove();

  let result = '';

  if(playGame === 'Rock'){
     if(computerMove === 'Rock') {
      result = 'You Win'
    }else if(computerMove === 'Paper'){
      result = 'Tie'
    }else if(computerMove === 'Scissors'){
      result = 'Lose'
  }
  }else if(playGame === 'Paper'){
     if(computerMove === 'Rock') {
      result = 'Lose'
    }else if(computerMove === 'Paper'){
      result = 'You Win'
    }else if(computerMove === 'Scissors'){
      result = 'Tie'
  }
  }else if(playGame === 'Scissors') {
   if(computerMove === 'Rock') {
      result = 'Lose'
    }else if(computerMove === 'Paper'){
      result = 'You Win'
    }else if(computerMove === 'Scissors'){
      result = 'Tie'
  }
  }

  if(result === 'You Win'){
    score.wins ++
  }else if(result === 'Tie'){
    score.Tie ++
  }else if(result === 'Lose'){
    score.Lose ++
  }




    document.querySelector('.js-score-count').innerHTML = `Win: ${score.wins}, Tie: ${score.Tie}, Lose: ${score.Lose}`;

  document.querySelector('.result').innerHTML = result;


  document.querySelector('.js-Reset-score-button').innerHTML = `
  You
  <img class="player" src="image/${playGame}.png" alt="">
  <img class="player" src="image/${computerMove}.png" alt="">

  Computer
   `

  }

let computerMove = '';

function pickComputerMove() {

   let remNumber =Math.random();

  if(remNumber >= 0 && remNumber < 1 / 3) {
    computerMove = 'Rock';
  }else if(remNumber >= 1/3 && remNumber < 2 / 3){
    computerMove = 'Paper'
  }else if(remNumber >= 2 / 3 && remNumber < 1){
    computerMove = 'Scissors'
  }

  return computerMove
}


function updateelement() {
  document.querySelector('.js-score-count').innerHTML = `Win: ${score.wins}, Tie: ${score.Tie}, Lose: ${score.Lose}`;
}

updateelement()