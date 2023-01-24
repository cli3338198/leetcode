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
    if (lists.length <= 1) return lists[0] || null
    const mid = Math.floor(lists.length/2)
    const left = mergeKLists(lists.slice(0, mid))
    const right = mergeKLists(lists.slice(mid))
    return merge(left, right)
    
    function merge(left, right) {
        const dummy = new ListNode()
        let temp = dummy
        while (left && right) {
            if (left.val < right.val) {
                temp.next = left
                left = left.next
            } else {
                temp.next = right
                right = right.next
            }
            temp = temp.next
        }
        if (left) temp.next = left
        if (right) temp.next = right
        return dummy.next
    }
};