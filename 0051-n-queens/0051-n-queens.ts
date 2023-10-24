function solveNQueens(n: number): string[][] {
    const dp: string[][][] = [[[".".repeat(n)]]]
    for (let row=1; row <= n; row++) {
        dp[row] = []
        for (let col=0; col < n; col++) {
            for (const prevSolution of dp[row-1]) {
                if (isValid(prevSolution, row, col)) {
                    const newRow = ".".repeat(col) + "Q" + ".".repeat(n-col-1)
                    dp[row].push([...prevSolution, newRow])
                }
            }
        }
    }
    return dp.at(-1).map(x => x.slice(1))
    
    function isValid(prevSolution: string[], row: number, col: number) {
        for (let r=0; r < prevSolution.length; r++) {
            for (let c=0; c < n; c++) {
                if (prevSolution[r][c] === "Q") {
                    if (c === col || r + c === row + col || r - c === row - col) {
                        return false
                    }
                }
            }
        }
        return true
    }
};