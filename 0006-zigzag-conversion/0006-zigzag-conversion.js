/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows === 1) return s
    const res = Array(numRows).fill("")
    let idx = 0
    let flip = true
    for (const c of s) {
        res[idx] += c
        if (idx === 0 || idx === numRows-1) {
            flip = !flip
        }
        if (flip) {
            idx--
        } else {
            idx++
        }
    }
    return res.join("")
};