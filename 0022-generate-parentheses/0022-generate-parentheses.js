/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const res = []
    if (n < 1) return res
    helper(0, 0, '')
    return res
    
    function helper(open, close, str) {
        if (open === n && close === n) {
            return res.push(str)
        }
        if (open < n) {
            helper(open + 1, close, str + "(")
        }
        if (close < open) {
            helper(open, close + 1, str + ")")
        }
    }
};