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
var mergeNodes = function(head) {
    const dummy = new ListNode()
    let temp = dummy
    let next = null
    for (let cur=head; cur; cur=cur.next) {
        if (cur.val !== 0) {
            if (next !== null) {
                next.val += cur.val
            } else {
                next = cur
                temp.next = next
                temp = temp.next
            }
        } else {
            next = null
        }
    }
    temp.next = null
    return dummy.next
};