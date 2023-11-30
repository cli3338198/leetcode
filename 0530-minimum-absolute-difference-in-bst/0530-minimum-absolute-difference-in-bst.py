# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def __init__(self):
        self.min = inf
        self.prev = None
        
    def dfs(self, root: Optional[TreeNode]) -> int:
        if not root:
            return
        self.dfs(root.left)
        if self.prev != None:
            self.min = min(self.min, root.val-self.prev)
        self.prev = root.val
        self.dfs(root.right)
        return self.min
    
    def inorder(self, root: Optional[TreeNode]) -> List[int]:
        if not root:
            return []
        return [*self.inorder(root.left), root.val, *self.inorder(root.right)]
    
    def getMinimumDifference(self, root: Optional[TreeNode]) -> int:
        res, arr = inf, self.inorder(root)
        for i in range(0, len(arr)-1):
            res = min(res, arr[i+1]-arr[i])
        return res
        
        #
        
        return self.dfs(root)