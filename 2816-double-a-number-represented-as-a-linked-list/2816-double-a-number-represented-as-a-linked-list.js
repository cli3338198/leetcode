/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var doubleIt = function(head) {
    const remainder = rec(head)
    if (remainder) {
        return new ListNode(remainder, head)
    } else {
        return head
    }
    
    function rec(head) {
        let val = head.val * 2
        if (head.next) val += rec(head.next)
        head.val = val % 10
        return Math.floor(val / 10)
    }
};