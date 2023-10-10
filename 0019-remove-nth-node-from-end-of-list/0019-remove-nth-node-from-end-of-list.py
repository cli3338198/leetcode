# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def removeNthFromEnd(self, head: Optional[ListNode], n: int) -> Optional[ListNode]:
        dummy = ListNode()
        dummy.next = head
        cur = next = dummy
        while n >= 0:
            n -= 1
            next = next.next
        while next:
            cur = cur.next
            next = next.next
        cur.next = cur.next.next
        return dummy.next