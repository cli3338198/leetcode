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

function pruneTree(root: TreeNode | null): TreeNode | null {
    if (root.left) {
        root.left = pruneTree(root.left)
    } 
    if (root.right) {
        root.right = pruneTree(root.right)
    }
    if (!root.left && !root.right && root.val !== 1) {
        return null
    }
    return root
};