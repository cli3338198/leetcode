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
var longestZigZag = function(root) {
    let res = 0
    dfs(root, 0, 0)
    return res
    
    function dfs(root, dir, cur) {
        if (!root) return
        res = Math.max(res, cur)
        dfs(root.left, -1, 1 + (dir === 1 ? cur : 0))
        dfs(root.right, 1, 1 + (dir === -1 ? cur : 0))
    }
};