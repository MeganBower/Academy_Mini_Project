let board = [[null, null, null, null, null, null, null],
[null, null, null, null, null, null, null],
[null, null, null, null, null, null, null],
[null, null, null, null, null, null, null],
[null, null, null, null, null, null, null],
[null, null, null, null, null, null, null]]

let playerName = 'player1'
let playerTurn = 'purple'

const playerTurnName = () => playerName
const playerTurnColour = () => playerTurn

function checkingNextEmptyRow(columnIndex, gameBoard) {
    let emptyRow = ''
    if (gameBoard[0][columnIndex] !== null) {
        return 'full'
    }
    for (row = 0; row <= 5; row++) {
        if (gameBoard[row][columnIndex] === null) {
            emptyRow = row
        }
    }
    return emptyRow
}

function takeTurn(row, columnIndex) {
    if (checkingNextEmptyRow(columnIndex, board) === 'full') {
        console.log('Column is full - try a different one')
        return board
    }
    let rowIndex = checkingNextEmptyRow(columnIndex, board)
    if (playerTurn === 'purple') {
        board[rowIndex][columnIndex] = "purple"
        if (checkWinner !== ''){
            playerTurn = 'orange'
            playerName = 'player2'
        }
        console.log(board)
    }
    else {
        board[rowIndex][columnIndex] = "orange"
        if (checkWinner !== ''){
            playerTurn = 'purple'
            playerName = 'player1'
        }
        console.log(board)
    }

    console.log("takeTurn was called with row: " + row + ", column:" + columnIndex);
    return board
}


// Return either "purple", "orange" or "nobody" if the game is over.
// Otherwise return null to continue playing.
function checkWinnerRow(gameBoard) {
    let winner = ''
    for (let rowIndex = 5; rowIndex >= 0; rowIndex--) {
        for (let cell = 0; cell < 4; cell++) {
            if (gameBoard[rowIndex][cell] == 'purple' && gameBoard[rowIndex][cell + 1] == 'purple' && gameBoard[rowIndex][cell + 2] == 'purple' && gameBoard[rowIndex][cell + 3] == 'purple') {
                winner = 'purple'
            }
            if (gameBoard[rowIndex][cell] == 'orange' && gameBoard[rowIndex][cell + 1] == 'orange' && gameBoard[rowIndex][cell + 2] == 'orange' && gameBoard[rowIndex][cell + 3] == 'orange') {
                winner = 'orange'
            }
        }
    }
    return winner
}

function checkWinnerColumn(gameBoard) {
    let winner = ''
    for (let columnIndex = 0; columnIndex < 7; columnIndex++) {
        for (let row = 5; row > 2; row--) {
            if (gameBoard[row][columnIndex] == 'purple' && gameBoard[row - 1][columnIndex] == 'purple' && gameBoard[row - 2][columnIndex] == 'purple' && gameBoard[row - 3][columnIndex] == 'purple') {
                winner = 'purple'
            }
            if (gameBoard[row][columnIndex] == 'orange' && gameBoard[row - 1][columnIndex] == 'orange' && gameBoard[row - 2][columnIndex] == 'orange' && gameBoard[row - 3][columnIndex] == 'orange') {
                winner = 'orange'
            }
        }
    }
    return winner
}

function checkWinnerDiagonalUp(gameBoard) {
    let winner = ''
    for (let rowIndex = 5; rowIndex > 2; rowIndex--) {
        for (let columnIndex = 0; columnIndex < 4; columnIndex++) {
            if (gameBoard[rowIndex][columnIndex] == 'purple' && gameBoard[rowIndex - 1][columnIndex + 1] == 'purple' && gameBoard[rowIndex - 2][columnIndex + 2] == 'purple' && gameBoard[rowIndex - 3][columnIndex + 3] == 'purple') {
                winner = 'purple'
            }
            if (gameBoard[rowIndex][columnIndex] == 'orange' && gameBoard[rowIndex - 1][columnIndex + 1] == 'orange' && gameBoard[rowIndex - 2][columnIndex + 2] == 'orange' && gameBoard[rowIndex - 3][columnIndex + 3] == 'orange') {
                winner = 'orange'
            }
        }
    }
    return winner
}

function checkWinnerDiagonalDown(gameBoard) {
    let winner = ''
    for (let rowIndex = 0; rowIndex < 3; rowIndex++) {
        for (let columnIndex = 0; columnIndex < 4; columnIndex++) {
            if (gameBoard[rowIndex][columnIndex] == 'purple' && gameBoard[rowIndex + 1][columnIndex + 1] == 'purple' && gameBoard[rowIndex + 2][columnIndex + 2] == 'purple' && gameBoard[rowIndex + 3][columnIndex + 3] == 'purple') {
                winner = 'purple'
            }
            if (gameBoard[rowIndex][columnIndex] == 'orange' && gameBoard[rowIndex + 1][columnIndex + 1] == 'orange' && gameBoard[rowIndex + 2][columnIndex + 2] == 'orange' && gameBoard[rowIndex + 3][columnIndex + 3] == 'orange') {
                winner = 'orange'
            }
        }
    }
    return winner
}

let player1Wins = 0
let player2Wins = 0

function checkWinner() {
    let winner = [checkWinnerRow(board), checkWinnerColumn(board), checkWinnerDiagonalUp(board), checkWinnerDiagonalDown(board)]
    console.log("checkWinner was called");
    console.log(winner)

    if (winner.includes('purple')) {
        player1Wins++
        return 'purple'
    }
    if (winner.includes('orange')) {
        player2Wins++
        return 'orange'
    }
    //checking all entries are not null
    if (board.every(entry => entry.includes(null) === false) === true) {
        return 'nobody'
    }
}

function storePlayer1Wins(){
    return player1Wins
}

function storePlayer2Wins(){
    return player2Wins
}

// Set the game state back to its original state to play another game.
function resetGame() {
    board = [[null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null]]
    console.log("resetGame was called")
    return board
}

// Return the current board state
function getBoard() {
    console.log("getBoard was called");
    return board;
}

if (typeof exports === 'object') {
    console.log("Running in Node")
    // Node. Does not work with strict CommonJS, but only CommonJS-like 
    // environments that support module.exports, like Node.
    module.exports = {
        checkingNextEmptyRow,
        takeTurn,
        playerTurnName,
        playerTurnColour,
        checkWinner,
        checkWinnerRow,
        checkWinnerColumn,
        checkWinnerDiagonalUp,
        checkWinnerDiagonalDown,
        resetGame,
        getBoard,
        storePlayer1Wins,
        storePlayer2Wins,
    }
} else {
    console.log("Running in Browser")
}
