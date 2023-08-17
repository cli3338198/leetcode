/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
var findAndReplacePattern = function(words, pattern) {
    return words.filter(word => isMatch(word))
    
    function isMatch(word) {
        const map = {}
        const set = new Set()
        let res = ""
        for (let i=0; i < word.length; i++) {
            if (word[i] in map && map[word[i]] !== pattern[i]) {
                return false
            } else if (!(word[i] in map) && set.has(pattern[i])) {
                return false
            } else {
                map[word[i]] = pattern[i]
                set.add(pattern[i])
            }
        }
        return true
    }
};