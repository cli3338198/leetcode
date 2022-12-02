/**
 * @param {number[]} boxes
 * @return {number}
 */
var removeBoxes = function(boxes) {
    const n = boxes.length
    const dp = Array(n).fill(0).map(() => Array(n).fill(0).map(() => Array(n).fill(0)))
    return dfs(0, n-1, 0)
    
    function dfs(left, right, streak) {
        if (left > right) return 0
        if (dp[left][right][streak]) return dp[left][right][streak]
        let res = (streak + 1) * (streak + 1) + dfs(left+1, right, 0)
        for (let i=left + 1; i <= right; i++) {
            if (boxes[left] === boxes[i]) {
                res = Math.max(res, dfs(left+1, i-1, 0) + dfs(i, right, streak+1))
            }
        }
        return dp[left][right][streak] = res
    }
};