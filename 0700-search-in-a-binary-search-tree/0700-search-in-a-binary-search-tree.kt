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
    fun searchBST(root: TreeNode?, `val`: Int): TreeNode? {
        if (root !== null) {
            if (root.`val` === `val`) {
                return root
            } else if (root.`val` < `val` && root.right !== null) {
                return searchBST(root.right, `val`)
            } else {
                return searchBST(root.left, `val`)
            }
        }
        return null
    }
}