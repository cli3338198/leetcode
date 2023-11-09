# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def removeElements(self, head: Optional[ListNode], val: int) -> Optional[ListNode]:
        dummy = ListNode()
        cur = dummy
        while head:
            if head.val != val:
                cur.next = head
                cur = cur.next
            head = head.next
        if cur.next and cur.next.val == val:
            cur.next = None
        return dummy.next