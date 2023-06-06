/**
 * @param {string[]} words
 * @return {number}
 */
var similarPairs = function(words) {
    let res = 0
    for (let i=0; i < words.length; i++) {
        for (let j=i+1; j < words.length; j++) {
            if (helper(words[i]) === helper(words[j])) res++
        }
    }
    return res
    
    function helper(word) {
        const set = new Set()
        for (const char of word) {
            set.add(char)
        }
        return Array.from(set).sort().join("")
    }
};