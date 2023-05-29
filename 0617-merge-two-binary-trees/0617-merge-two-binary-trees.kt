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
    fun mergeTrees(r1: TreeNode?, r2: TreeNode?): TreeNode? {
        if (r1 === null) {
            return r2
        }
        if (r2 === null) {
            return r1
        }
        val root = TreeNode(0)
        root.`val` += r1.`val`
        root.`val` += r2.`val`
        root.left = mergeTrees(r1.left, r2.left)
        root.right = mergeTrees(r1.right, r2.right)
        return root
    }
}