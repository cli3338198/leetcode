# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def nextLargerNodes(self, head: Optional[ListNode]) -> List[int]:
        mp, stack, res, cur = {}, [], [], head
        while cur:
            while stack and cur.val > stack[-1].val:
                mp[stack.pop()] = cur
            stack.append(cur)
            cur = cur.next
        cur = head
        while cur:
            if cur in mp:
                res.append(mp[cur].val)
            else:
                res.append(0)
            cur = cur.next
        return res