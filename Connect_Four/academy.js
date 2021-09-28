// Make your changes to store and update game state in this file

// Take the row and column number between 0 and 2 
// (inclusive) and update the game state.

let board = [[null,null,null,null,null,null,null],
             [null,null,null,null,null,null,null],
             [null,null,null,null,null,null,null],
             [null,null,null,null,null,null,null],
             [null,null,null,null,null,null,null],
             [null,null,null,null,null,null,null]]

let playerTurn = 'purple'

function checkingNextEmptyRow (column){
    let emptyRow = ''
    if(board[0][column] !== null){
        return 'full'
    }
    for (row = 0; row <= 5; row++){
        if (board[row][column] === null){
            emptyRow = row
        } 
    }
    return emptyRow
}

function takeTurn(row, column) {
    if (checkingNextEmptyRow(column) === 'full'){
        console.log('Column is full - try a different one')
        return board
    }

    if (playerTurn === 'purple'){   
        board[checkingNextEmptyRow(column)][column] = "purple"
        playerTurn = 'orange'
        console.log(board)
    }
    else {
        board[checkingNextEmptyRow(column)][column] = "orange"
        playerTurn = 'purple'
        console.log(board)
    }
    
    console.log("takeTurn was called with row: "+row+", column:"+column);
    return board
}

// Return either "purple", "orange" or "nobody" if the game is over.
// Otherwise return null to continue playing.
function checkWinnerRow(){
    let winner = ''
    for (let i=0; i < 3; i++){
        if (board[i][0] == 'purple' && board[i][1] == 'purple' && board[i][2] == 'purple'){
            winner = 'purple' 
        }
        if (board[i][0] == 'orange' && board[i][1] == 'orange' && board[i][2] == 'orange'){
            winner = 'orange'
        }
    }
    return winner
}

function checkWinnerColumn(){
    let winner = ''
    for (let i=0; i < 3; i++){
        if (board[0][i] == 'purple' && board[1][i] == 'purple' && board[2][i] == 'purple'){
            winner = 'purple'
        }
        if (board[0][i] == 'orange' && board[1][i] == 'orange' && board[2][i] == 'orange'){
            winner = 'orange'
        }
    }
    return winner
}

function checkWinnerDiagonal(){
    if (board[0][0] == 'purple' && board[1][1] == 'purple' && board[2][2] == 'purple'){
        return 'purple'
    }
    if (board[0][0] == 'orange' && board[1][1] == 'orange' && board[2][2] == 'orange'){
        return 'orange'
    }
    if (board[0][2] == 'purple' && board[1][1] == 'purple' && board[2][0] == 'purple'){
        return 'purple'
    }
    if (board[0][2] == 'orange' && board[1][1] == 'orange' && board[2][0] == 'orange'){
        return 'orange'
    } 
    else {
        return ''
    }
}

function checkWinner() {
    let winner = [checkWinnerRow(), checkWinnerColumn(), checkWinnerDiagonal()]
    console.log("checkWinner was called");
    console.log(winner)

    if (winner.includes('purple')){
        return 'purple'
    }
    if (winner.includes('orange')){
        return 'orange'
    }
    //checking all entries are not null
    if (board.every(entry => entry.includes(null) === false) === true){
        return 'nobody'
    }
}

// Set the game state back to its original state to play another game.
function resetGame() {
    board = [[null,null,null,null,null,null,null],
             [null,null,null,null,null,null,null],
             [null,null,null,null,null,null,null],
             [null,null,null,null,null,null,null],
             [null,null,null,null,null,null,null],
             [null,null,null,null,null,null,null]]
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
