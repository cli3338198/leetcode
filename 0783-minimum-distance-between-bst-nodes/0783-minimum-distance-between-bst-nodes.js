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
var minDiffInBST = function(root) {
    let last = null
    let min = Infinity
    dfs(root)
    return min
    
    function dfs(root) {
        if (!root) return
        dfs(root.left)
        if (last === null) {
            last = root.val
        } else {
            min = Math.min(min, root.val-last)
            last = root.val
        }
        dfs(root.right)
    }
};