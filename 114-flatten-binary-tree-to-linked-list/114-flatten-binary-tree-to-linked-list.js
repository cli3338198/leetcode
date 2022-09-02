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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    if (!root) return null
    const left = flatten(root.left)
    const right = flatten(root.right)
    root.left = null
    root.right = left
    let temp = root
    while (temp.right) {
        temp = temp.right
    }
    temp.right = right
    return root
};