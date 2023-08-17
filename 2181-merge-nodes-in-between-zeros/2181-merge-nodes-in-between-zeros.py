# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def mergeNodes(self, head: Optional[ListNode]) -> Optional[ListNode]:
        d = dummy = ListNode()
        prev, cur = None, head
        while cur:
            if cur.val != 0:
                if prev != None:
                    prev.val += cur.val
                else:
                    prev = cur
                    d.next = prev
                    d = d.next
            else:
                prev = None
            cur = cur.next
        d.next = None
        return dummy.next