/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    const keyboard = ["qwertyuiop", "asdfghjkl", "zxcvbnm"]
    return words.reduce((acc, word) => {
        if (sameRow(word)) {
            acc.push(word)
        }
        return acc
    }, [])
    
    function sameRow(word) {
        const keyboardRow = keyboard.filter(row => row.includes(word[0].toLowerCase()))[0]
        for (const c of word) {
            if (!keyboardRow.includes(c.toLowerCase())) return false
        }
        return true
    }
};