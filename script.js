const yellow = document.querySelector("#yellow");
const green = document.querySelector("#green");
const red = document.querySelector("#red");
const blue = document.querySelector("#blue");
const resetGame = document.querySelector(".reset >startGame");

const sequence = [green, red, yellow, blue];

const colors = ["green", "red", "yellow", "blue"];
let userArray = [];
let compArray = [];
let panels = document.querySelectorAll(".panel");

// have Simon start building array to be played
function addCompColor() {
  let x = Math.floor(Math.random() * 4);
  compArray.push(x);
}
addCompColor();
//console.log(compArray)

  // start the round and show the first sequence
function gameTurn() {
    // game will show a sequence to use to repeat
}

// adding event listeners for "panel" click

panels.forEach((panel) => {
  panel.addEventListener("click", panelClick);
});

// let counter = 1

const panelClick = (event) => {
  // Add click functionality to every 'panel'
};

var div = document.getElementsById("panel");
