# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def oddEvenList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        if not head:
            return None
        odd, even = head, head.next
        o, e = odd, even
        while e and e.next:
            o.next = e.next
            o = o.next
            e.next = o.next
            e = e.next
        o.next = even
        return odd
        
        #
        
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
        