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
var insertGreatestCommonDivisors = function(head) {
    for (let cur=head; cur.next; cur=cur.next.next) {
        let greatestCommon = 1
        for (let i=Math.max(cur.val, cur.next.val); i >= 1; i--) {
            if (cur.val % i === 0 && cur.next.val % i === 0) {
                greatestCommon = i
                break
            }
        }
        cur.next = new ListNode(greatestCommon, cur.next)
    }
    return head
};

insertGreatestCommonDivisors = function(head) {
    for (let cur=head; cur.next; cur=cur.next.next) {
        cur.next = new ListNode(greatestCommon(cur.val, cur.next.val), cur.next)
    }
    return head
    
    function greatestCommon(a, b) {
        if (b === 0) return a
        return greatestCommon(b, a % b)
    }
}