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
    const dummy = new ListNode()
    dummy.next = head
    let prev = dummy
    let cur = head
    while (cur) {
        if (cur.val === val) {
            while (cur && cur.val === val) {
                cur = cur.next
            }
            prev.next = cur
        } else {
            prev = cur
            cur = cur.next
        }
    }
    
    return dummy.next
};