/**
 * @param {string} blocks
 * @param {number} k
 * @return {number}
 */
var minimumRecolors = function(blocks, k) {
    let l = 0
    let black = 0
    let white = 0
    let res = Infinity
    for (let r=0; r < blocks.length; r++) {
        if (blocks[r] === "W") {
            white++
        } else {
            black++
        }
        if (r - l + 1 === k) {
            res = Math.min(res, white)
            if (blocks[l] === "W") {
                white--
            } else {
                black++
            }
            l++
        }
    }
    return res
};