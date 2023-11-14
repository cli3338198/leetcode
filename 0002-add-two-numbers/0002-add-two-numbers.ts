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
    return _addTwoNumbers(l1, l2, 0)
    
    function _addTwoNumbers(l1: ListNode | null, l2: ListNode | null, remainder: number): ListNode | null {
        if (!l1 && !l2 && !remainder) return null
        let sum = remainder
        if (l1) {
            sum += l1.val
            l1 = l1.next
        }
        if (l2) {
            sum += l2.val
            l2 = l2.next
        }
        return new ListNode(sum % 10, _addTwoNumbers(l1, l2, Math.floor(sum / 10)))
    }
};