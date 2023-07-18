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

function subtreeWithAllDeepest(root: TreeNode | null): TreeNode | null {
    let maxDepth = -1
    let lca = null
    dfs(root, 0)
    return lca
    
    function dfs(root: TreeNode | null, depth: number): number {
        if (!root) return -1
        if (!root.left && !root.right) {
            if (depth > maxDepth) {
                maxDepth = depth
                lca = root
            }
            return depth
        }
        const left = dfs(root.left, depth + 1)
        const right = dfs(root.right, depth + 1)
        if (left === right && left === maxDepth) {
            lca = root
        }
        return Math.max(left, right)
    }
};

