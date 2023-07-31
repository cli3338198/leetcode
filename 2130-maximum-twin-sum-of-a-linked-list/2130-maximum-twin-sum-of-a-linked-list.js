/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function(head) {
    const stack = []
    let slow = head
    let fast = head
    while (fast) {
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