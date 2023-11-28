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
        if (nums.size === 0) return null
        val mid = nums.size/2
        val root = TreeNode(nums[mid])
        root.left = sortedArrayToBST(nums.sliceArray(0 until mid))
        root.right = sortedArrayToBST(nums.sliceArray(mid+1 until nums.size))
        return root
    }
}