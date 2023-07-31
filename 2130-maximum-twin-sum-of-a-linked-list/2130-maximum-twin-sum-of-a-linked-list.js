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

pairSum = function(head) {
    let slow = head
    let fast = head
    while (fast && fast.next) {
        slow = slow.next
        fast = fast.next.next
    }
    let prev = null
    while (slow) {
        next = slow.next
        slow.next = prev
        prev = slow
        slow = next
    }
    let max = 0
    slow = head
    while (slow && prev) {
        max = Math.max(max, slow.val + prev.val)
        slow = slow.next
        prev = prev.next
    }
    return max
}

pairSum = function(head) {
    let slow = head
    let fast = head
    for (slow, fast; fast && fast.next; slow = slow.next, fast = fast.next.next) {}
    let prev = null
    let next = null
    for (prev, slow, next; slow; prev = slow, slow = next) {
        next = slow.next
        slow.next = prev
    }
    let max = 0
    for (slow = head, prev; slow && prev; slow = slow.next, prev = prev.next) {
        max = Math.max(max, slow.val + prev.val)
    }
    return max
}