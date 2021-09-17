const bottYellow = document.querySelector(".bottomYellow");
const topGreen = document.querySelector(".topGreen");
const topRed = document.querySelector(".topRed");
const bottBlue = document.querySelector(".bottomBlue");
const resetGame = document.querySelector(".reset >startGame");

const arrShown = [topGreen, topRed, bottYellow, bottBlue];
// console.log(arrShown[2])
// console.log(bottYellow)

function flashBG() {
    var panels = document.getElementsByClassName('panel');
    for(i = 0; i < panels.length; i++) {
      panels[i].style.backgroundColor = 'white';
    }
}
//  flashBG()