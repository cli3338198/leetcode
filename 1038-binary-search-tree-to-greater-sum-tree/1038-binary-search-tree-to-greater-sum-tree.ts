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

function bstToGst(root: TreeNode | null): TreeNode | null {
    let sum = 0
    return dfs(root)
    
    function dfs(root?: TreeNode): TreeNode {
        if (!root) return
        if (root.right) dfs(root.right)
        root.val += sum
        sum = root.val
        if (root.left) dfs(root.left)
        return root
    }
};