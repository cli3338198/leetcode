function numRookCaptures(board: string[][]): number {
    let rr: number | null
    let rc: number | null
    let res = 0
    for (let r=0; r < board.length; r++) {
        for (let c=0; c < board[r].length; c++) {
            if (board[r][c] === "R") {
                rr = r
                rc = c
                break
            }
        }
    }
    for (const [r, c] of [[0, 1], [1, 0], [0, -1], [-1, 0]]) {
        for (let i=0; i < board.length; i++) {
            const rrr = (r * i) + rr
            const ccc = (c * i) + rc
            if (!(rrr in board) || !(ccc in board) || board[rrr][ccc] === "B") {
                break
            }
            if (board[rrr][ccc] === "p") {
                res++
                break
            }
        }
    }
    return res
};