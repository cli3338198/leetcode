/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    if (!head || !head.next) return true
    let slow = head
    let fast = head
    let prev
    while (fast && fast.next) {
        prev = slow
        slow = slow.next
        fast = fast.next.next
    }
    prev.next = null
    prev = null
    while (slow) {
        const temp = slow.next
        slow.next = prev
        prev = slow
        slow = temp
    }
    slow = head
    fast = prev
    while (slow && fast) {
        if (slow.val !== fast.val) return false
        slow = slow.next
        fast = fast.next
    }
    return true
};