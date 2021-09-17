const bottYellow = document.querySelector("bottomYellow")
const topGreen = document.querySelector("topGreen")
const topRed = document.querySelector("topRed")
const bottBlue = document.querySelector("bottomBlue")
const resetGame = document.querySelector(".reset >startGame")

const arrShown = [
    topGreen,
    topRed,
    bottYellow,
    bottBlue,
]

const flash = piece => {
    return new Promise((resolve, reject) => {
        piece.className = piece.className.replace(
            'active',
            ''
        );
        resolve();
    }, 1000);
}

const flash = async () => {
    for (const  
}