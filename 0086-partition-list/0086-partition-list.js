/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    const less = new ListNode()
    const greater = new ListNode()
    let lo = less
    let hi = greater
    let cur = head
    while (cur) {
        if (cur.val < x) {
            lo.next = cur
            lo = lo.next
        } else {
            hi.next = cur
            hi = hi.next
        }
        cur = cur.next
    }
    lo.next = greater.next
    hi.next = null
    return less.next
};