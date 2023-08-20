# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def insertGreatestCommonDivisors(self, head: Optional[ListNode]) -> Optional[ListNode]:
        def greatest_common(a: int, b: int) -> int:
            if b == 0:
                return a
            return greatest_common(b, a % b)
        
        cur = head
        while cur.next:
            cur.next = ListNode(greatest_common(cur.val, cur.next.val), cur.next)
            cur = cur.next.next
        return head