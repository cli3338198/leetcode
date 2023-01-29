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
var reverseList = function(head) {
    let prev = null
    while (head) {
        const next = head.next
        head.next = prev
        prev = head
        head = next
    }
    return prev
};

reverseList = function(head) {
    return helper(null, head)
    
    function helper(prev, head) {
        if (!head) return prev
        const next = head.next
        head.next = prev
        return helper(head, next)
    }
}