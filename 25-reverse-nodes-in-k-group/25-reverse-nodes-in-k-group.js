/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    const dummy = new ListNode(null, head)
    let groupPrev = dummy
    while (true) {
        const kth = getKth(groupPrev, k)
        if (!kth) break
        let groupNext = kth.next
        let prev = kth.next
        let cur = groupPrev.next
        while (cur !== groupNext) {
            const temp = cur.next
            cur.next = prev
            prev = cur
            cur = temp
        }
        const temp = groupPrev.next
        groupPrev.next = kth
        groupPrev = temp
    }
    return dummy.next
    
    function getKth(cur, k) {
        while (cur && k) {
            cur = cur.next
            k--
        }
        return cur
    }
};