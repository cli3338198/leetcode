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
var countNodes = function(root) {
    if (!root) return 0
    let leftHeight = 1
    let cur = root.left
    while (cur) {
        leftHeight++
        cur = cur.left
    }
    let rightHeight = 1
    cur = root.right
    while (cur) {
        rightHeight++
        cur = cur.right
    }
    if (leftHeight === rightHeight) {
        return Math.pow(2, leftHeight) - 1
    }
    return 1 + countNodes(root.left) + countNodes(root.right) 
};
