# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def doubleIt(self, head: Optional[ListNode]) -> Optional[ListNode]:
        def rec(head: Optional[ListNode]) -> Optional[ListNode]:
            val = head.val * 2
            if head.next:
                val += rec(head.next)
            head.val = val % 10
            return val // 10
        
        remainder = rec(head)
        if remainder:
            return ListNode(remainder, head)
        else:
            return head
    
        #
        
        def reverse(prev: Optional[ListNode], cur: Optional[ListNode]) -> Optional[ListNode]:
            if not cur:
                return prev
            next = cur.next
            cur.next = prev
            return reverse(cur, next)
        
        copy = cur = reverse(None, head)
        remainder = 0
        while cur:
            if cur:
                next_sum = cur.val
                next_sum *= 2
                next_sum += remainder
                cur.val = next_sum % 10
                remainder = next_sum // 10
                if cur.next:
                    cur = cur.next
                else:
                    if remainder:
                        cur.next = ListNode(remainder)
                    break
        return reverse(None, copy)
                

            
        
            
        