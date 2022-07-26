/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    if (lists.length === 1 || !lists.length) return lists[0] || null
    const m = Math.floor(lists.length / 2)
    const left = lists.slice(0, m)
    const right = lists.slice(m)
    return merge(mergeKLists(left), mergeKLists(right))
    
    function merge(a, b) {
        const dummy = new ListNode()
        let cur = dummy
        while (a && b) {
            if (a.val < b.val) {
                cur.next = a
                a = a.next
            } else {
                cur.next = b
                b = b.next
            }
            cur = cur.next
        }
        if (a) cur.next = a
        if (b) cur.next = b
        return dummy.next
    }
};