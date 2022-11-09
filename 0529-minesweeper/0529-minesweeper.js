/**
 * @param {character[][]} board
 * @param {number[]} click
 * @return {character[][]}
 */
var updateBoard = function(board, [r, c]) {
    const rows = board.length
    const cols = board[0].length
    const dirs = [[1,1], [-1,-1], [1,0], [0,1], [-1,0], [0,-1], [1,-1], [-1,1]]
    if (board[r][c] === "M") {
        board[r][c] = "X"
        return board
    }
    const q = [[r, c]]
    while (q.length) {
        const [r, c] = q.shift()
        if (!(r in board) || !(c in board[r]) || board[r][c] === 'B' || board[r][c] === 'M') continue
        let mines = 0
        for (const [rr, cc] of dirs) {
            const rrr = rr + r
            const ccc = cc + c
            if (rrr in board && ccc in board[rrr] && (board[rrr][ccc] === 'M' || board[rrr][ccc] === 'X')) mines++
        }
        if (mines > 0) {
            board[r][c] = "" + mines
        } else {
            board[r][c] = 'B'
            for (const [rr, cc] of dirs) {
                const rrr = rr + r
                const ccc = cc + c
                q.push([rrr, ccc])
            }
        }
    }
    return board
};