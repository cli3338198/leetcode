/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const res = []
    helper(0, 0, '')
    return res
    
    function helper(l, r, cur) {
        if (l === r && l === n) {
            return res.push(cur)
        }
        if (l < n) helper(l+1, r, cur + "(")
        if (r < l) helper(l, r+1, cur + ")")
    }
};
