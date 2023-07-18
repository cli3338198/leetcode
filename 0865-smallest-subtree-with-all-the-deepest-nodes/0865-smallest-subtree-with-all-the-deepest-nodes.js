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
var subtreeWithAllDeepest = function(root) {
    return dfs(root)[1]
    
    function dfs(root) {
        if (!root) return [-1, null]
        const [lDepth, llca] = dfs(root.left)
        const [rDepth, rlca] = dfs(root.right)
        if (lDepth > rDepth) return [lDepth + 1, llca]
        if (rDepth > lDepth) return [rDepth + 1, rlca]
        return [lDepth + 1, root]
    }
};