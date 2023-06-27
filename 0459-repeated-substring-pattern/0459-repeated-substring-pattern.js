/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    for (let i=0; i < s.length; i++) {
        for (let j=i+1; j < s.length; j++) {
            const substring = s.substring(i, j)
            if (isSubstring(substring, s)) return true
        }
    }
    return false
    
    function isSubstring(substring, string) {
        const aLen = substring.length
        const bLen = string.length
        const multiplier = bLen / aLen
        return substring.repeat(multiplier) === string
    }
};

repeatedSubstringPattern = function(s) {
    if (s.length === 0) return false
    const ss = (s + s).substring(1, s.length * 2 - 1)
    return ss.indexOf(s) !== -1    
}

repeatedSubstringPattern = function(s) {
    return (s + s).substring(1, s.length * 2 - 1).includes(s)
}