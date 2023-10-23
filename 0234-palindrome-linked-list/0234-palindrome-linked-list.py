# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def isPalindrome(self, head: Optional[ListNode]) -> bool:
        if not head:
            return True
        
        def reverse(prev: Optional[ListNode], head: Optional[ListNode]) -> Optional[ListNode]:
            if not head:
                return prev
            next = None
            if head.next:
                next = ListNode(head.next.val, head.next.next)
            head.next = prev
            return reverse(head, next)
        
        reversed = reverse(None, ListNode(head.val, head.next))
        a, b = reversed, head
        while a and b:
            if a.val != b.val:
                return False
            a = a.next
            b = b.next
        if a or b:
            return False
        else:
            return True