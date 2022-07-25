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
var maxPathSum = function(root) {
    let max = -Infinity
    helper(root)
    return max
    
    function helper(root) {
        if (!root) return 0
        const left = Math.max(0, helper(root.left))
        const right = Math.max(0, helper(root.right))
        max = Math.max(max, root.val + left + right)
        return root.val + Math.max(left, right)
    }
};