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
var lcaDeepestLeaves = function(root) {
    if (!root) return root
    let maxDepth = -1
    let lca = null
    dfs(root, 0)
    return lca
    
    function dfs(root, depth) {
        if (!root) return -1
        if (!root.left && !root.right) {
            if (depth > maxDepth) {
                maxDepth = depth
                lca = root
            }
            return depth
        }
        const left = dfs(root.left, depth + 1)
        const right = dfs(root.right, depth + 1)
        if (left === right && left === maxDepth) {
            lca = root
        }
        return Math.max(left, right)
    }
};

lcaDeepestLeaves = function(root) {
    return dfs(root)[1]
    
    function dfs(root) {
        if (!root) return [-1, null]
        const [lDepth, llca] = dfs(root.left)
        const [rDepth, rlca] = dfs(root.right)
        if (lDepth > rDepth) return [lDepth + 1, llca]
        if (rDepth > lDepth) return [rDepth + 1, rlca]
        return [lDepth + 1, root]
    }
}