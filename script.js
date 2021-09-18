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

// ~Change rounds~
function rndChange() {
    addCompColor();
}
// ~End Change rounds~
console.log(compArray)


function flash() {
    // for each index in compArray, show the value of colorArray
    // - store the current background style into var
    // - change backgroundColor to "white" for 1 sec timer
    // change back to variable store value
}

  // start the round and show the first sequence
function gameTurn() {
    // game will show a sequence (value of compArray in colorsArray) For loop
    // func Flash() will be called for each panel in compArray    
}

function plyrTurn() {
    // adding event listeners for "panel" click
    panels.forEach((panel) => {
        panel.addEventListener("click", panelClick);
    });
    // Add click functionality to every 'panel'
const panelClick = (event) => {    
    // Store value of index of panel selected in plyrArray
    // compare plyrArray to compArray; if true - rndChange()
    // Else alert to failure
};
    
}

  


// let counter = 1




