/**
 * @param {number[][]} dungeon
 * @return {number}
 */
var calculateMinimumHP = function(dungeon) {
    const rows = dungeon.length
    const cols = dungeon[0].length
    const dp = Array(rows).fill(0).map(() => Array(cols).fill(Infinity))
    dp[rows-1][cols-1] = Math.abs(dungeon[rows-1][cols-1]) + 1
    for (let r=rows-1; r >= 0; r--) {
        for (let c=cols-1; c >= 0; c--) {
            if (r === rows-1 && c === cols-1) {
                dp[r][c] = Math.min(0, dungeon[r][c])
            } else if (r === rows-1) {
                dp[r][c] = Math.min(0, dungeon[r][c] + dp[r][c+1])
            } else if (c === cols-1) {
                dp[r][c] = Math.min(0, dungeon[r][c] + dp[r+1][c])
            } else {
                dp[r][c] = Math.min(0, dungeon[r][c] + Math.max(dp[r+1][c], dp[r][c+1]))
            }
        }
    }
    return Math.abs(dp[0][0]) + 1
};