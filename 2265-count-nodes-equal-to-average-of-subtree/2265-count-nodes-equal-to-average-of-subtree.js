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
 * @return {number}
 */
var averageOfSubtree = function(root) {
    return dfs(root)[0]
    
    function dfs(root) {
        if (!root) return [0, 0, 0]
        const [cnt1, sum1, n1] = dfs(root.left)
        const [cnt2, sum2, n2] = dfs(root.right)
        let newCnt = cnt1 + cnt2
        const sum = sum1 + sum2 + root.val
        const n = n1 + n2 + 1
        const avg = Math.floor(sum / n)
        if (avg === root.val) newCnt++
        return [newCnt, sum, n]
    }
};