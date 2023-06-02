# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def getAllElements(self, root1: TreeNode, root2: TreeNode) -> List[int]:
        
        def dfs(root: TreeNode) -> List[int]:
            res = []
            stack = []
            while root or stack:
                if root:
                    stack.append(root)
                    root = root.left
                else:
                    root = stack.pop()
                    res.append(root.val)
                    root = root.right
            return res
        
        def merge(a: List[int], b: List[int]) -> List[int]:
            res = []
            i, j = 0, 0
            while i < len(a) and j < len(b):
                if a[i] < b[j]:
                    res.append(a[i])
                    i += 1
                else:
                    res.append(b[j])
                    j += 1
            for k in range(i, len(a)):
                res.append(a[k])
            for k in range(j, len(b)):
                res.append(b[k])
            return res
        
        a = dfs(root1)
        b = dfs(root2)
        return merge(a, b)
        