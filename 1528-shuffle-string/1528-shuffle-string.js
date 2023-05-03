/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
    const res = Array(s.length)
    for (let i=0; i < indices.length; i++) {
        res[indices[i]] = s[i]
    }
    return res.join("")
};