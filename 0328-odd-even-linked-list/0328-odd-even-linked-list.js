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
var oddEvenList = function(head) {
    const odds = new ListNode()
    const evens = new ListNode()
    let curOdd = odds
    let curEven = evens
    for (let cur=head, i=1; cur; cur=cur.next, i++) {
        if (i % 2) {
            curOdd.next = cur
            curOdd = curOdd.next
        } else {
            curEven.next = cur
            curEven = curEven.next
        }
    }
    curOdd.next = null
    curEven.next = null
    curOdd.next = evens.next
    return odds.next
};

oddEvenList = function(head) {
    if (!head || !head.next) return head
    let odd = head
    let even = head.next
    let evenHead = even
    while (even && even.next) {
        odd.next = even.next
        odd = odd.next
        even.next = odd.next
        even = even.next
    }
    odd.next = evenHead
    return head
}