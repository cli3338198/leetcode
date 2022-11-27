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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    const res = []
    helper(root, "" + root.val)
    return res
    
    function helper(root, cur) {
        if (!root.left && !root.right) {
            return res.push(cur)
        }
        if (root.left) helper(root.left, cur + "->" + root.left.val)
        if (root.right) helper(root.right, cur + "->" + root.right.val)
    }
};