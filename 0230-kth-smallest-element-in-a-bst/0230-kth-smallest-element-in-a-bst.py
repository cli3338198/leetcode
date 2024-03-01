# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def kthSmallest(self, root: Optional[TreeNode], k: int) -> int:
        kth_smallest = None
        K = k
        
        def dfs(root):
            nonlocal kth_smallest, K
            if not root:
                return
            dfs(root.left)
            K -= 1
            if K == 0:
                kth_smallest = root.val
            dfs(root.right)
            
        dfs(root)
        return kth_smallest