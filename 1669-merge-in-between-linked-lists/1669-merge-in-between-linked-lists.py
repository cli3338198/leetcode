# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def mergeInBetween(self, list1: ListNode, a: int, b: int, list2: ListNode) -> ListNode:
        start = end = None
        cur, i = list1, 0
        while i <= b:
            if i == a-1:
                start = cur
            cur = cur.next
            i += 1
        end = cur
        start.next = list2
        cur = start.next
        while cur.next:
            cur = cur.next
        cur.next = end
        return list1
            