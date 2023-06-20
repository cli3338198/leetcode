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
var distributeCoins = function(root) {
    let res = 0
    dfs(root)
    return res
    
    function dfs(root) {
        if (!root) return 0
        const left = dfs(root.left)
        const right = dfs(root.right)
        res += Math.abs(left) + Math.abs(right)
        return root.val + left + right - 1
    }
};