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
var diameterOfBinaryTree = function(root) {
    let res = 0
    dfs(root)
    return res
    
    function dfs(root) {
        if (!root) return -1
        const left = dfs(root.left)
        const right = dfs(root.right)
        res = Math.max(res, 2 + left + right)
        return 1 + Math.max(left, right)
    }
};