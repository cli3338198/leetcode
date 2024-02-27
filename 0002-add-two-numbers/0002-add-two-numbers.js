/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    const dummy = new ListNode(0)
    let cur = dummy
    let carry = 0
    while (l1 || l2 || carry) {
        const newNode = new ListNode(0)
        const sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry
        newNode.val = sum % 10
        carry = Math.floor(sum / 10)
        if (l1) l1 = l1.next
        if (l2) l2 = l2.next
        cur.next = newNode
        cur = cur.next
    }
    return dummy.next 
};