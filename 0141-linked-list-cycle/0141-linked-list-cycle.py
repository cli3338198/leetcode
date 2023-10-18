# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def hasCycle(self, head: Optional[ListNode]) -> bool:
        a = b = head
        while b and b.next:
            a, b = a.next, b.next.next
            if a == b:
                return True
        return False