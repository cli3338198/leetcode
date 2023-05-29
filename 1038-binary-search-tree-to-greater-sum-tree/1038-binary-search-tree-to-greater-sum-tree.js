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
 * @return {TreeNode}
 */
var bstToGst = function(root) {
    let sum = 0
    return dfs(root)
    
    function dfs(root) {
        if (root.right) dfs(root.right)
        root.val += sum
        sum = root.val
        if (root.left) dfs(root.left)
        return root
    }
};