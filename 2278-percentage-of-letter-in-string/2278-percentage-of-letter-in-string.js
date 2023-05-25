/**
 * @param {string} s
 * @param {character} letter
 * @return {number}
 */
var percentageLetter = function(s, letter) {
    const total = s.length
    let percent = 0
    for (const c of s) {
        if (c === letter) {
            percent++
        }
    }
    return Math.floor((percent / total) * 100)
};