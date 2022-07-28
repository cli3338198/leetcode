/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const res = []    
    helper(0, 0, '')
    return res

    function helper(open, close, list) {
        if (open > n || close > n) return
        if (open === close && close === n) {
            res.push(list)
            return
        }
        helper(open+1, close, list+"(")
        if (close < open) {
            helper(open, close+1, list+")")
        }
    }
};