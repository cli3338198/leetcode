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

function sumOfLeftLeaves(root: TreeNode | null): number {
    const stack: TreeNode[] = []
    let sum = 0
    while (stack.length || root) {
        if (root) {
            stack.push(root)
            root = root.left
            if (root && !root.left && !root.right) sum += root.val
        } else {
            root = stack.pop()
            root = root.right
        }
    }
    return sum
};