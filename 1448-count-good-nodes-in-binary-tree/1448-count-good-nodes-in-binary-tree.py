# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def goodNodes(self, root: TreeNode) -> int:

        def dfs(root: Optional[TreeNode], mx: int) -> int:
            if not root:
                return 0
            mx = max(mx, root.val)
            left = dfs(root.left, mx)
            right = dfs(root.right, mx)
            cur = 1 if root.val >= mx else 0
            return cur + left + right
        
        return dfs(root, root.val)