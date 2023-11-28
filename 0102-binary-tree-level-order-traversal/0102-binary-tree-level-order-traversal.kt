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
    fun levelOrder(root: TreeNode?): List<List<Int>> {
        val res = mutableListOf<List<Int>>()
        if (root === null) {
            return res
        }
        val q: Queue<TreeNode> = LinkedList()
        q.offer(root)
        while (q.isNotEmpty()) {
            val len = q.size
            val lvl = mutableListOf<Int>()
            for (i in 0..len-1) {
                val cur = q.poll()
                lvl.add(cur.`val`)
                if (cur.`left` !== null) {
                    q.offer(cur.`left`)
                }
                if (cur.`right` !== null) {
                    q.offer(cur.`right`)
                }
            }
            res.add(lvl)
        }
        return res
    }
}