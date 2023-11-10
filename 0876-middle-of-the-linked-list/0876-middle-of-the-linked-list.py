# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def middleNode(self, head: Optional[ListNode]) -> Optional[ListNode]:
        def go(slow: Optional[ListNode], fast: Optional[ListNode]) -> Optional[ListNode]:
            if not fast or not fast.next:
                return slow
            return go(slow.next, fast.next.next)
        
        return go(head, head)
        
        #
        
        slow = fast = head
        while fast and fast.next:
            slow = slow.next
            fast = fast.next.next
        return slow