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
    let aLen = findLen(headA)
    let bLen = findLen(headB)

    return helper(headA, headB)
    
    function helper(headA, headB) {
        if (aLen > bLen) {
            [aLen, bLen] = [bLen, aLen]
            return helper(headB, headA)
        }
        let diff = bLen - aLen
        while (diff) {
            headB = headB.next
            diff--
        }
        while (headA && headB) {
            if (headA === headB) return headA
            headA = headA.next
            headB = headB.next
        }
        return null
    }
};

function findLen(node) {
    let len = 0
    while (node) {
        node = node.next
        len++
    }
    return len
}