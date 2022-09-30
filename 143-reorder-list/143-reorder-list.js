/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    if (!head || !head.next || !head.next.next) return
    let slow = head
    let fast = head
    while (fast && fast.next) {
        slow = slow.next
        fast = fast.next.next
    }
    let prev = null
    let temp
    while (slow) {
        temp = slow.next
        slow.next = prev
        prev = slow
        slow = temp
    }
    let n1 = head
    let n2 = prev
    while (n2.next) {
        temp = n1.next
        n1.next = n2
        n1 = temp
        temp = n2.next
        n2.next = n1
        n2 = temp
    }
    return head
};