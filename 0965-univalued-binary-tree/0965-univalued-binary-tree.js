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
 * @return {boolean}
 */
var isUnivalTree = function(root) {
    return dfs(root, root.val)
    
    function dfs(root, val) {
        if (!root) return true
        if (root.val !== val) return false
        return dfs(root.left, val) && dfs(root.right, val)
    }
};

isUnivalTree = function(root) {
    if (!root) return true
    if (root.left && root.left.val !== root.val) return false
    if (root.right && root.right.val !== root.val) return false
    return isUnivalTree(root.left) && isUnivalTree(root.right)
}