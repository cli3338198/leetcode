/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
    if (!subRoot) return true
    if (!root) return false
    if (validate(root, subRoot)) return true
    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot)
};

function validate(root: TreeNode | null, subRoot: TreeNode | null): boolean {
    if (!root && !subRoot) return true
    if (!root || !subRoot || root.val !== subRoot.val) return false
    return validate(root.left, subRoot.left) && validate(root.right, subRoot.right)
};