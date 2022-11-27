/**
 * @param {character[][]} board
 * @return {number}
 */
var numRookCaptures = function(board) {
    const rows = board.length
    const cols = board[0].length
    let r0
    let c0
    for (let r=0; r < rows; r++) {
        for (let c=0; c < cols; c++) {
            if (board[r][c] === 'R') {
                r0 = r
                c0 = c
                break
            }
        }
    }
    let res = 0
    for (const [r, c] of [[0, 1], [1, 0], [-1, 0], [0, -1]]) {
        for (let rr = r0 + r, cc = c0 + c; rr < rows && rr >= 0 && cc < cols && cc >= 0; rr += r, cc += c) {
            if (board[rr][cc] === 'p') {
                res++
                break
            }
            if (board[rr][cc] === 'B') {
                break
            }
        }
    }
    return res
};