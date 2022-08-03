/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    if (!height.length) return 0
    let l = 0
    let r = height.length-1
    let leftMax = height[l]
    let rightMax = height[r]
    let res = 0
    while (l < r) {
        if (leftMax < rightMax) {
            l++
            leftMax = Math.max(leftMax, height[l])
            res += leftMax - height[l]
        } else {
            r--
            rightMax = Math.max(rightMax, height[r])
            res += rightMax - height[r]
        }
    }
    return res
};