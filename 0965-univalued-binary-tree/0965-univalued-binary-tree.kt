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
    fun isUnivalTree(root: TreeNode?): Boolean {
        if (root === null) {
            return true
        } else if (root.left !== null && root.left.`val` !== root.`val`) {
            return false
        } else if (root.right !== null && root.right.`val` !== root.`val`) {
            return false
        } else {
            return isUnivalTree(root.left) && isUnivalTree(root.right)
        }
    }
}