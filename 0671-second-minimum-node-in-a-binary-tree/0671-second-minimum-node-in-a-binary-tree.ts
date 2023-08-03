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

function findSecondMinimumValue(root: TreeNode | null): number {
    let res = Infinity
    dfs(root)
    return res === Infinity ? -1 : res
    
    function dfs(cur: TreeNode | null): void {
        if (!cur) return
        if (cur.val > root.val && res > cur.val) {
            res = cur.val
            return
        }
        dfs(cur.left)
        dfs(cur.right)
    }
};