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

function largestValues(root: TreeNode | null): number[] {
    if (!root) return []
    return bfs(root)
    
    function bfs(root: TreeNode | null): number[] {
        const q: TreeNode[] = [root], res: number[] = []
        while (q.length) {
            const len = q.length
            let max = -Infinity
            for (let i=0; i < len; i++) {
                const {val, left, right} = q.shift()
                max = Math.max(max, val)
                if (left) q.push(left)
                if (right) q.push(right)
            }
            res.push(max)
        }
        return res
    }
};