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

function sumRootToLeaf(root: TreeNode | null): number {
    let res = 0
    const stack: [TreeNode, number][] = [[root, root.val]]
    while (stack.length) {
        const [root, val] = stack.pop()
        if (!root.left&& !root.right) res += val
        if (root.left) stack.push([root.left, 2 * val + root.left.val])
        if (root.right) stack.push([root.right, 2 * val + root.right.val])
    }
    return res
};