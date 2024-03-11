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

function findTarget(root: TreeNode | null, k: number): boolean {
    const seen = new Set<number>()
    return dfs(root)
    
    function dfs(root: TreeNode | null): boolean {
        if (!root) {
            return false
        }
        if (seen.has(k - root.val)) {
            return true
        }
        seen.add(root.val)
        return dfs(root.left) || dfs(root.right)
    }
};