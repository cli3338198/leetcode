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
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
    const res = []
    helper(root, targetSum, [])
    return res
    
    function helper(root, targetSum, list) {
        if (!root) return
        if (root.val === targetSum && !root.left && !root.right) {
            return res.push([...list, root.val])
        }
        helper(root.left, targetSum - root.val, [...list, root.val])
        helper(root.right, targetSum - root.val, [...list, root.val])
    }
};