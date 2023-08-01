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

function partition(head: ListNode | null, x: number): ListNode | null {
    const less = new ListNode()
    const greater = new ListNode()
    let lo = less
    let hi = greater
    let cur = head
    for (cur = head; cur; cur = cur.next) {
        if (cur.val < x) {
            lo = lo.next = cur
        } else {
            hi = hi.next = cur
        }
    }
    lo.next = greater.next
    hi.next = null
    return less.next
};