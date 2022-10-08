/**
 * @param {number} n
 * @return {number}
 */
var countVowelStrings = function(n) {
    const map = {
        a: 'aeiou',
        e: 'eiou',
        i: 'iou',
        o: 'ou',
        u: 'u'
    }
    const res = []
    helper(0, '')
    return res.length
    
    function helper(idx, str) {
        if (idx === n) {
            return res.push(str)
        }
        if (!str.length) {
            for (const char of 'aeiou') {
                helper(idx + 1, str + char)
            }
        } else {
            for (const nextChar of map[str[str.length-1]]) {
                helper(idx+1, str + nextChar)
            }
        }
    }
};