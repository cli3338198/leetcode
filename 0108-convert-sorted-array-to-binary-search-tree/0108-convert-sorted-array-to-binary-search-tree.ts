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

function sortedArrayToBST(nums: number[]): TreeNode | null {
    const m = Math.floor(nums.length/2)
    const root = new TreeNode(nums[m])
    const q: [TreeNode, number[], number[]][] = [[root, nums.slice(0, m), nums.slice(m+1)]]
    while (q.length) {
        const [cur, left, right] = q.shift()
        if (left.length) {
            const m = Math.floor(left.length/2)
            cur.left = new TreeNode(left[m])
            q.push([cur.left, left.slice(0, m), left.slice(m+1)])
        }
        if (right.length) {
            const m = Math.floor(right.length/2)
            cur.right = new TreeNode(right[m])
            q.push([cur.right, right.slice(0, m), right.slice(m+1)])
        }
    }
    return root
    
    //
    
    if (!nums.length) return null
    const n = Math.floor(nums.length/2)
    return new TreeNode(nums[n], sortedArrayToBST(nums.slice(0, n)), sortedArrayToBST(nums.slice(n+1)))
};