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
    fun mergeTwoLists(list1: ListNode?, list2: ListNode?): ListNode? {
        val dummy = ListNode(0)
        var cur = dummy
        var l1 = list1
        var l2 = list2
        while (l1 !== null && l2 !== null) {
            if (l1.`val` < l2.`val`) {
                cur.next = l1
                l1 = l1.next
            } else {
                cur.next = l2
                l2 = l2.next
            }
            cur = cur.next
        }
        if (l1 !== null) {
            cur.next = l1
        }
        if (l2 !== null) {
            cur.next = l2
        }
        return dummy.next
    }
}