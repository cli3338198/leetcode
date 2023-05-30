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
    fun dfs(cur: TreeNode?, parent: TreeNode?, grandparent: TreeNode?): Int {
        if (cur === null) return 0
        var sum = 0
        if (grandparent !== null && grandparent.`val` % 2 === 0) sum += cur.`val`
        return sum + dfs(cur.left, cur, parent) + dfs(cur.right, cur, parent)
    }
    
    fun sumEvenGrandparent(root: TreeNode?): Int {
        return dfs(root, null, null)
    }
}