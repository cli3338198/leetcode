/**
 * @param {string[]} patterns
 * @param {string} word
 * @return {number}
 */
var numOfStrings = function(patterns, word) {
    return patterns.reduce((acc, substr) => acc + (word.includes(substr) ? 1 : 0), 0)
};

numOfStrings = function(patterns, word) {
    const set = new Set([...allSubstrings(word)])
    return patterns.reduce((acc, word) => acc + (set.has(word) ? 1 : 0), 0)
    
    function allSubstrings(word) {
        const res = []
        for (let i=0; i < word.length; i++) {
            for (let j=i+1; j <= word.length; j++) {
                res.push(word.substring(i, j))
            }
        }
        return res
    }
}