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

function isSymmetric(root: TreeNode | null): boolean {
    if (!root) return true
    const stack: [TreeNode | null, TreeNode | null][] = [[root, root]]
    while (stack.length) {
        const [left, right] = stack.pop()
        if (!left && !right) continue
        if (!left || !right || left.val !== right.val) return false
        stack.push([left.left, right.right])
        stack.push([left.right, right.left])
    }
    return true
};