/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
    const set = new Set()
    const rows = board.length
    const cols = board[0].length
    for (let r=0; r < rows; r++) {
        for (let c=0; c < cols; c++) {
            set.add(`row${r} ${board[r][c]}`)
            set.add(`col${c} ${board[r][c]}`)
            set.add(`box${Math.floor(r/3)*3 + Math.floor(c/3)} ${board[r][c]}`)
        }
    }
    helper()
    return board
    
    function helper() {
        for (let r=0; r < rows; r++) {
            for (let c=0; c < cols; c++) {
                if (board[r][c] === '.') {
                    for (let i=1; i <= 9; i++) {
                        if (isValid(r, c, i)) {
                            board[r][c] = `${i}`
                            set.add(`row${r} ${i}`)
                            set.add(`col${c} ${i}`)
                            set.add(`box${Math.floor(r/3)*3 + Math.floor(c/3)} ${i}`)
                            if (helper()) return true
                            set.delete(`row${r} ${i}`)
                            set.delete(`col${c} ${i}`)
                            set.delete(`box${Math.floor(r/3)*3 + Math.floor(c/3)} ${i}`)
                            board[r][c] = '.'
                        }
                    }
                    return false
                }
            }
        }
        return true
    }
    
    function isValid(r, c, i) {
        if (set.has(`row${r} ${i}`)) return false
        if (set.has(`col${c} ${i}`)) return false
        if (set.has(`box${Math.floor(r/3)*3 + Math.floor(c/3)} ${i}`)) return false
        return true
    }
};