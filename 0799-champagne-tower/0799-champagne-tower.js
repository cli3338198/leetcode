/**
 * @param {number} poured
 * @param {number} query_row
 * @param {number} query_glass
 * @return {number}
 */
var champagneTower = function(poured, query_row, query_glass) {
    const dp = Array(101).fill(0).map(() => Array(101).fill(0))
    dp[0][0] = poured
    for (let r=0; r < query_row; r++) {
        for (let c=0; c <= query_glass; c++) {
            const remaining = Math.max(dp[r][c] - 1, 0)
            dp[r+1][c] += remaining / 2
            dp[r+1][c+1] += remaining / 2
        }
    }
    return Math.min(dp[query_row][query_glass], 1)
};

champagneTower = function(poured, query_row, query_glass) {
    const dp = {}
    return Math.min(1, dfs(query_row, query_glass))
    
    function dfs(r, c) {
        const key = `${r} ${c}`
        if (key in dp) return dp[key]
        if (c < 0 || c > r) return 0
        if (r === 0 && c === 0) return poured
        return dp[key] = Math.max(dfs(r-1, c-1) - 1, 0)/2 + Math.max(dfs(r-1, c) - 1, 0)/2
    }
}