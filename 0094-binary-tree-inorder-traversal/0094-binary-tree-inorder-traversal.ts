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

function inorderTraversal(root: TreeNode | null): number[] {
    const stack: TreeNode[] = [], res: number[] = []
    while (root || stack.length) {
        if (root) {
            stack.push(root)
            root = root.left
        } else {
            root = stack.pop()
            res.push(root.val)
            root = root.right
        }
    }
    return res
    
    //
    
    if (!root) return []
    return [...inorderTraversal(root.left), root.val, ...inorderTraversal(root.right)]
};