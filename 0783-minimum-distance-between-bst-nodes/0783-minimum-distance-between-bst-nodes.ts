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

function minDiffInBST(root: TreeNode | null): number {
    const stack: TreeNode[] = []
    let min = Infinity
    let prev = new TreeNode(Infinity)
    while (stack.length || root) {
        if (root) {
            stack.push(root)
            root = root.left
        } else {
            root = stack.pop()
            min = Math.min(min, Math.abs(prev.val-root.val))
            prev = root
            root = root.right
        }
    }
    return min
};