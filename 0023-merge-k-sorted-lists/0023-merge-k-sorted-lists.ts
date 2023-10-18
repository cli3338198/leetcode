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

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
    if (lists.length === 0) {
        return null
    }
    if (lists.length === 1) {
        return lists[0]
    }
    return merge(mergeKLists(lists.slice(0, Math.floor(lists.length/2))), mergeKLists(lists.slice(Math.floor(lists.length/2))))
};

function merge(a?: ListNode, b?: ListNode): ListNode | null {
    const dummy = new ListNode()
    let head = dummy
    while (a && b) {
        if (a.val < b.val) {
            head.next = a
            a = a.next
        } else {
            head.next = b
            b = b.next
        }
        head = head.next
    }
    if (a) head.next = a
    if (b) head.next = b
    return dummy.next
}