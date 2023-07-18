# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def __init__(self):
        self.max_depth = -1
        self.lca = None
    
    def lcaDeepestLeaves(self, root: Optional[TreeNode]) -> Optional[TreeNode]:
        self.dfs(root, 0)
        return self.lca
    
    def dfs(self, root: Optional[TreeNode], depth: int) -> None:
        if not root:
            return -1
        if not root.left and not root.right:
            if depth > self.max_depth:
                self.max_depth = depth
                self.lca = root
            return depth
        left = self.dfs(root.left, depth + 1)
        right = self.dfs(root.right, depth + 1)
        if left == right == self.max_depth:
            self.lca = root
        return max(left, right)