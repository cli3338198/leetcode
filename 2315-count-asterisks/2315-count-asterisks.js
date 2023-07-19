/**
 * @param {string} s
 * @return {number}
 */
var countAsterisks = function(s) {
    let isBetween = false
    let count = 0
    for (const c of s) {
        if (c === "|") {
            isBetween = !isBetween
        }
        if (c === "*" && !isBetween) {
            count++
        }
    }
    return count
};