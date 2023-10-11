# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reverseBetween(self, head: Optional[ListNode], left: int, right: int) -> Optional[ListNode]:
        dummy = ListNode()
        dummy.next = head
        temp, cur = dummy, head
        left -= 1
        right -= 1
        while left > 0:
            temp = cur
            cur = cur.next
            left -= 1
            right -= 1
        temp.next = prev = None
        while right != -1:
            next = cur.next
            cur.next = prev
            prev = cur
            cur = next
            right -= 1
        temp.next = prev
        while temp.next:
            temp = temp.next
        temp.next = cur
        return dummy.next