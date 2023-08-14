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
var largestValues = function(root) {
    const res = []
    dfs(root, 0)
    return res
    
    function dfs(root, row) {
        if (!root) return
        if (row in res) {
            res[row] = Math.max(res[row], root.val)
        } else {
            res[row] = root.val
        }
        dfs(root.left, row+1)
        dfs(root.right, row+1)
    }
};