/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    letters.sort((a, b) => a - b)
    let l = 0
    let r = letters.length-1
    while (l <= r) {
        const m = Math.floor((l+r)/2)
        if (letters[m] > target) {
            r = m - 1
        } else {
            l = m + 1
        }
    }
    return letters[l % letters.length]
};