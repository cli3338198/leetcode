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
var removeNodes = function(head) {
    const stack = []
    while (head) {
        while (stack.length && head.val > stack.at(-1).val) stack.pop()
        stack.push(head)
        head = head.next
    }
    const dummy = new ListNode()
    let cur = dummy
    for (const node of stack) {
        cur.next = node
        cur = cur.next
    }
    return dummy.next
};

removeNodes = function(head) {
    if (!head || !head.next) return head
    head.next = removeNodes(head.next)
    if (head.val < head.next.val) {
        return head.next
    }
    return head
}