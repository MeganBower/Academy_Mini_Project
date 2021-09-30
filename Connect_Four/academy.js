// Make your changes to store and update game state in this file

// Take the row and column number between 0 and 2 
// (inclusive) and update the game state.

let board = [[null, null, null, null, null, null, null],
[null, null, null, null, null, null, null],
[null, null, null, null, null, null, null],
[null, null, null, null, null, null, null],
[null, null, null, null, null, null, null],
[null, null, null, null, null, null, null]]

let playerTurn = 'purple'

function checkingNextEmptyRow(column) {
    let emptyRow = ''
    if (board[0][column] !== null) {
        return 'full'
    }
    for (row = 0; row <= 5; row++) {
        if (board[row][column] === null) {
            emptyRow = row
        }
    }
    return emptyRow
}

function takeTurn(row, column) {
    if (checkingNextEmptyRow(column) === 'full') {
        console.log('Column is full - try a different one')
        return board
    }
    let rowIndex = checkingNextEmptyRow(column)
    if (playerTurn === 'purple') {
        board[rowIndex][column] = "purple"
        playerTurn = 'orange'
        console.log(board)
    }
    else {
        board[rowIndex][column] = "orange"
        playerTurn = 'purple'
        console.log(board)
    }

    console.log("takeTurn was called with row: " + row + ", column:" + column);
    return board
}

// Return either "purple", "orange" or "nobody" if the game is over.
// Otherwise return null to continue playing.
function checkWinnerRow() {
    let winner = ''
    for (let rowIndex = 5; rowIndex >= 0; rowIndex--) {
        for (let cell = 0; cell < 4; cell++) {
            if (board[rowIndex][cell] == 'purple' && board[rowIndex][cell + 1] == 'purple' && board[rowIndex][cell + 2] == 'purple' && board[rowIndex][cell + 3] == 'purple') {
                winner = 'purple'
            }
            if (board[rowIndex][cell] == 'orange' && board[rowIndex][cell + 1] == 'orange' && board[rowIndex][cell + 2] == 'orange' && board[rowIndex][cell + 3] == 'orange') {
                winner = 'orange'
            }
        }
    }
    return winner
}

function checkWinnerColumn() {
    let winner = ''
    for (let columnIndex = 0; columnIndex < 7; columnIndex++) {
        for (let row = 5; row > 2; row--) {
            if (board[row][columnIndex] == 'purple' && board[row - 1][columnIndex] == 'purple' && board[row - 2][columnIndex] == 'purple' && board[row - 3][columnIndex] == 'purple') {
                winner = 'purple'
            }
            if (board[row][columnIndex] == 'orange' && board[row - 1][columnIndex] == 'orange' && board[row - 2][columnIndex] == 'orange' && board[row - 3][columnIndex] == 'orange') {
                winner = 'orange'
            }
        }
    }
    return winner
}

function checkWinnerDiagonalUp() {
    let winner = ''
    for (let rowIndex = 5; rowIndex > 2; rowIndex--) {
        for (let columnIndex = 0; columnIndex < 4; columnIndex++) {
            if (board[rowIndex][columnIndex] == 'purple' && board[rowIndex - 1][columnIndex + 1] == 'purple' && board[rowIndex - 2][columnIndex + 2] == 'purple' && board[rowIndex - 3][columnIndex + 3] == 'purple') {
                winner = 'purple'
            }
            if (board[rowIndex][columnIndex] == 'orange' && board[rowIndex - 1][columnIndex + 1] == 'orange' && board[rowIndex - 2][columnIndex + 2] == 'orange' && board[rowIndex - 3][columnIndex + 3] == 'orange') {
                winner = 'orange'
            }
        }
    }
    return winner
}

function checkWinnerDiagonalDown() {
    let winner = ''
    for (let rowIndex = 0; rowIndex < 3; rowIndex++) {
        for (let columnIndex = 0; columnIndex < 4; columnIndex++) {
            if (board[rowIndex][columnIndex] == 'purple' && board[rowIndex + 1][columnIndex + 1] == 'purple' && board[rowIndex + 2][columnIndex + 2] == 'purple' && board[rowIndex + 3][columnIndex + 3] == 'purple') {
                winner = 'purple'
            }
            if (board[rowIndex][columnIndex] == 'orange' && board[rowIndex + 1][columnIndex + 1] == 'orange' && board[rowIndex + 2][columnIndex + 2] == 'orange' && board[rowIndex + 3][columnIndex + 3] == 'orange') {
                winner = 'orange'
            }
        }
    }
    return winner
}

function checkWinner() {
    let winner = [checkWinnerRow(), checkWinnerColumn(), checkWinnerDiagonalUp(), checkWinnerDiagonalDown()]
    console.log("checkWinner was called");
    console.log(winner)

    if (winner.includes('purple')) {
        return 'purple'
    }
    if (winner.includes('orange')) {
        return 'orange'
    }
    //checking all entries are not null
    if (board.every(entry => entry.includes(null) === false) === true) {
        return 'nobody'
    }
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

// Return the current board state with either a "purple" or a "orange" in
// each position. Put a null in a position that hasn't been played yet.
function getBoard() {
    console.log("getBoard was called");
    return board;
}

if (typeof exports === 'object') {
    console.log("Running in Node")
    // Node. Does not work with strict CommonJS, but only CommonJS-like 
    // environments that support module.exports, like Node.
    module.exports = {
        takeTurn,
        checkWinner,
        resetGame,
        getBoard,
    }
} else {
    console.log("Running in Browser")
}
