# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def createBinaryTree(self, descriptions: List[List[int]]) -> Optional[TreeNode]:
        mp, children = {}, set()
        for parent, child, is_left in descriptions:
            if parent not in mp:
                mp[parent] = TreeNode(parent)
            if child not in mp:
                mp[child] = TreeNode(child)
            if is_left == 1:
                mp[parent].left = mp[child]
            else:
                mp[parent].right = mp[child]
            children.add(child)
        for key in mp:
            if key not in children:
                return mp[key]