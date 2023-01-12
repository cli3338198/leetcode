/**
 * @param {number} maxChoosableInteger
 * @param {number} desiredTotal
 * @return {boolean}
 */
var canIWin = function(max, total) {
    let sum = max * Math.floor((max + 1) / 2)
    if (max >= total) return true
    if (sum < total) return false
    if (sum === total) return max % 2
    const chosen = Array(max+1).fill(false)
    const dp = {}
    return helper(total)
    
    function helper(total) {
        const key = chosen.toString()
        if (key in dp) return dp[key]
        for (let i=1; i <= max; i++) {
            if (!chosen[i]) {
                chosen[i] = true
                if (total - i <= 0 || !helper(total-i)) {
                    chosen[i] = false
                    return dp[key] = true
                }
                chosen[i] = false
            }
        }
        return dp[key] = false
    }
};

canIWin = function(max, total) {
    const sum = max * Math.floor((max + 1) / 2)
    if (max >= total) return true
    if (sum < total) return false
    if (sum === total) return max % 2
    const dp = {}
    return helper(total, 0)
    
    function helper(total, k) {
        if (k in dp) return dp[k]
        for (let i=1; i <= max; i++) {
            if ((k & (1 << i)) == 0) {
                if (total - i <= 0 || !helper(total - i, k | (1 << i))) {
                    return dp[k] = true
                }
            }
        }
        return dp[k] = false
    }
}