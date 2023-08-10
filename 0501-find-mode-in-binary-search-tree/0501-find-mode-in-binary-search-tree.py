# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def findMode(self, root: Optional[TreeNode]) -> List[int]:
        res, max_cnt, cur_cnt, cur_val = [], 0, 0, None
        
        def dfs(root: Optional[TreeNode]) -> None:
            nonlocal res
            nonlocal max_cnt
            nonlocal cur_cnt
            nonlocal cur_val
            if not root:
                return
            dfs(root.left)
            if cur_val == root.val:
                cur_cnt += 1
            else:
                cur_cnt = 1
            cur_val = root.val
            if cur_cnt > max_cnt:
                max_cnt = cur_cnt
                res = [root.val]
            elif cur_cnt == max_cnt:
                res.append(root.val)
            dfs(root.right)
        
        dfs(root)
        return res