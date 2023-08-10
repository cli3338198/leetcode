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

function findMode(root: TreeNode | null): number[] {
    let res: number[] = []
    let curVal = null
    let curCnt = 0
    let maxCnt = 0
    dfs(root)
    return res
    
    function dfs(root: TreeNode | null): void {
        if (!root) return
        dfs(root.left)
        if (curVal === root.val) {
            curCnt++
        } else {
            curCnt = 1
        }
        curVal = root.val
        if (curCnt > maxCnt) {
            maxCnt = curCnt
            res = [+root.val]
        } else if (curCnt === maxCnt) {
            res.push(+root.val)
        }
        dfs(root.right)
    }
};