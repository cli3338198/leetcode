# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def removeElements(self, head: Optional[ListNode], val: int) -> Optional[ListNode]:
        if not head:
            return head
        head.next = self.removeElements(head.next, val)
        return head if head.val != val else head.next
        
        #
        
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