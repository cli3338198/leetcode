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

function pathSum(root: TreeNode | null, targetSum: number): number {
    if (!root) return 0
    return dfs(root, targetSum) + pathSum(root.left, targetSum) + pathSum(root.right, targetSum)
};

function dfs(root: TreeNode | null, targetSum: number): number {
    if (!root) return 0
    const cur = root.val === targetSum ? 1 : 0
    return cur + dfs(root.left, targetSum - root.val) + dfs(root.right, targetSum - root.val)
}