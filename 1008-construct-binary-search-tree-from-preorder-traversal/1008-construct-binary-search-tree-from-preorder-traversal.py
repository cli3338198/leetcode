# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def bstFromPreorder(self, preorder: List[int]) -> Optional[TreeNode]:
        i = 0
        
        def helper(hi: int) -> Optional[TreeNode]:
            nonlocal i
            if i >= len(preorder) or preorder[i] > hi:
                return None
            root = TreeNode(preorder[i])
            i += 1
            root.left = helper(root.val)
            root.right = helper(hi)
            return root
        
        return helper(float("inf"))