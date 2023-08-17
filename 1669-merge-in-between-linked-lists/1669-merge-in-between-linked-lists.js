/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeInBetween = function(list1, a, b, list2) {
    let diff = b - a
    let hi = list1
    while (hi && diff) {
        diff--
        hi = hi.next
    }
    let lo = list1
    let prev = null
    let idx = 0
    let next = null
    while (idx !== a) {
        prev = lo
        lo = lo.next
        hi = hi.next
        next = hi.next
        idx++
    }
    prev.next = list2
    lo = list2
    while (lo.next) {
        lo = lo.next
    }
    lo.next = next
    return list1
};