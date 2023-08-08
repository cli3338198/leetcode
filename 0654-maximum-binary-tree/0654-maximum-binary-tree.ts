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

function constructMaximumBinaryTree(nums: number[]): TreeNode | null {
    if (!nums.length) return null
    let max = nums[0]
    let idx = 0
    for (let i=0; i < nums.length; i++) {
        if (nums[i] > max) {
            max = nums[i]
            idx = i
        }
    }
    const root = new TreeNode(max)
    root.left = constructMaximumBinaryTree(nums.slice(0, idx))
    root.right = constructMaximumBinaryTree(nums.slice(idx+1))
    return root
};