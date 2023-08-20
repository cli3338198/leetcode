/**
 * @param {string[]} bank
 * @return {number}
 */
var numberOfBeams = function(bank) {
    let res = 0
    let prev = 0
    for (const row of bank) {
        let cur = 0
        for (const col of row) {
            if (col === "1") {
                cur++
            }
        }
        if (cur > 0) {
            res += prev * cur
            prev = cur
        }
    }
    return res
};