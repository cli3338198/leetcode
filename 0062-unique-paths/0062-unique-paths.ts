function uniquePaths(rows: number, cols: number): number {
    const dp: Record<string, number> = {}
    return helper(0, 0)
    
    function helper(r, c): number {
        const key = `${r} ${c}`
        if (r >= rows || c >= cols) return 0
        if (r === rows-1 && c === cols-1) return 1
        if (key in dp) return dp[key]
        return dp[key] = helper(r+1, c) + helper(r, c+1)
    }
};