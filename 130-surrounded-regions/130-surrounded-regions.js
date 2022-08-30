/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    if (!board) return board
    const rows = board.length
    const cols = board[0].length
    for (let r=0; r < rows; r++) {
        for (let c=0; c < cols; c++) {
            if (board[r][c] === 'O' && (!r || !c || r === rows-1 || c === cols-1)) {
                helper(r, c)
            }
        }
    }
    for (let r=0; r < rows; r++) {
        for (let c=0; c < cols; c++) {
            if (board[r][c] === 'O') {
                board[r][c] = 'X'
            } else if (board[r][c] === null) {
                board[r][c] = 'O'
            }
        }
    }
    return board
    
    function helper(r, c) {
        if (!(r in board) || !(c in board[r]) || board[r][c] !== 'O') return
        board[r][c] = null
        helper(r+1, c)
        helper(r-1, c)
        helper(r, c+1)
        helper(r, c-1)
    }
};