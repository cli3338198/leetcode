# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def dfs(self, root: Optional[TreeNode], min: int = -inf, max: int = inf) -> bool:
        if not root:
            return True
        if root.val > min and root.val < max:
            return self.dfs(root.left, min, root.val) and self.dfs(root.right, root.val, max)
        else:
            return False
        
    def bfs(self, root: Optional[TreeNode]) -> bool:
        q = deque([[-inf, root, inf]])
        while q:
            mn, root, mx = q.popleft()
            if root.val <= mn or root.val >= mx:
                return False
            if root.left:
                q.append([mn, root.left, root.val])
            if root.right:
                q.append([root.val, root.right, mx])
        return True
    
    def isValidBST(self, root: Optional[TreeNode]) -> bool:
        return self.bfs(root)
        
        #
        
        return self.dfs(root)