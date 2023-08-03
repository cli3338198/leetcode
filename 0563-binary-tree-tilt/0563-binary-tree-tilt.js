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
var findTilt = function(root) {
    return dfs(root)[1]
    
    function dfs(root) {
        if (!root) return [0, 0]
        const [lsum, ltilt] = dfs(root.left)
        const [rsum, rtilt] = dfs(root.right)
        return [root.val + lsum + rsum, Math.abs(lsum - rsum) + ltilt + rtilt]
    }
};