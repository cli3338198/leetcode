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

function findTilt(root: TreeNode | null): number {
    return dfs(root)[1]
    
    function dfs(root: TreeNode | null): [number, number] {
        if (!root) return [0, 0]
        const [lsum, ltilt] = dfs(root.left)
        const [rsum, rtilt] = dfs(root.right)
        return [root.val + lsum + rsum, Math.abs(lsum - rsum) + ltilt + rtilt]
    }
};