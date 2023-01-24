# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def mergeKLists(self, lists: List[Optional[ListNode]]) -> Optional[ListNode]:
        
        if not len(lists):
            return None
        
        if len(lists) == 1:
            return lists[0]
        
        def merge(left: List[Optional[ListNode]], right: List[Optional[ListNode]]) -> Optional[ListNode]:
            
            dummy = ListNode()
            temp = dummy
            
            while left and right:
                if left.val < right.val:
                    temp.next = left
                    left = left.next
                
                else:
                    temp.next = right
                    right = right.next
                
                temp = temp.next
            
            if left: temp.next = left
                
            if right: temp.next = right
            
            return dummy.next
    
        mid = len(lists) // 2
        
        return merge(self.mergeKLists(lists[0:mid:]), self.mergeKLists(lists[mid::]))