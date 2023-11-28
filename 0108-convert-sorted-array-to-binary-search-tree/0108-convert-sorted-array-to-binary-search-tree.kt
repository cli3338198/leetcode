/**
 * Example:
 * var ti = TreeNode(5)
 * var v = ti.`val`
 * Definition for a binary tree node.
 * class TreeNode(var `val`: Int) {
 *     var left: TreeNode? = null
 *     var right: TreeNode? = null
 * }
 */
class Solution {
    fun sortedArrayToBST(nums: IntArray): TreeNode? {
        return go(0, nums.size-1, nums)
        
        //
        
        // if (nums.size === 0) return null
        // val mid = nums.size/2
        // val root = TreeNode(nums[mid])
        // root.left = sortedArrayToBST(nums.sliceArray(0 until mid))
        // root.right = sortedArrayToBST(nums.sliceArray(mid+1 until nums.size))
        // return root
    }
    
    fun go(l: Int, r: Int, nums: IntArray): TreeNode? {
        if (l > r) return null
        val m = (l+r)/2
        val root = TreeNode(nums[m])
        root.left = go(l, m-1, nums)
        root.right = go(m+1, r, nums)
        return root
    }
}