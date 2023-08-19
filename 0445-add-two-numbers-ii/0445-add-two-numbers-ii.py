# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
        s1, s2, d, carry = self.to_stack(l1), self.to_stack(l2), None, 0
        while s1 or s2 or carry:
            v1, v2 = s1.pop().val if s1 else 0, s2.pop().val if s2 else 0
            cur_sum = v1 + v2 + carry
            d = ListNode(val=cur_sum % 10, next=d)
            carry = cur_sum // 10
        return d
        
    
    def to_stack(self, head: Optional[ListNode]) -> List[ListNode]:
        stack = []
        while head:
            stack.append(head)
            head = head.next
        return stack