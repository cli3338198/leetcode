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

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    const stack1 = toStack(l1), stack2 = toStack(l2)
    let carry = 0
    let dummy = null
    while (stack1.length || stack2.length || carry) {
        const v1 = stack1.pop()?.val || 0
        const v2 = stack2.pop()?.val || 0
        const sum = v1 + v2 + carry
        dummy = new ListNode(sum % 10, dummy)
        carry = Math.floor(sum / 10)
    }
    return dummy
};

function toStack(head: ListNode | null): ListNode[] {
    const stack: ListNode[] = []
    while (head) {
        stack.push(head)
        head = head.next
    }
    return stack
}