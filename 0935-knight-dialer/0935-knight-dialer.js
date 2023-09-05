/**
 * @param {number} n
 * @return {number}
 */
var knightDialer = function(n) {
    const mod = Math.pow(10, 9) + 7
    const moves = [[4, 6], [6, 8], [7, 9], [4, 8], [0, 3, 9], [], [0, 1, 7], [2, 6], [1, 3], [2, 4]]
    const dp = {}
    let res = 0
    for (let i=0; i < 10; i++) {
        res += helper(i, n)
    }
    return res % mod
    
    function helper(i, n) {
        const key = `${i} ${n}`
        if (n === 1) return 1
        if (key in dp) return dp[key]
        let res = 0
        for (const next of moves[i]) {
            res += helper(next, n-1)
        }
        return dp[key] = res % mod
    }
};