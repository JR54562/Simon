const yellow = document.querySelector("#yellow");
const green = document.querySelector("#green");
const red = document.querySelector("#red");
const blue = document.querySelector("#blue");
const resetGame = document.querySelector("#startGame");
const panels = document.querySelectorAll(".panel");
const round = document.querySelector("#round");
const sequence = [green, red, yellow, blue];

const colors = ["green", "red", "yellow", "blue"];
let userArray = [];
let compArray = [0,2,3,1];
let level = 1;

resetGame.addEventListener("click", function(){
    round.innerText = level;
});

// Game start
function startGame() {
//  resetGame.classList.add("hidden");
}
// ~Change rounds~
function rndChange() {
    addCompColor();
} // ~This adds new color added to compArray~

console.log(colors[1]);

// have Simon start building array to be played
function addCompColor() {
    let x = Math.floor(Math.random() * 4);
    compArray.push(x);
}  // compArray now holds a new value


// for each index in compArray, flash the same index in 'sequence'
  // - change backgroundColor to "white" for 1 sec timer (add class)
  // change back to default value (remove class)


function flash() {
    for (let i = 0; i < compArray.length; i++){
        console.log(compArray[i]);
        let x = i;
        console.log(x)
        sequence[x].classList.add("flash");;
        setTimeout(function () {            
            console.log(compArray[i]);
            console.log(sequence[x]);
            sequence[x].classList.remove("flash");
               }, 1000);
    };
    flash(sequence[x]); 
};

//flash()


// start the round and show the first sequence
function gameTurn() {
  // game will show a sequence (value of compArray in colorsArray) For loop
  // func Flash() will be called for each panel in compArray
}

function plyrTurn() {
  // adding event listeners for "panel" click
    for (var i = 0; i < panels.length; i++){
panels[i].addEventListener("click", panelClick);
    }
    function panelClick(i) {
        userArray.push[i]
    }      
};
  
plyrTurn()
console.log(userArray)


      // Add click functionality to every 'panel'
//   const panelClick = (event) => {
    // Store value of index of panel selected in userArray
    // compare userArray to compArray; if true - rndChange()
    // Else alert to failure
  

// let counter = 1;
