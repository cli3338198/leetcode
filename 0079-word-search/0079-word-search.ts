function exist(board: string[][], word: string): boolean {
    for (let r=0; r < board.length; r++) {
        for (let c=0; c < board[r].length; c++) {
            if (board[r][c] === word[0] && dfs(r, c, 0)) return true
        }
    }
    return false
    
    function dfs(r: number, c: number, i: number) {
        if (i >= word.length) return true
        if (!(r in board) || !(c in board[r]) || board[r][c] !== word[i]) return false
        const temp = board[r][c]
        board[r][c] = ""
        for (const [rr, cc] of [[1, 0], [0, 1], [-1, 0], [0, -1]]) {
            if (dfs(rr + r, cc + c, i + 1)) return true
        }
        board[r][c] = temp
        return false
    }
};