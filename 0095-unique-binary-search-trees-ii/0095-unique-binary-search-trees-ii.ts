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

function generateTrees(n: number): Array<TreeNode | null> {
    return helper(1, n)
    
    function helper(l: number, r: number): Array<TreeNode | null> {
        if (l > r) {
            return [null]
        }
        const res = []
        for (let i=l; i <= r; i++) {
            for (const left of helper(l, i-1)) {
                for (const right of helper(i+1, r)) {
                    const root = new TreeNode(i)
                    root.left = left
                    root.right = right
                    res.push(root)
                }
            }
        }
        return res
    }
};