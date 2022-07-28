/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    const map = {
        2: 'abc', 3: 'def', 4: 'ghi', 5: 'jkl', 6: 'mno', 7: 'pqrs', 8: 'tuv', 9: 'wxyz'
    }
    const res = []
    if (!digits.length) return res
    helper(0, '')
    return res
    
    function helper(idx, list) {
        if (idx >= digits.length) {
            res.push(list)
            return
        }
        for (let char of map[digits[idx]]) {
            helper(idx+1, list + char)
        }
    }
};