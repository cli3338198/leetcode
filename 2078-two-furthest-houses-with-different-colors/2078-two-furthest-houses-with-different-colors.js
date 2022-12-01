/**
 * @param {number[]} colors
 * @return {number}
 */
var maxDistance = function(colors) {
    const n = colors.length
    let res = 0
    for (let i=0; i < colors.length; i++) {
        if (colors[i] !== colors[n-1]) {
            res = Math.max(res, n-1-i)
        }
        if (colors[i] !== colors[0]) {
            res = Math.max(res, i)
        }
    }
    return res
};