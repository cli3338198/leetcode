# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def averageOfSubtree(self, root: Optional[TreeNode]) -> int:
        
        def dfs(root: Optional[TreeNode]) -> List[int]:
            if not root:
                return [0, 0, 0]
            res1, sum1, n1 = dfs(root.left)
            res2, sum2, n2 = dfs(root.right)
            sum3 = sum1 + sum2 + root.val
            n3 = n1 + n2 + 1
            avg = sum3 // n3
            res3 = res1 + res2 + (1 if avg == root.val else 0)
            return [res3, sum3, n3]
        
        return dfs(root)[0]