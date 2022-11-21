/**
 * @param {character[][]} board
 * @return {number}
 */
var countBattleships = function(board) {
    const rows = board.length
    const cols = board[0].length
    let res = 0
    for (let r=0; r < rows; r++) {
        for (let c=0; c < cols; c++) {
            if (board[r][c] === 'X') {
                if ((r === 0 || board[r-1][c] === '.') && (c === 0 || board[r][c-1] === '.')) {
                    res++
                }
            }
        }
    }
    return res
};