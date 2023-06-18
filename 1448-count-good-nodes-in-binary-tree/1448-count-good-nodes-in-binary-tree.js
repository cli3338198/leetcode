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
var goodNodes = function(root) {
    return dfs(root, root.val)
    
    function dfs(root, max) {
        if (!root) return 0
        max = Math.max(max, root.val)
        const left = dfs(root.left, max)
        const right = dfs(root.right, max)
        return (root.val >= max ? 1 : 0) + left + right
    }
};

goodNodes = function(root) {
    return dfs(root, root.val)
    
    function dfs(root, max) {
        if (!root) return 0
        max = Math.max(root.val, max)
        return (root.val >= max ? 1 : 0) + dfs(root.left, max) + dfs(root.right, max)
    }
}