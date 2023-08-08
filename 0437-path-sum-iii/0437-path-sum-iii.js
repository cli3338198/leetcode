let res = 0
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
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function(root, targetSum) {
    if (!root) return 0
    return dfs(root, targetSum) + pathSum(root.left, targetSum) + pathSum(root.right, targetSum)
    
    function dfs(root, targetSum) {
        if (!root) return 0
        const cur = root.val === targetSum ? 1 : 0
        return cur + dfs(root.left, targetSum - root.val) + dfs(root.right, targetSum - root.val)
    }
};