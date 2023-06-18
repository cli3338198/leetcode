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
 * @param {number} target
 * @return {TreeNode}
 */
var removeLeafNodes = function(root, target) {
    if (!root) return root
    const left = removeLeafNodes(root.left, target)
    const right = removeLeafNodes(root.right, target)
    if (!left && !right && root.val === target) return null
    root.left = left
    root.right = right
    return root
};