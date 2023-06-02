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
    fun dfs(r1: TreeNode?, r2: TreeNode?, isOdd: Boolean) {
        if (r1 === null && r2 === null) return
        if (isOdd) {
            val temp = r1!!.`val`
            r1!!.`val` = r2!!.`val`
            r2!!.`val` = temp
        }
        dfs(r1!!.left, r2!!.right, !isOdd)
        dfs(r1!!.right, r2!!.left, !isOdd)
        return
    }
    
    fun reverseOddLevels(root: TreeNode?): TreeNode? {
        dfs(root!!.left, root!!.right, true)
        return root
    }
}