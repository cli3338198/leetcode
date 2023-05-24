/**
 * @param {string} firstWord
 * @param {string} secondWord
 * @param {string} targetWord
 * @return {boolean}
 */
var isSumEqual = function(firstWord, secondWord, targetWord) {
    return helper(firstWord) + helper(secondWord) === helper(targetWord)
    
    function helper(word) {
        const abc = 'abcdefghijklmnopqrstuvwxyz'
        let res = ''
        for (const c of word) {
            const idx = abc.indexOf(c)
            res += idx
        }
        if (res[0] == 0) return Number(res.substring(1))
        return Number(res)
    }
};

isSumEqual = function(first, second, target) {
    return helper(first) + helper(second) === helper(target)
    
    function helper(word) {
        let res = 0
        for (const c of word) {
            res += c.charCodeAt(0) - 97
            res *= 10
        }
        return res
    }
}