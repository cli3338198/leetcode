# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def pairSum(self, head: Optional[ListNode]) -> int:
        slow = fast = head
        stack, mx = [], 0
        while fast and fast.next:
            stack.append(slow)
            slow = slow.next
            fast = fast.next.next
        while stack and slow:
            mx = max(mx, stack.pop().val + slow.val)
            slow = slow.next
        return mx