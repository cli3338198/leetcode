/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function(s1, s2) {
    return helper(s1, s2).concat(helper(s2, s1))
    
    function helper(s1, s2) {
        s1 = s1.split(" ")
        const map = {}
        for (const word of s1) {
            map[word] = map[word] + 1 || 1
        }
        const set = new Set(s2.split(" "))
        return Object.entries(map).reduce((acc, [word, cnt]) => cnt === 1 && !set.has(word) ? [...acc, word] : acc, [])
    }
};