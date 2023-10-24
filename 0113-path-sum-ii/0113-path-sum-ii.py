# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def pathSum(self, root: Optional[TreeNode], targetSum: int) -> List[List[int]]:
        res, stack = [], []
        if not root:
            return res
        stack.append([root, targetSum, []])
        while stack:
            cur, targetSum, path = stack.pop()
            if not cur.left and not cur.right and cur.val == targetSum:
                res.append([*path, cur.val])
            if cur.left:
                stack.append([cur.left, targetSum - cur.val, [*path, cur.val]])
            if cur.right:
                stack.append([cur.right, targetSum - cur.val, [*path, cur.val]])
        return res
    
        #
        
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