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
var maxAncestorDiff = function(root) {
    let res = 0
    helper(root, root.val, root.val)
    return res
    
    function helper(root, min, max) {
        if (!root) return
        res = Math.max(res, Math.abs(max-root.val), Math.abs(min-root.val))
        max = Math.max(max, root.val)
        min = Math.min(min, root.val)
        helper(root.left, min, max)
        helper(root.right, min, max)
    }
};