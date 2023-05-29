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
    fun sumOfLeftLeaves(root: TreeNode?): Int {
        if (root === null) return 0
        var sum = 0
        if (root.left !== null && root.left.left === null && root.left.right === null) {
            sum += root.left.`val`
        }
        sum += sumOfLeftLeaves(root.left)
        sum += sumOfLeftLeaves(root.right)
        return sum
    }
}