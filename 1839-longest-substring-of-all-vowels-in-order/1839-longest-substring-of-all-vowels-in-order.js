/**
 * @param {string} word
 * @return {number}
 */
var longestBeautifulSubstring = function(word) {
    let res = 0
    for (let i=0; i < word.length; i++) {
        if (i > 0 && word[i] === 'a' && word[i-1] === 'a') continue
        if (word[i] === 'a') {
            let j = i, last = 'a', cnt = 1
            while (j < word.length && word[j] >= last) {
                if (last !== word[j]) cnt++
                last = word[j++]
            }
            if (cnt === 5) res = Math.max(res, j - i)
        }
    }
    return res
};