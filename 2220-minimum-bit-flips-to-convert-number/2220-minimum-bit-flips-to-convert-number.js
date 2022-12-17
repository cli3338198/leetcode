/**
 * @param {number} start
 * @param {number} goal
 * @return {number}
 */
var minBitFlips = function(start, goal) {
    let cur = start ^ goal
    let res = 0
    while (cur) {
        res += cur & 1
        cur >>= 1
    }
    return res
};