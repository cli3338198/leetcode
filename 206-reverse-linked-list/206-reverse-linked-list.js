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
    return helper(null, head)
    
    function helper(prev, cur) {
        if (!cur) return prev
        const temp = cur.next
        cur.next = prev
        return helper(cur, temp)
    }
};