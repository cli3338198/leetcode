# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def rec(self, prev: Optional[ListNode], cur: Optional[ListNode]) -> Optional[ListNode]:
        if not cur:
            return prev
        next = cur.next
        cur.next = prev
        return self.rec(cur, next)
    
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        return self.rec(None, head)
        
        #
        
        prev, cur = None, head
        while cur:
            next = cur.next
            cur.next = prev
            prev = cur
            cur = next
        return prev