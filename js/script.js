const player1 = document.querySelector(".player_0");
const player2 = document.querySelector(".player_1");
const scorePl1 = document.querySelector(".score_0");
const scorePl2 = document.querySelector(".score_1");
const diceEl = document.querySelector(".dice");
const btnRoll = document.querySelector(".btnRollDice");
const currentEl1 = document.querySelector(".current_0");
const currentEl2 = document.querySelector(".current_1");
const btnHold = document.querySelector(".btnHold");
const btnNew = document.querySelector(".btnNewGame");

let scores, currentScore, activePlayer, playGame
const inti = function () {
    scorePl1.textContent = 0;
    scorePl2.textContent = 0;
    diceEl.classList.add("hidden");
    
    scores = [0, 0];
    activePlayer = 0;
    currentScore = 0;
    playGame = true;

    currentEl1.textContent = 0;
    currentEl2.textContent = 0;

    diceEl.classList.add('hidden');
    player1.classList.remove('player-winner');
    player2.classList.remove('player-winner');
    player1.classList.add('activePlayer');
    player2.classList.remove('activePlayer');

}

inti();



// swith the player
const switchPlayer = function (){
    document.querySelector(`.current_${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;
    player1.classList.toggle("activePlayer");
    player2.classList.toggle("activePlayer");
}

btnRoll.addEventListener("click", function () {
  if(playGame) {
    diceEl.classList.remove("hidden");

  const dice = Math.trunc(Math.random() * 6) + 1;
  diceEl.src = `../images/dice-${dice}.png`;

  if (dice !== 1) {
    currentScore += dice;
    // currentEl.textContent = currentScore;
    document.querySelector(`.current_${activePlayer}`).textContent = currentScore;
  } else {
    switchPlayer();
  }
  }
});


// btn hold event
btnHold.addEventListener('click', function() {
    if(playGame) {
        scores[activePlayer] += currentScore;
    document.querySelector(`.score_${activePlayer}`).textContent = scores[activePlayer];
    
    if(scores[activePlayer] >= 20){
        playGame = false;
        document.querySelector(`.player_${activePlayer}`).classList.add('player-winner');
        document.querySelector(`.player_${activePlayer}`).classList.add('activePlayer');
        diceEl.classList.add("hidden");
    } else {
        //switch player
        switchPlayer();
    }
    }
});

btnNew.addEventListener('click', inti)
