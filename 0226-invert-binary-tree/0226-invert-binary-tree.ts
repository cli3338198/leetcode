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

function invertTree(root: TreeNode | null): TreeNode | null {
    if (!root) return root
    const stack: TreeNode[] = [root]
    while (stack.length) {
        const cur = stack.pop()
        const left = cur.left
        cur.left = cur.right
        cur.right = left
        if (cur.left) stack.push(cur.left)
        if (cur.right) stack.push(cur.right)
    }
    return root
    
    if (!root) return root
    const left = root.left
    root.left = invertTree(root.right)
    root.right = invertTree(left)
    return root
};