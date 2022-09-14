/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    const res = []
    const dp = {}
    helper(s, [])
    return res
    
    function helper(str, list) {
        if (!str.length) {
            return res.push(list.slice())
        }
        
        for (let i=1; i <= str.length; i++) {
            const left = str.substring(0, i)
            const right = str.substring(i)
            if (isPal(left)) {
                list.push(left)
                helper(right, list)
                list.pop()
            }
        }
    }
    
    function isPal(str) {
        if (str in dp) return dp[str]
        let a = 0
        let b = str.length-1
        while (a < b) {
            if (str[a] !== str[b]) return false
            a++
            b--
        }
        return dp[str] = true
    }
};