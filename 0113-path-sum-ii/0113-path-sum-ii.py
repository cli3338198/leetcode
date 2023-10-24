# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def pathSum(self, root: Optional[TreeNode], targetSum: int) -> List[List[int]]:
        res = []
        
        def dfs(root: Optional[TreeNode], targetSum: int, curList: List[int]) -> List[List[int]]:
            if not root:
                return
            if not root.left and not root.right and targetSum == root.val:
                res.append([x for x in curList] + [root.val])
                return
            dfs(root.left, targetSum - root.val, [*curList, root.val])
            dfs(root.right, targetSum - root.val, [*curList, root.val])
            
        dfs(root, targetSum, [])
        return res