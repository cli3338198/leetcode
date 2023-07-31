# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def pairSum(self, head: Optional[ListNode]) -> int:
        slow = fast = head
        while fast and fast.next:
            slow = slow.next
            fast = fast.next.next
        prev = None
        while slow:
            nxt = slow.next
            slow.next = prev
            prev = slow
            slow = nxt
        mx = 0
        slow = head
        while slow and prev:
            mx = max(mx, slow.val + prev.val)
            slow = slow.next
            prev = prev.next
        return mx
        
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