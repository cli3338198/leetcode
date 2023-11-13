/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    if (!list1) return list2
    if (!list2) return list1
    const cur = list1.val < list2.val ? list1 : list2
    const notCur = cur === list1 ? list2 : list1
    cur.next = mergeTwoLists(cur.next, notCur)
    return cur
};