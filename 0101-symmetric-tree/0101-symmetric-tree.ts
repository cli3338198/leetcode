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
    const stack: [TreeNode, TreeNode][] = [[root.left, root.right]]
    while (stack.length) {
        const [left, right] = stack.pop()
        if (!left && !right) {
            continue
        } else if (!left || !right || left.val !== right.val) {
            return false
        } else {
            stack.push([left.left, right.right])
            stack.push([left.right, right.left])
        }
    }
    return true
};