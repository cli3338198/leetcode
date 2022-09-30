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
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    return helper(root, [])
    
    function helper(root, list) {
        if (!root) return list
        helper(root.left, list)
        helper(root.right, list)
        list.push(root.val)
        return list
    }
};