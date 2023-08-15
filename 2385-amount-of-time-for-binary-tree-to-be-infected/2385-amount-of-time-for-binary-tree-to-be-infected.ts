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

function amountOfTime(root: TreeNode | null, start: number): number {
    let res = 0
    dfs(root)
    return res
    
    function dfs(root: TreeNode | null): number {
        if (!root) return 0
        const left = dfs(root.left)
        const right = dfs(root.right)
        if (root.val === start) {
            res = Math.max(left, right)
            return -1
        } else if (left >= 0 && right >= 0) {
            return 1 + Math.max(left, right)
        } else {
            res = Math.max(res, Math.abs(left - right))
            return Math.min(left, right) - 1
        }
    }
};

