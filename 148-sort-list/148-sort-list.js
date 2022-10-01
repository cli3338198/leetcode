/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function(head) {
    return mergeSort(head)
    
    function mergeSort(head) {
        if (!head || !head.next) return head
        let slow = head
        let fast = head
        let prev
        while (fast && fast.next) {
            prev = slow
            slow = slow.next
            fast = fast.next.next
        }
        prev.next = null
        return merge(mergeSort(head), mergeSort(slow))
    }
    
    function merge(a, b) {
        const dummy = new ListNode()
        let cur = dummy
        while (a && b) {
            if (a.val < b.val) {
                cur.next = a
                a = a.next
            } else {
                cur.next = b
                b = b.next
            }
            cur = cur.next
        }
        if (a) cur.next = a
        if (b) cur.next = b
        return dummy.next
    }
};