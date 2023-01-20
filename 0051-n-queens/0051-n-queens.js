/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    const res = []
    const board = Array(n).fill(0).map(() => Array(n).fill("."))
    helper(0, new Set())
    return res.map(board => board.map(row => row.join("")))
    
    function helper(r, set) {
        if (r === n) {
            return res.push(clone(board))
        }
        for (let c=0; c < n; c++) {
            if (isValid(r, c, set)) {
                board[r][c] = 'Q'
                set.add(`r${r}`)
                set.add(`c${c}`)
                set.add(`+${r+c}`)
                set.add(`-${r-c}`)
                helper(r+1, set)
                set.delete(`r${r}`)
                set.delete(`c${c}`)
                set.delete(`+${r+c}`)
                set.delete(`-${r-c}`)
                board[r][c] = '.'
            }
        }
    }
    
    function isValid(r, c, set) {
        if (set.has(`r${r}`)) return false
        if (set.has(`c${c}`)) return false
        if (set.has(`+${r+c}`)) return false
        if (set.has(`-${r-c}`)) return false
        return true
    }
    
    function clone(board) {
        if (!Array.isArray(board)) return board
        return board.map(clone)
    }
};