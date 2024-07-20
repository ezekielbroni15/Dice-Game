// Getting elements by document.querySelector
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

// create variable 
let scores, currentScore, activePlayer, playGame;

//  initialize function
const inti = function () {
  // setting player score to 0
  scorePl1.textContent = 0;
  scorePl2.textContent = 0;
  // hidding dice image
  diceEl.classList.add("hidden");
  // array for index player1 and player2 scores
  scores = [0, 0];
  activePlayer = 0;
  currentScore = 0;

  // boolen for play game
  playGame = true;

  currentEl1.textContent = 0;
  currentEl2.textContent = 0;

  // hide dice
  diceEl.classList.add("hidden");
  // reset player
  player1.classList.remove("player-winner");
  player2.classList.remove("player-winner");
  player1.classList.add("activePlayer");
  player2.classList.remove("activePlayer");
};

inti();

// swith the player
const switchPlayer = function () {
  document.querySelector(`.current_${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  // change active state appearance
  player1.classList.toggle("activePlayer");
  player2.classList.toggle("activePlayer");
};

// button function
btnRoll.addEventListener("click", function () {
  if (playGame) {
    // displaying the image when clicked on btnRoll
    diceEl.classList.remove("hidden");
    // generate a random number
    const dice = Math.trunc(Math.random() * 6) + 1;
    // random number will be used by the image
    diceEl.src = `./images/dice-${dice}.png`;
    // check for dice rolled 1
    if (dice !== 1) {
      // display the score
      currentScore += dice;
      document.querySelector(`.current_${activePlayer}`).textContent =
        currentScore;
    } else {
      // switch player calling the function switchPlayer()
      switchPlayer();
    }
  }
});

// btn hold event
btnHold.addEventListener("click", function () {
  if (playGame) {
    // add the current score to the global score when hold to active player
    scores[activePlayer] += currentScore;
    document.querySelector(`.score_${activePlayer}`).textContent =
      scores[activePlayer];

    // check for score from 100 to above
    if (scores[activePlayer] >= 100) {
      // stop game play when player win
      playGame = false;
      // change player box when player win
      document
        .querySelector(`.player_${activePlayer}`)
        .classList.add("player-winner");
      // when player win it hides the dice
      document
        .querySelector(`.player_${activePlayer}`)
        .classList.add("activePlayer");
      diceEl.classList.add("hidden");
    } else {
      // switch player calling the function switchPlayer()
      switchPlayer();
    }
  }
});

// reset game
btnNew.addEventListener("click", inti);
