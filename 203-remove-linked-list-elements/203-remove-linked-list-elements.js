/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    const dummy = new ListNode(null, head)
    let cur = head
    let prev = dummy
    while (cur) {
        if (cur.val === val) {
            prev.next = cur.next
        } else {
            prev = cur
        }
        cur = cur.next
    }
    return dummy.next
};