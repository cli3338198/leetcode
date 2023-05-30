# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def sumEvenGrandparent(self, root: TreeNode) -> int:
        
        def dfs(cur: TreeNode, parent: TreeNode, grandparent: TreeNode) -> int:
            if not cur:
                return 0
            cur_sum = 0
            if grandparent and grandparent.val % 2 == 0:
                cur_sum += cur.val
            return cur_sum + dfs(cur.left, cur, parent) + dfs(cur.right, cur, parent)
        
        return dfs(root, None, None)