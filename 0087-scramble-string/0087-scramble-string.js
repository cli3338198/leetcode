/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var isScramble = function(s1, s2) {
    const dp = {}
    return helper(s1, s2)

    function helper(s1, s2) {
        const key = `${s1} ${s2}`
        if (key in dp) {
            return dp[key]
        }
        if (s1.length === 1) {
            return s1 === s2
        }
        if (s1 === s2) {
            return true
        }
        const n = s1.length
        for (let i=1; i < n; i++) {
            if ((helper(s1.substring(0, i), s2.substring(0, i)) && helper(s1.substring(i), s2.substring(i))) || 
                (helper(s1.substring(0, i), s2.substring(n-i)) && helper(s1.substring(i), s2.substring(0, n-i)))) {
                return true
            }
        }
        return dp[key] = false
    }
};