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

function maxAncestorDiff(root: TreeNode | null): number {
    return dfs(root, root.val, root.val, [0])
    
    function dfs(root: TreeNode, min: number, max: number, res: number[]) {
        if (!root) return
        min = Math.min(min, root.val)
        max = Math.max(max, root.val)
        res[0] = Math.max(res[0], Math.abs(root.val-min), Math.abs(root.val-max))
        dfs(root.left, min, max, res)
        dfs(root.right, min, max, res)
        return res[0]
    }
};