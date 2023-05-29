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
 * @return {string}
 */
var tree2str = function(root) {
    return dfs(root, "")
    
    function dfs(root) {
        if (!root) return ""
        let str = "" + root.val
        if (root.left) {
            str += "("
            str += dfs(root.left)
            str += ")"
        }
        if (root.right) {
            if (!root.left) str += "()"
            str += "("
            str += dfs(root.right)
            str += ")"
        }
        return str
    }
};