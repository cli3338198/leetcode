/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const res = []
    helper(0, 0, '')
    return res
    
    function helper(left, right, cur) {
        if (left === right && left === n) {
            return res.push(cur)
        }
        if (left < n) helper(left + 1, right, cur + "(")
        if (right < left) helper(left, right + 1, cur + ")")
    }
};