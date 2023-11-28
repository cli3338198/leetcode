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

/**
 Do not return anything, modify root in-place instead.
 */
function flatten(root: TreeNode | null): void {
    go(root)
    
    function go(root: TreeNode | null): TreeNode | null {
        if (!root) return root
        const left = go(root.left)
        const right = go(root.right)
        let cur = root
        cur.left = null
        cur.right = left
        while (cur.right) cur = cur.right
        cur.right = right
        return root
    }
};