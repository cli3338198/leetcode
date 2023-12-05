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

function maxDepth(root: TreeNode | null): number {
    if (!root) return 0
    const q: TreeNode[] = [root]
    let depth = 0
    while (q.length) {
        const len = q.length
        for (let i=0; i < len; i++) {
            const {left, right} = q.shift()
            if (left) q.push(left)
            if (right) q.push(right)
        }
        depth++
    }
    return depth
    
    //
    
    if (!root) return 0
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right))
};