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

function isValidBST(root: TreeNode | null): boolean {
    return dfs(root, -Infinity, Infinity)
    
    function dfs(root: TreeNode | null, lo: number, hi: number): boolean {
        if (!root) return true
        if (root.val <= lo || root.val >= hi) return false
        return dfs(root.left, lo, root.val) && dfs(root.right, root.val, hi)
    }
};