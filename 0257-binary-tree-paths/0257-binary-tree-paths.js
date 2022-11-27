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
    if (!root) return []
    if (!root.left && !root.right) return ['' + root.val]
    const left = binaryTreePaths(root.left).map(r => root.val + "->" + r)
    const right = binaryTreePaths(root.right).map(r => root.val + '->' + r)
    return [...left, ...right]
};