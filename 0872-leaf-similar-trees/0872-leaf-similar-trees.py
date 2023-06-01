# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def leafSimilar(self, root1: Optional[TreeNode], root2: Optional[TreeNode]) -> bool:
        def dfs(root: Optional[TreeNode]) -> List[int]:
            if not root:
                return []
            return [
                *dfs(root.left),
                *([root.val] if not root.left and not root.right else []),
                *dfs(root.right)
            ]
        
        a = dfs(root1)
        b = dfs(root2)
        if len(a) != len(b):
            return False
        for i in range(0, len(a)):
            if a[i] != b[i]:
                return False
        return True