/**
 * @param {number[]} startPos
 * @param {number[]} homePos
 * @param {number[]} rowCosts
 * @param {number[]} colCosts
 * @return {number}
 */
var minCost = function([r, c], [hr, hc], rowCosts, colCosts) {
    let res = 0
    if (r < hr) {
        while (r < hr) {
            res += rowCosts[++r]
        }
    }
    if (r > hr) {
        while (r > hr) {
            res += rowCosts[--r]
        }
    }
    if (c < hc) {
        while (c < hc) {
            res += colCosts[++c]
        }
    }
    if (c > hc) {
        while (c > hc) {
            res += colCosts[--c]
        }
    }
    return res
};