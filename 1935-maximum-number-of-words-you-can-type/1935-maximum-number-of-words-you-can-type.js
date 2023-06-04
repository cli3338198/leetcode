/**
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */
var canBeTypedWords = function(text, brokenLetters) {
    const set = new Set(brokenLetters.split(""))
    let res = 0
    for (const word of text.split(" ")) {
        let flag = false
        for (const char of word) {
            if (set.has(char)) {
                flag = true
                break
            }
        }
        if (!flag) res++
    }
    return res
};