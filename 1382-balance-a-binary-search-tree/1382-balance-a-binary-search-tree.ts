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

function balanceBST(root: TreeNode | null): TreeNode | null {
    const arr = dfs(root)
    return balance(0, arr.length-1)
    
    function dfs(root: TreeNode): number[] {
        if (!root) return []
        return [...dfs(root.left), root.val, ...dfs(root.right)]
    }
    
    function balance(lo: number, hi: number): TreeNode {
        if (lo > hi) return null
        const mid = Math.floor((lo + hi)/2)
        const root = new TreeNode(arr[mid])
        root.left = balance(lo, mid-1)
        root.right = balance(mid+1, hi)
        return root
    }
};