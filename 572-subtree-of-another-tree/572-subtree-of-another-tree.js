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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
    if (!subRoot) return true
    if (!root) return false
    if (isSame(root, subRoot)) return true
    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot)
    
    function isSame(a, b) {
        if (!a && !b) return true
        if (!a || !b || a.val !== b.val) return false
        return isSame(a.left, b.left) && isSame(a.right, b.right)
    }
};