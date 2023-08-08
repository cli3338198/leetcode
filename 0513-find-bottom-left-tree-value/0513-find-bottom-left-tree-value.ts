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

function findBottomLeftValue(root: TreeNode | null): number {
    let res = root.val
    let maxDepth = 0
    dfs(root, 0)
    return res
    
    function dfs(root: TreeNode | null, depth: number): void {
        if (!root) return
        if (!root.left) {
            if (depth > maxDepth) {
                maxDepth = depth
                res = root.val
            }
        }
        dfs(root.left, depth + 1)
        dfs(root.right, depth + 1)
    }
};
