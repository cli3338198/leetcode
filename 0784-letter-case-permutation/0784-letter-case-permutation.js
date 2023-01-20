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

letterCasePermutation = function(s) {
    const q = [s]
    for (let i=0; i < s.length; i++) {
        if (isChar(s[i])) {
            const len = q.length
            for (let j=0; j < len; j++) {
                const cur = q.shift()
                q.push(cur.substring(0, i) + cur[i].toLowerCase() + cur.substring(i+1))
                q.push(cur.substring(0, i) + cur[i].toUpperCase() + cur.substring(i+1))
            }
        }
    }
    return q
}

function isChar(c) {
    return /[a-zA-Z]/.test(c)
}