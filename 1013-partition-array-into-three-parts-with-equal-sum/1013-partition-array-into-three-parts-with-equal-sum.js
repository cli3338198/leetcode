/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canThreePartsEqualSum = function(arr) {
    const total = arr.reduce((acc, val) => acc + val, 0)
    if (total % 3 !== 0) return false
    const target = total / 3
    let curSum = 0
    let count = 0
    for (const n of arr) {
        if (count === 2) return true
        curSum += n
        if (curSum === target) {
            curSum = 0
            count++
        }
    }
    return false
};