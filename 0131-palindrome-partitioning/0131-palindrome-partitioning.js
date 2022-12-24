/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    const res = []
    helper(s, [])
    return res
    
    function helper(s, list) {
        if (!s.length) {
            return res.push(list.slice())
        }
        for (let i=1; i <= s.length; i++) {
            const left = s.substring(0, i)
            const right = s.substring(i)
            if (isPalindrome(left)) {
                list.push(left)
                helper(right, list)
                list.pop()
            }
        }
    }
};

function isPalindrome(s) {
    let a = 0
    let b = s.length-1
    while (a < b) {
        if (s[a] !== s[b]) return false
        a++
        b--
    }
    return true
}