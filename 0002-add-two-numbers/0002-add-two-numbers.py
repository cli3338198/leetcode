# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
        def rec(l1: Optional[ListNode], l2: Optional[ListNode], rem: int) -> Optional[ListNode]:
            if not l1 and not l2 and not rem:
                return None
            new_val = rem
            if l1:
                new_val += l1.val
                l1 = l1.next
            if l2:
                new_val += l2.val
                l2 = l2.next
            return ListNode(new_val % 10, rec(l1, l2, new_val // 10))
        
        return rec(l1, l2, 0)
            
            
        #
        
        remainder = 0
        dummy = cur = ListNode()
        while l1 or l2 or remainder:
            num = remainder
            if l1:
                num += l1.val
                l1 = l1.next
            if l2:
                num += l2.val
                l2 = l2.next
            cur.next = ListNode(num % 10)
            remainder = num // 10
            cur = cur.next
        return dummy.next