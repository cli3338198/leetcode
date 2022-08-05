/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    const res = []
    const board = Array(n).fill(0).map(() => Array(n).fill('.'))
    helper(0, new Set())
    return res
    
    function helper(row, set) {
        if (row >= n) {
            const temp = JSON.parse(JSON.stringify(board)).map(row => row.join(""))
            return res.push(temp)
        }
        for (let col=0; col < board[row].length; col++) {
            if (isValid(row, col, set)) {
                set.add(`row${row}`)
                set.add(`col${col}`)
                set.add(`posdiag${row+col}`)
                set.add(`negdiag${row-col}`)
                board[row][col] = 'Q'
                helper(row+1, set)
                board[row][col] = '.'
                set.delete(`row${row}`)
                set.delete(`col${col}`)
                set.delete(`posdiag${row+col}`)
                set.delete(`negdiag${row-col}`)
            }
        }
    }
    
    function isValid(row, col, set) {
        if (set.has(`row${row}`)) return false
        if (set.has(`col${col}`)) return false
        if (set.has(`posdiag${row+col}`)) return false
        if (set.has(`negdiag${row-col}`)) return false
        return true
    }
};