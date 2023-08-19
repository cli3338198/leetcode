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
    const r1 = reversed(l1)
    const r2 = reversed(l2)
    const dummy = new ListNode()
    let p1 = r1, p2 = r2, carry = 0, d = dummy
    while (p1 && p2) {
        const sum = p1.val + p2.val + carry
        d.next = new ListNode(sum % 10)
        d = d.next
        carry = Math.floor(sum / 10)
        p1 = p1.next
        p2 = p2.next
    }
    while (p1) {
        const sum = p1.val + carry
        d.next = new ListNode(sum % 10)
        d = d.next
        carry = Math.floor(sum / 10)
        p1 = p1.next
    }
    while (p2) {
        const sum = p2.val + carry
        d.next = new ListNode(sum % 10)
        d = d.next
        carry = Math.floor(sum / 10)
        p2 = p2.next
    }
    if (carry) d.next = new ListNode(carry)
    return reversed(dummy.next)
    
    function reversed(head, prev=null) {
        if (!head) return prev
        const next = head.next
        head.next = prev
        return reversed(next, head)
    }
};