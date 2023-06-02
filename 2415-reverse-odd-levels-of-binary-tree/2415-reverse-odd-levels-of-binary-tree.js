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
var reverseOddLevels = function(root) {
    dfs(root.left, root.right, 1)
    return root
    
    function dfs(r1, r2, lvl) {
        if (!r1 && !r2) return
        if (lvl % 2) [r1.val, r2.val] = [r2.val, r1.val]
        dfs(r1.left, r2.right, lvl+1)
        dfs(r1.right, r2.left, lvl+1)
    }
};