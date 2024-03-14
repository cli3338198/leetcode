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

function rangeSumBST(root: TreeNode | null, low: number, high: number): number {
    if (!root) return 0
    let res = 0
    if (root.val >= low && root.val <= high) res += root.val
    if (root.val > low) res += rangeSumBST(root.left, low, high)
    if (root.val < high) res += rangeSumBST(root.right, low, high)
    return res
    
    //
    
    if (!root) return 0
    const stack: TreeNode[] = []
    let sum1 = 0
    while (stack.length || root) {
        if (root) {
            stack.push(root)
            root = root.left
        } else {
            root = stack.pop()
            if (root.val >= low && root.val <= high) sum1 += root.val
            root = root.right
        }
    }
    return sum1
    
    //
    
    if (!root) return 0
    let sum = 0
    if (root.val >= low && root.val <= high) sum += root.val
    sum += rangeSumBST(root.left, low, high)
    sum += rangeSumBST(root.right, low, high)
    return sum
};