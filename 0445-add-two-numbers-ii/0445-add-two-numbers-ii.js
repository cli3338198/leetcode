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

addTwoNumbers = function(l1, l2) {
    const stack1 = toStack(l1)
    const stack2 = toStack(l2)
    let carry = 0
    let d = null
    while (stack1.length || stack2.length || carry) {
        const v1 = stack1.pop()?.val || 0
        const v2 = stack2.pop()?.val || 0
        const sum = v1 + v2 + carry
        d = new ListNode(sum % 10, d)
        carry = Math.floor(sum / 10)
    }
    return d
    
    function toStack(head) {
        const stack = []
        while (head) {
            stack.push(head)
            head = head.next
        }
        return stack
    }
}