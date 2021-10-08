// This file contains helper code beyond the first week "Intro to JavaScript" course content.
// You should not have to make any changes in this file to get your game working.

// Validate academite functions are available
const functions = ["takeTurn", "getBoard", "checkWinner", "resetGame"];
for (f of functions) {
    const functionObject = window[f];
    if (typeof functionObject !== "function") {
        throw `Looks like expected function '${f}' is missing. Double check the function signatures from academy.js are still present and unaltered.`;
    }
}

// Clear down the elements drawn on the board.
function clearBoard() {
    for (let rowIndex = 0; rowIndex < 6; rowIndex++) {
        for (let columnIndex = 0; columnIndex < 7; columnIndex++) {
            document.getElementById(`row-${rowIndex}-column-${columnIndex}`).innerHTML = ""
        }
    }
}

// Populate the grid with images based on the board state.
function drawBoard(board) {
    clearBoard();
    for (let rowIndex = 0; rowIndex < 6; rowIndex++) {
        for (let columnIndex = 0; columnIndex < 7; columnIndex++) {
            if (!board[rowIndex][columnIndex]) {
                continue;
            }
            document.getElementById(`row-${rowIndex}-column-${columnIndex}`).innerText = board[rowIndex][columnIndex] === "purple" ? "🟣" : "🟠";
        }
    }
}

function isValidRowOrColumn(array) {
    return Array.isArray(array) && array.length === 6 || array.length === 7;
}

function isValidColumn(columnArray) {
    return isValidRowOrColumn(columnArray) && columnArray.every(function (item) { return ["purple", "orange", null].includes(item); });
}

// A grid position was clicked call the game's turn function, redraw and then check for a winner.
function positionClick(rowIndex, columnIndex, event) {
    // const player1Display = document.getElementById("first-player-display")
    // player1Display.style.display = "none"

    const errorColumnFull = checkingNextEmptyRow(columnIndex);
    if (errorColumnFull === 'full') {
        const errorDisplay = document.getElementById("column-full-display");
        errorDisplay.style.display = "block";
        function closeError() {
            document.getElementById("column-full-display").style.display = " none";
        }
        window.setTimeout(closeError, 2000)

    }

    takeTurn(rowIndex, columnIndex);
    const board = getBoard();
    if (!isValidRowOrColumn(board) || !board.every(isValidColumn)) {
        throw "Expecting 'getBoard' to return a 2d array where all values match are null or one of the strings 'nought' or 'cross'. Actually received: " + JSON.stringify(board);
    }
    
    const colour = playerTurnColour()
    const player1Name = document.getElementById("player1-Name").value
    const player2Name = document.getElementById("player2-Name").value
    const player = (colour === 'purple') ? player1Name : player2Name
    
    const playerName = document.getElementById("player-name")
    playerName.innerText = player + ' (' + colour + ')'
    const playerDisplay = document.getElementById("player-turn-display");
    playerDisplay.style.display = "block"

    drawBoard(board);
    const winner = checkWinner();
    if (winner) {
        if (typeof winner !== "string" || !["purple", "orange", "nobody"].includes(winner)) {
            throw "Expecting 'checkWinner' to return null or one of the strings 'noughts', 'crosses' or 'nobody'. Actually received: " + winner;
        }
        document.getElementById("player1-wins").innerText = storePlayer1Wins()
        document.getElementById("player2-wins").innerText = storePlayer2Wins()
        const winnerName = document.getElementById("winner-name");
        const playerTurn = playerTurnName()
        const player1Name = document.getElementById("player1-Name").value
        const player2Name = document.getElementById("player2-Name").value
        const winningPlayer = (playerTurn === 'player1') ? player2Name : player1Name
        winnerName.innerText = `${winningPlayer} (${winner})`; // turnary operator to change player 1/2
        const winnerDisplay = document.getElementById("winner-display");
        winnerDisplay.style.display = "block";
        playerDisplay.style.display = "none"
    }
}

// The reset button was clicked, call the game's reset function then reset the DOM.
function resetClick(event) {
    resetGame();
    // const player = playerTurnName()
    const colour = playerTurnColour()
    const player1Name = document.getElementById("player1-Name").value
    const player2Name = document.getElementById("player2-Name").value
    const player = (colour === 'purple') ? player1Name : player2Name
    const playerName = document.getElementById("player-name")
    playerName.innerText = player + ' (' + colour + ')'
    const playerDisplay = document.getElementById("player-turn-display");
    playerDisplay.style.display = "block"

    const winnerName = document.getElementById("winner-name");
    winnerName.innerText = "";
    const winnerDisplay = document.getElementById("winner-display");
    winnerDisplay.style.display = "None";

    // const player1Display = document.getElementById("first-player-display")
    // player1Display.style.display = "block"
    clearBoard();
}

// Bind the click events for the grid.
for (let rowIndex = 0; rowIndex < 6; rowIndex++) {
    for (let columnIndex = 0; columnIndex < 7; columnIndex++) {
        const gridPosition = document.getElementById(`row-${rowIndex}-column-${columnIndex}`);
        gridPosition.addEventListener("click", positionClick.bind(null, rowIndex, columnIndex));
    }
}

// Bind the click event for the reset button.
const resetButton = document.getElementById("reset-button");
resetButton.addEventListener("click", resetClick);

window.onload = function () {
    const colour = playerTurnColour()
    const player1Name = document.getElementById("player1-Name").value
    const player2Name = document.getElementById("player2-Name").value
    const player = (colour === 'purple') ? player1Name : player2Name
    const playerName = document.getElementById("player-name")
    playerName.innerText = player + ' (' + colour + ')'
    const playerDisplay = document.getElementById("player-turn-display");
    playerDisplay.style.display = "block"
    document.getElementById("player1-wins").innerText = '0'
    document.getElementById("player2-wins").innerText = '0'
}

if (typeof exports === 'object') {
    console.log("Running in Node")
    // Node. Does not work with strict CommonJS, but only CommonJS-like 
    // environments that support module.exports, like Node.
    module.exports = {
        clearBoard,
        drawBoard,
        isValidRowOrColumn,
        isValidColumn,
        positionClick,
        resetClick,
    }
} else {
    console.log("Running in Browser")
}
