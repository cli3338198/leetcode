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

function levelOrder(root: TreeNode | null): number[][] {
    const res: number[][] = [], q: [TreeNode, number][] = [[root, 0]]
    if (!root) return res
    traverse()
    return res
    
    function traverse() {
        if (!q.length) return
        const [{val, left, right}, lvl] = q.shift()
        res[lvl] = res[lvl] || []
        res[lvl].push(val)
        if (left) q.push([left, lvl+1])
        if (right) q.push([right, lvl+1])
        traverse()
    }
};