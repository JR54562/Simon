const bottYellow = document.querySelector(".bottomYellow")
const topGreen = document.querySelector(".topGreen")
const topRed = document.querySelector(".topRed")
const bottBlue = document.querySelector(".bottomBlue")
const resetGame = document.querySelector(".reset >startGame")

const arrShown = [
    topGreen,
    topRed,
    bottYellow,
    bottBlue,
]
// console.log(arrShown[2])
// console.log(bottYellow)

const flash = panel => {
    return new Promise((resolve, reject) => {
        piece.className = piece.className.replace(
            'active',
            ''
        );
        resolve();
    }, 1000);
}
