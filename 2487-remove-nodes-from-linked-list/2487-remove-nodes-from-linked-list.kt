/**
 * Example:
 * var li = ListNode(5)
 * var v = li.`val`
 * Definition for singly-linked list.
 * class ListNode(var `val`: Int) {
 *     var next: ListNode? = null
 * }
 */
class Solution {
    fun removeNodes(head: ListNode?): ListNode? {
        if (head === null || head.`next` === null) {
            return head
        }
        head.`next` = removeNodes(head.`next`)
        if (head.`val` < head.`next`.`val`) {
            return head.`next`
        }
        return head
    }
}