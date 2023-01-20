/**
 * @param {string} s
 * @return {string[]}
 */
var letterCasePermutation = function(s) {
    const res = []
    helper(0, s.split(""))
    return res
    
    function helper(i, s) {
        if (i === s.length) {
            return res.push(s.join(""))
        }
        helper(i+1, s)
        if (isChar(s[i])) {
            s[i] = s[i] === s[i].toLowerCase() ? s[i].toUpperCase() : s[i].toLowerCase()
            helper(i+1, s)
        }
    }
};

function isChar(c) {
    return /[a-zA-Z]/.test(c)
}