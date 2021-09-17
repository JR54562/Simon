const bottYellow = document.querySelector(".bottomYellow");
const topGreen = document.querySelector(".topGreen");
const topRed = document.querySelector(".topRed");
const bottBlue = document.querySelector(".bottomBlue");
const resetGame = document.querySelector(".reset >startGame");

const arrShown = [topGreen, topRed, bottYellow, bottBlue];
// console.log(arrShown[2])
// console.log(bottYellow)

let panels = document.querySelectorAll(".panel");

function flashBG() {
    console.log(panels);
    for (let i = 0; i < panels.length; i++) {
        let originalColor = getComputedStyle(panels[i]).backgroundColor;
    //    console.log(originalColor[i])
        panels[i].style.backgroundColor = 'white';
    };
};

setTimeout(flashBG, 1000)
