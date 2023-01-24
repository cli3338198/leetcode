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
var sortList = function(head) {
    return mergeSort(head)
    
    function mergeSort(head) {
        if (!head || !head.next) return head
        let slow = head
        let fast = head
        let prev = null
        while (fast && fast.next) {
            prev = slow
            slow = slow.next
            fast = fast.next.next
        }
        prev.next = null
        return merge(mergeSort(head), mergeSort(slow))
    }
    
    function merge(head1, head2) {
        const dummy = new ListNode()
        let temp = dummy
        while (head1 && head2) {
            if (head1.val < head2.val) {
                temp.next = head1
                head1 = head1.next
            } else {
                temp.next = head2
                head2 = head2.next
            }
            temp = temp.next
        }
        if (head1) temp.next = head1
        if (head2) temp.next = head2
        return dummy.next
    }
};