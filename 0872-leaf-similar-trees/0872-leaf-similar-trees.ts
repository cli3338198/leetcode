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

function leafSimilar(root1: TreeNode | null, root2: TreeNode | null): boolean {
    const l1 = dfs(root1), l2 = dfs(root2)
    if (l1.length !== l2.length) return false
    for (let i=0; i < l1.length; i++) {
        if (l1[i] !== l2[i]) return false
    }
    return true
    
    function dfs(root: TreeNode | null): number[] {
        if (!root) return []
        const stack: TreeNode[] = [], res: number[] = []
        while (stack.length || root) {
            if (root) {
                stack.push(root)
                root = root.left
            } else {
                root = stack.pop()
                if (!root.left && !root.right) {
                    res.push(root.val)
                }
                root = root.right
            }
        }
        return res
    }
};