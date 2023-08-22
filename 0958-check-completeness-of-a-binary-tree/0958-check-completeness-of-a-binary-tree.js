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
 * @return {boolean}
 */
var isCompleteTree = function(root) {
    const q = [root]
    let nullFound = false
    while (q.length) {
        const node = q.shift()
        if (!node) {
            nullFound = true
        } else {
            if (nullFound) return false
            q.push(node.left)
            q.push(node.right)
        }
    }
    return true
};