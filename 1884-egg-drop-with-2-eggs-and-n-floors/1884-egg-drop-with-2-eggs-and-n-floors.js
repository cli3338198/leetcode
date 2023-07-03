/**
 * @param {number} n
 * @return {number}
 */
var twoEggDrop = function(n) {
    const dp = {}
    return helper(n, 2)
    
    function helper(n, eggs) {
        const key = `${n} ${eggs}`
        if (key in dp) return dp[key]
        if (n < 2) return n
        if (eggs === 1) return n
        let res = Infinity
        for (let i=1; i <= n; i++) {
            res = Math.min(res, 1 + Math.max(helper(i-1, eggs-1), helper(n-i, eggs)))
        }
        return dp[key] = res
    }
};

// twoEggDrop = function(n) {
//     return helper(n, 2)
    
//     function helper(n, eggs) {
//         const dp = Array(n+1).fill(0).map(() => Array(eggs+1).fill(Infinity))
//         for (const lvl in dp) {
//             dp[lvl][0] = lvl
//             dp[lvl][1] = lvl
//         }
//         dp[0].fill(0)
//         dp[1].fill(1)
//         for (let lvl=2; lvl <= n; lvl++) {
//             for (let curEggs=1; curEggs <= eggs; curEggs++) {
//                 dp[lvl][curEggs] = 1 + Math.max(dp[lvl-1][curEggs-1], dp[n-lvl][eggs])
//             }
//         }
//         return Math.min(...dp[n])
//     }
// }