// Make your changes to store and update game state in this file

// Take the row and column number between 0 and 2 
// (inclusive) and update the game state.

let board = [[null,null,null],[null,null,null],[null,null,null]]

let playerTurn = 'noughts'

function takeTurn(row, column) {
    if (playerTurn === 'noughts'){
        board[row][column] = "nought"
        playerTurn = 'crosses'
        console.log(board)
    }
    else{
        board[row][column] = "cross"
        playerTurn = 'noughts'
        console.log(board)
    }
    
    console.log("takeTurn was called with row: "+row+", column:"+column);
    return board
}

// Return either "noughts", "crosses" or "nobody" if the game is over.
// Otherwise return null to continue playing.
function checkWinner() {
    function checkWinnerRow(){
        for (let i=0; i <= 2; i+=1){
            if (board[i][0] == 'nought' && board[i][1] == 'nought' && board[i][2] == 'nought'){
               return 'noughts' 
            }
            if (board[i][0] == 'cross' && board[i][1] == 'cross' && board[i][2] == 'cross'){
                return 'crosses'
            }
        }
    }        
    function checkWinnerColumn(){
        for (let i=0; i<=2; i+=1){
            if (board[0][i] == 'nought' && board[1][i] == 'nought' && board[2][i] == 'nought'){
                return 'noughts'
            }
            if (board[0][i] == 'cross' && board[1][i] == 'cross' && board[2][i] == 'cross'){
                return 'crosses'
            }
        }
    }
    function checkWinnerDiagonal(){
            if (board[0][0] == 'nought' && board[1][1] == 'nought' && board[2][2] == 'nought'){
                return 'noughts'
            }
            if (board[0][0] == 'cross' && board[1][1] == 'cross' && board[2][2] == 'cross'){
                return 'crosses'
            }
            if (board[0][2] == 'nought' && board[1][1] == 'nought' && board[2][0] == 'nought'){
                return 'noughts'
            }
            if (board[0][2] == 'cross' && board[1][1] == 'cross' && board[2][0] == 'cross'){
                return 'crosses'
            } 
    }
    let winner = [checkWinnerRow(), checkWinnerColumn(), checkWinnerDiagonal()]
    //winner.reduce
    console.log("checkWinner was called");
    return (winner)
}

// Set the game state back to its original state to play another game.
function resetGame() {
    board = [[null,null,null],[null,null,null],[null,null,null]]
    console.log("resetGame was called")
    return board
}

// Return the current board state with either a "nought" or a "cross" in
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
