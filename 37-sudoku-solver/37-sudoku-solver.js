/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
    const rows = board.length
    const cols = board[0].length
    const set = new Set()
    for (let r=0; r < rows; r++) {
        for (let c=0; c < cols; c++) {
            if (board[r][c] !== '.') {
                set.add(`row${r}val${board[r][c]}`)
                set.add(`col${c}val${board[r][c]}`)
                set.add(`box${Math.floor(r/3)*3+Math.floor(c/3)}val${board[r][c]}`)
            }
        }
    }
    helper()
    return  board
    
    function helper() {
        for (let r=0; r < rows; r++) {
            for (let c=0; c < cols; c++) {
                if (board[r][c] === '.') {
                    for (let i=1; i <= 9; i++) {
                        if (isValid(r, c, i)) {
                            board[r][c] = `${i}`
                            set.add(`row${r}val${board[r][c]}`)
                            set.add(`col${c}val${board[r][c]}`)
                            set.add(`box${Math.floor(r/3)*3+Math.floor(c/3)}val${board[r][c]}`)
                            if (helper()) return true
                            set.delete(`row${r}val${board[r][c]}`)
                            set.delete(`col${c}val${board[r][c]}`)
                            set.delete(`box${Math.floor(r/3)*3+Math.floor(c/3)}val${board[r][c]}`)
                            board[r][c] = '.'
                        }
                    }
                    return false
                }
            }
        }
        return true
    }
        
    function isValid(r, c, val) {
        return !set.has(`row${r}val${val}`) && !set.has(`col${c}val${val}`) && 
            !set.has(`box${Math.floor(r/3)*3+Math.floor(c/3)}val${val}`)
    }
};