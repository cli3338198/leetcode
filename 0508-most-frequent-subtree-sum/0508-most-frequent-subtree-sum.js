/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var findFrequentTreeSum = function(root) {
    const sumToCnt = {}
    const cntToSum = {}
    let maxCnt = 0
    dfs(root)
    return cntToSum[maxCnt]
    
    function dfs(root) {
        if (!root) return 0
        const left = dfs(root.left)
        const right = dfs(root.right)
        const curSum = root.val + left + right
        sumToCnt[curSum] = sumToCnt[curSum] + 1 || 1
        const curCnt = sumToCnt[curSum]
        cntToSum[curCnt] = cntToSum[curCnt] || []
        cntToSum[curCnt].push(curSum)
        maxCnt = Math.max(maxCnt, curCnt)
        return curSum
    }
};