/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function(r1, r2) {
    if (!r1) return r2
    if (!r2) return r1
    const root = new TreeNode()
    root.val = r1.val + r2.val
    root.left = mergeTrees(r1.left, r2.left)
    root.right = mergeTrees(r1.right, r2.right)
    return root
};