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

function pairSum(head: ListNode | null): number {
    const stack: ListNode[] = []
    let slow = head
    let fast = head
    while (fast && fast.next) {
        stack.push(slow)
        slow = slow.next
        fast = fast.next.next
    }
    let max = 0
    while (stack.length && slow) {
        max = Math.max(max, stack.pop().val + slow.val)
        slow = slow.next
    }
    return max
};