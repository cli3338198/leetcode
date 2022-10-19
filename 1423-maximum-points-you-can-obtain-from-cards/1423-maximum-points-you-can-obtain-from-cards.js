/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function(cardPoints, k) {
    const n = cardPoints.length
    const windowSize = n - k
    const sum = cardPoints.reduce((acc, val) => acc + val, 0)
    if (k === 0) return 0
    if (k === n) return sum
    let res = 0
    let curSum = 0
    for (let r=0, l=0; r < n; r++) {
        curSum += cardPoints[r]
        if (r - l + 1 === windowSize) {
            res = Math.max(res, sum - curSum)
            curSum -= cardPoints[l]
            l++
        }
    }
    return res
};