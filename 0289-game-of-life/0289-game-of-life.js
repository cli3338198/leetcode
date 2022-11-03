/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
    const m = board.length
    const n = board[0].length
    const map = {}
    for (let r=0; r < m; r++) {
        for (let c=0; c < n; c++) {
            map[[r, c]] = helper(r, c)
        }
    }
    for (const key in map) {
        const [r, c] = key.split(",")
        board[Number(r)][Number(c)] = map[key]
    }
    return board
    
    function helper(r, c) {
        let live = !!board[r][c]
        let count = 0
        for (const [rr, cc] of [[1,0], [0, 1], [-1, 0], [0, -1], [1, 1], [-1, -1], [1, -1], [-1, 1]]) {
            const rrr = r + rr
            const ccc = c + cc
            if (rrr in board && ccc in board[rrr] && board[rrr][ccc] === 1) {
                count++
            }
        }
        if (live) {
            if (count < 2 || count > 3) {
                return 0
            } else {
                return 1
            }
        } else {
            if (count === 3) {
                return 1
            } else {
                return 0
            }
        }
    }
};