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

function averageOfLevels(root: TreeNode | null): number[] {
    const sums: [number, number][] = []
    const q: [TreeNode, number][] = [[root, 0]]
    while (q.length) {
        const [node, level] = q.shift()
        sums[level] = sums[level] || [0, 0]
        sums[level][0] += node.val
        sums[level][1]++
        if (node.left) q.push([node.left, level + 1])
        if (node.right) q.push([node.right, level + 1])
    }
    return sums.map(([sum, count]) => sum / count)
};