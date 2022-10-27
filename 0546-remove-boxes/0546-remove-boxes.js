/**
 * @param {number[]} boxes
 * @return {number}
 */
var removeBoxes = function(boxes) {
    const n = boxes.length
    const dp = Array(n).fill(0).map(() => Array(n).fill(0).map(() => Array(n).fill(0)))
    return helper(0, boxes.length-1, 0)
    
    function helper(left, right, streak) {
        if (left > right) {
            return 0
        }
        if (dp[left][right][streak]) {
            return dp[left][right][streak]
        }
        if (left === right) {
            return (streak+1) * (streak+1)
        }
        let max = helper(left+1, right, 0) + (streak+1)*(streak+1)
        for (let i=left+1; i <= right; i++) {
            if (boxes[left] === boxes[i]) {
                max = Math.max(
                    max,
                    helper(left+1, i-1, 0) + helper(i, right, streak+1)
                )
            }
        }
        return dp[left][right][streak] = max
    }
};