/**
 * @param {string[]} words
 * @return {string[]}
 */
var removeAnagrams = function(words) {
    words = words.map(word => [word, (JSON.stringify(
        word.split("").sort().reduce((acc, char) => ({...acc, [char]: acc[char] + 1 || 1}), {})
    ))])
    while (true) {
        let flag = false
        for (let i=1; i < words.length; i++) {
            if (words[i][1] === words[i-1][1]) {
                words.splice(i, 1)
                flag = true
                break
            }
        }
        if (flag === false) {
            break
        }
    }
    return words.map(([a]) => a)
};