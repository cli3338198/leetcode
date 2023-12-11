# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def dfs(self, root: Optional[TreeNode], res: List[int]) -> List[int]:
        if not root:
            return []
        self.dfs(root.left, res)
        if not root.left and not root.right:
            res.append(root.val)
        self.dfs(root.right, res)
        return res
    
    def leafSimilar(self, root1: Optional[TreeNode], root2: Optional[TreeNode]) -> bool:
        list1, list2 = self.dfs(root1, []), self.dfs(root2, [])
        if len(list1) != len(list2):
            return False
        for i in range(0, len(list1)):
            if list1[i] != list2[i]:
                return False
        return True