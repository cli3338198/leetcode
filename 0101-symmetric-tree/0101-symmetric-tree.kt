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
    fun rec(a: TreeNode?, b: TreeNode?): Boolean {
        if (a === null && b === null) {
            return true
        } 
        if (a === null || b === null || a.`val` !== b.`val`) {
            return false
        } 
        return rec(a.`left`, b.`right`) && rec(a.`right`, b.`left`)
    }
    
    fun isSymmetric(root: TreeNode?): Boolean {
        return rec(root, root)
    }
}