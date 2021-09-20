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

resetGame.addEventListener("click", function () {
  round.innerText = "Round " + level;
    resetGame.innerText = "Restart?";
    z = 0;
    rndChange()
});

// Game start
alert("Ready to follow Simon?");
// have Simon start building array to be played
function addCompColor() {
  let x = Math.floor(Math.random() * 4);
    compArray.push(x);
    // console.log(`add comp ${compArray}`)
} // compArray now holds a new string value between 0-3 and grows

// ~Change rounds~
function rndChange() {
  round.innerText = "Round " + level;
  level++;
  addCompColor();
  flash(); // call function to show sequence compiled  to player
} // ~This adds new color added to compArray~
//rndChange();
// console.log(colors[1]);

// for each index in compArray, flash the same index in 'sequence'
// - change backgroundColor to "white" for 1 sec timer (add class)
// change back to default value (remove class)

flash();
function flash() {
  for (let i = 0; i < compArray.length; i++) {
    // console.log(compArray[i]);
    //      sequence[i].classList.add("flash");;
    setTimeout(function () {
      sequence[compArray[i]].style.backgroundColor = "white";
      //   console.log("adding flash")
    }, 1000 * (i + 1));
    setTimeout(function () {
      // console.log("removing flash")
      sequence[compArray[i]].style.backgroundColor = colors[compArray[i]];
    }, 1100 * (i + 1));
  }
}

plyrTurn();

function plyrTurn() {
    // adding event listeners for "panel" click
    for (let i = 0; i < sequence.length; i++) {
        sequence[i].addEventListener("click", panelClick);
        // console.log(`for loop ${sequence[i]}`);
    }
}
    function panelClick(e) {
        // console.log("panel click works")
        // console.log(e) //pointer event captured
        // console.log(e.target.attributes.name.value);
        let y = e.target.attributes.name.value;
        // console.log(y);
        userArray.push(parseInt(y));
        // console.log(y);
        // console.log(userArray);
        // console.log(compArray);
        if (userArray.length === compArray.length) {
            checker();
       }        
    }
function checker() {
    for (i = 0; i < compArray.length; i++) {    
        if (userArray[i] != compArray[i]) {
            z = 1;
            alert("You have failed this round. Try again?");
            userArray = []
            compArray = []
            level = 1;
            resetGame.innerText = "Restart?"
            }
    }
    console.log(z)
    if (z === 0) {
        userArray = []
        rndChange();
        // console.log("I ran the round changer")
    }
}


