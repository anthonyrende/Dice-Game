/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

// dice = Math.floor(Math.random() * 6) + 1;
// document.querySelector("#current-" + activePlayer).textContent = dice;
// document.querySelector("#current-" + activePlayer).innerHTML = "<em>" + dice + "</em>";

let scores, roundScore, activePlayer;

// scores = [0, 0];
// roundScore = 0;
// activePlayer = 0;
init();

document.querySelector(".btn-roll").addEventListener("click", function() {
  //Random number
  let dice = Math.floor(Math.random() * 6) + 1;
  //Display result
  var diceDOM = document.querySelector(".dice");
  //Display dice on click
  diceDOM.style.display = "block";
  //Show img src on dice-*.png
  diceDOM.src = "dice-" + dice + ".png";
  //Update the round score IF the rolled num != 1
  if (dice !== 1) {
    //Add score
    roundScore += dice;
    //Displays score
    document.querySelector("#current-" + activePlayer).textContent = roundScore;
  } else {
    //Next player
    nextPlayer();
  }
});

document.querySelector(".btn-hold").addEventListener("click", function() {
  //Add current score to global score
  scores[activePlayer] += roundScore;

  //Update the UI
  document.querySelector("#score-" + activePlayer).textContent =
    scores[activePlayer];

  //Checks if player won the game
  if (scores[activePlayer] >= 100) {
    document.querySelector("#name-" + activePlayer).textContent = "Winner!";
    document.querySelector(".dice").style.display = "none";
    document
      .querySelector(".player-" + activePlayer + "-panel")
      .classList.toggle("winner");
  } else {
    nextPlayer();
  }
  //Next Player
  nextPlayer();
});

function nextPlayer() {
  //Next player
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  //Score back to 0
  roundScore = 0;

  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";
  //Toggles 'active' class between players
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");

  // document.querySelector(".player-0-panel").classList.remove("active");
  // document.querySelector(".player-1-panel").classList.add("active");

  document.querySelector(".dice").style.display = "none";
}

document.querySelector(".btn-new").addEventListener("click", init);

function init() {
  scores = [0, 0];
  activePlayer = 0;
  roundScore = 0;

  document.querySelector(".dice").style.display = "none";

  document.getElementById("score-0").textContent = "0";
  document.getElementById("score-1").textContent = "0";
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";
}
