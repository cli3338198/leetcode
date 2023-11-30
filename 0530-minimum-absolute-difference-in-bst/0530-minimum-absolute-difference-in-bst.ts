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

function getMinimumDifference(root: TreeNode | null): number {
    let res = Infinity, prev = null
    dfs(root)
    return res
    
    function dfs(root: TreeNode | null) {
        if (!root) return
        dfs(root.left)
        if (prev !== null) res = Math.min(res, root.val-prev)
        prev = root.val
        dfs(root.right)
    }
};