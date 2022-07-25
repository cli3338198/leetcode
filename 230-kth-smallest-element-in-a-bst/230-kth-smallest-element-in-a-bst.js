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
 * @return {number}
 */
var kthSmallest = function(root, k) {
    let res
    helper(root)
    return res
    
    function helper(root) {
        if (!root) return
        helper(root.left)
        k--
        if (!k) {
            res = root.val
            return
        }
        helper(root.right)
    }
};