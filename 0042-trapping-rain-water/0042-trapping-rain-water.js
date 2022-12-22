/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    const n = height.length
    let max = 0
    const left = []
    for (let i=0; i < n; i++) {
        max = Math.max(max, height[i])
        left[i] = max
    }
    max = 0
    const right = []
    for (let i=n-1; i >= 0; i--) {
        max = Math.max(max, height[i])
        right[i] = max
    }
    let res = 0
    for (let i=0; i < n; i++) {
        res += Math.min(left[i], right[i]) - height[i]
    }
    return res
};