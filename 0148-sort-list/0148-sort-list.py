# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def sortList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        
        def merge(head1: Optional[ListNode], head2: Optional[ListNode]) -> Optional[ListNode]:
            
            dummy = ListNode()
            temp = dummy
            
            while head1 and head2:
                if head1.val < head2.val:
                    temp.next = head1
                    head1 = head1.next
                
                else:
                    temp.next = head2
                    head2 = head2.next
                    
                temp = temp.next
            
            if head1: 
                temp.next = head1
            
            if head2:
                temp.next = head2
                
            return dummy.next
        
        def merge_sort(head: Optional[ListNode]) -> Optional[ListNode]:
            
            if not head or not head.next:
                return head
            
            prev = None
            slow = head
            fast = head
            
            while fast and fast.next:
                prev = slow
                slow = slow.next
                fast = fast.next.next
            
            prev.next = None
            
            return merge(merge_sort(head), merge_sort(slow))
        
        return merge_sort(head)