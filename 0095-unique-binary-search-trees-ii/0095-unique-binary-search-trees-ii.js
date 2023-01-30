/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
    const dp = {}
    return helper(1, n)
    
    function helper(lo, hi) {
        const key = `${lo} ${hi}`
        if (lo > hi) return [null]
        if (key in dp) return dp[key]
        const res = []
        for (let root=lo; root <= hi; root++) {
            for (const left of helper(lo, root-1)) {
                for (const right of helper(root+1, hi)) {
                    const tree = new TreeNode(root)
                    tree.left = left
                    tree.right = right
                    res.push(tree)
                }
            }
        }
        return dp[key] = res
    }
};