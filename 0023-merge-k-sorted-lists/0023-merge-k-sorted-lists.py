# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution(object):
    def merge(self, list1, list2):
        new_list = ListNode()
        l0, l1, l2 = new_list, list1, list2
        while l1 and l2:
            if l1.val < l2.val:
                l0.next = l1
                l1 = l1.next
            else:
                l0.next = l2
                l2 = l2.next
            l0 = l0.next
        if l1:
            l0.next = l1
        if l2:
            l0.next = l2
        return new_list.next            
    
    def mergeKLists(self, lists):
        """
        :type lists: List[ListNode]
        :rtype: ListNode
        """
        if len(lists) == 0:
            return None
        if len(lists) == 1:
            return lists[0]
        return self.merge(self.mergeKLists(lists[0:len(lists)//2:]), self.mergeKLists(lists[len(lists)//2::]))