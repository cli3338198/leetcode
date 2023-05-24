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