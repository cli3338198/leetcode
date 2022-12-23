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
    
    function helper(l, r) {
        const key = `${l} ${r}`
        if (key in dp) return dp[key]
        if (l > r) return [null]
        const res = []
        for (let root=l; root <= r; root++) {
            for (const left of helper(l, root-1)) {
                for (const right of helper(root+1, r)) {
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