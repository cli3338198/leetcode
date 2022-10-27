/**
 * @param {number[][]} moves
 * @return {string}
 */
var tictactoe = function(moves) {
    const n = 3
    const rows = Array(n).fill(0)
    const cols = Array(n).fill(0)
    let diag1 = 0
    let diag2 = 0
    let player = 1
    for (const [r, c] of moves) {
        rows[r] += player
        cols[c] += player
        if (r === c) diag1 += player
        if (r + c === n-1) diag2 += player
        if (Math.abs(rows[r]) === n || Math.abs(cols[c]) === n || Math.abs(diag1) === n || Math.abs(diag2) === n) {
            if (player === 1) {
                return 'A'
            } else {
                return 'B'
            }
        }
        player *= -1
    }
    if (moves.length < 9) {
        return 'Pending'
    } else {
        return 'Draw'
    }
};