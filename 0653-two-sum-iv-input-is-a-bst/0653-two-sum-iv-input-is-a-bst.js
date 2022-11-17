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
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k, set = new Set()) {
    if (!root) return false
    if (set.has(k-root.val)) return true
    set.add(root.val)
    return findTarget(root.left, k, set) || findTarget(root.right, k, set)
};