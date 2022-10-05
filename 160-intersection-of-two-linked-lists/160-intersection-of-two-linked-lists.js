/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    const visited = new Map()
    let cur = headA
    while (cur) {
        visited.set(cur, true)
        cur = cur.next
    }
    cur = headB
    while (cur) {
        if (visited.get(cur) === true) {
            return cur
        }
        cur = cur.next
    }
    return null    
};