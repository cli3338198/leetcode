# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def partition(self, head: Optional[ListNode], x: int) -> Optional[ListNode]:
        less = ListNode()
        greater = ListNode()
        lo = less
        hi = greater
        cur = head
        while cur:
            if cur.val < x:
                lo.next = cur
                lo = lo.next
            else:
                hi.next = cur
                hi = hi.next
            cur = cur.next
        lo.next = greater.next
        hi.next = None
        return less.next