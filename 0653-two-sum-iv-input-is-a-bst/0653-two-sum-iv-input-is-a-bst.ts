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

function findTarget(root: TreeNode | null, k: number): boolean {
    const nums: number[] = []
    rec(root)
    for (let i=0; i < nums.length; i++) {
        if (binSearch(i + 1, nums.length - 1, k - nums[i])) {
            return true
        }
    }
    return false
     
    function binSearch(left: number, right: number, target: number) {
        if (left > right) return false
        const mid = Math.floor((left + right) / 2)
        if (nums[mid] === target) return true
        if (nums[mid] > target) return binSearch(left, right - 1, target)
        if (nums[mid] < target) return binSearch(left + 1, right, target)
        return false
        
        // while (left <= right) {
        //     const mid = Math.floor((left + right) / 2)
        //     if (nums[mid] === target) {
        //         return true
        //     } else if (nums[mid] > target) {
        //         right = mid - 1
        //     } else {
        //         left = mid + 1
        //     }
        // }
        // return false
    }
    
    function rec(root: TreeNode | null) {
        if (!root) return
        rec(root.left)
        nums.push(root.val)
        rec(root.right)
    }
    
    //
    
    const seen = new Set<number>()
    return dfs(root)
    
    function dfs(root: TreeNode | null): boolean {
        if (!root) {
            return false
        }
        if (seen.has(k - root.val)) {
            return true
        }
        seen.add(root.val)
        return dfs(root.left) || dfs(root.right)
    }
};