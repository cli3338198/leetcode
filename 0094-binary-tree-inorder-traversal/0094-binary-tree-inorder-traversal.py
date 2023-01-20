# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def inorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
        
        q = []
        res = []
        
        while q or root:
            while root:
                q.append(root)
                root = root.left
            
            root = q.pop()
            res.append(root.val)
            root = root.right
        
        return res