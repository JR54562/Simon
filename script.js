const yellow = document.querySelector("#yellow");
const green = document.querySelector("#green");
const red = document.querySelector("#red");
const blue = document.querySelector("#blue");
const resetGame = document.querySelector("#startGame");
const panels = document.querySelectorAll(".panel");
const round = document.querySelector("#round");
const sequence = [green, red, yellow, blue];

const colors = ["rgb(13, 196, 13)", "red", "yellow", "blue"];
let userArray = [];
let compArray = [];
let level = 1;
let z;

// Game start
alert("Ready to follow Simon?");

// Populate the Start button and click event
resetGame.addEventListener("click", function () {
  round.innerText = "Round " + level;
  resetGame.innerText = "Restart?";
  z = 0;
  rndChange();
});

// have Simon start building array to be played
function addCompColor() {
  let x = Math.floor(Math.random() * 4);
  compArray.push(x);
}
// compArray now holds a new string value between 0-3 and grows

// ~Change rounds~
// This is the gameplay mechanics. Calls for the new sequence to be shown.
function rndChange() {
  round.innerText = "Round " + level;
  level++; //increase the level
  addCompColor(); // ~This adds new color added to compArray~
  flash(); // call function to show sequence compiled  to player
}

// for each index in compArray, flash the same index in 'sequence'
// - change backgroundColor to "white" for 1 sec timer
// change back to default value
flash();
function flash() {
  for (let i = 0; i < compArray.length; i++) {
    setTimeout(function () {
      sequence[compArray[i]].style.backgroundColor = "white";
    }, 1000 * (i + 1));
    setTimeout(function () {
      sequence[compArray[i]].style.backgroundColor = colors[compArray[i]];
    }, 1100 * (i + 1));
  }
}
// Call for the player turn to start
plyrTurn();

function plyrTurn() {
  // adding event listeners for "panel" click
  for (let i = 0; i < sequence.length; i++) {
    sequence[i].addEventListener("click", panelClick);
  }
}
// each panel that gets selected is added to the player array.
function panelClick(e) {
  let y = e.target.attributes.name.value;
  userArray.push(parseInt(y));
  if (userArray.length === compArray.length) {
    checker();
  }
}
// The checker function looks to compare the two arrays for length first and then values.
// If they don't match, the game ends and a restart is available.
function checker() {
  for (i = 0; i < compArray.length; i++) {
    if (userArray[i] != compArray[i]) {
      z = 1;
      alert("You have failed this round. Try again?");
      userArray = [];
      compArray = [];
      level = 1;
      resetGame.innerText = "Restart?";
    }
  }
  if (z === 0) {
    userArray = [];
    rndChange();
    // run the round changer
  }
}
