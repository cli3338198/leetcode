/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    const morse = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
    const set = new Set()
    for (const word of words) {
        let transformed = ""
        for (const c of word) {
            transformed += morse[c.charCodeAt(0)-97]
        }
        set.add(transformed)
    }
    return set.size
};