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
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function(root, val) {
    const node = new TreeNode(val)
    if (!root) return node
    if (!root.left && root.val > val) {
        root.left = node
    } else if (!root.right && root.val < val) {
        root.right = node
    }
    if (root.val > val) {
        insertIntoBST(root.left, val)
    } else if (root.val < val) {
        insertIntoBST(root.right, val)
    }
    return root
};