/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    const dummy = new ListNode(null, head)
    let i = dummy, j = dummy, k = dummy
    while (n-- && k) {
        k = k.next
    }
    while (k) {
        i = j
        j = j.next
        k = k.next
    }
    i.next = j.next
    return dummy.next
};