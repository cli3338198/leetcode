# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def oddEvenList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        odd, even = ListNode(), ListNode()
        o, e, i = odd, even, 1
        while head:
            if i % 2 == 0:
                e.next = head
                e = e.next
            else:
                o.next = head
                o = o.next
            i += 1
            head = head.next
        e.next = None
        o.next = even.next
        return odd.next
        