/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    const stack = []
    let cur = head
    while (cur) {
        stack.push(cur)
        cur = cur.next
    }
    cur = head
    while (cur) {
        if (cur.val !== stack[stack.length-1].val) return false
        cur = cur.next
        stack.pop()
    }
    return true
};